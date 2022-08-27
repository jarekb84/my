import React, { FC } from 'react';
import { default as ResumeComponent } from '../components/resume/resume';
import { Basics, Job } from '../components/resume/types';
import resumeJson from '../data/resume/resume.json';
import { ResumeJson, WorkItem } from '../data/resume/types';

interface ResumeProps {
    basics: Basics;
    skills: string[];
    jobs: Job[];
}

const Resume: FC<ResumeProps> = uiModel => {
    return <ResumeComponent {...uiModel} />;
};

export async function getStaticProps() {
    const uiModel = transform(resumeJson as ResumeJson);

    return {
        props: uiModel,
    };
}

export default Resume;

function transform({ basics, skills, work }: ResumeJson) {
    const uiModel = {
        basics: {
            name: basics.name,
            email: basics.email,
            url: basics.url,
            summary: basics.summary,
        },
        skills: skills.flatMap(skillSet => skillSet.keywords),
        jobs: groupWorkItemsByCompany(work),
    };

    return uiModel;
}

function groupWorkItemsByCompany(work: WorkItem[]) {
    // Using map since it remembers insertion order
    // so when converting back to array
    // we don't need to worry bout sorting by job start/end times
    const jobs = new Map<string, Job>();

    work.forEach(workItem => {
        let job: Job;

        if (jobs.has(workItem.name)) {
            job = jobs.get(workItem.name) as Job;
        } else {
            job = {
                companyName: workItem.name,
                startDate: workItem.startDate,
                endDate: workItem.endDate || null,
                positions: [],
                highlights: [],
            };
        }

        // If there are multiple positions for a single company
        // we're assuming the json resume has the correct order
        // such that endDate is set once and startDate get's set each iteration
        // end result being an overall date range at a company
        job.startDate = workItem.startDate;

        job.positions.push({
            title: workItem.position,
            startDate: workItem.startDate,
            endDate: workItem.endDate || null,
        });

        if (workItem.highlights) {
            job.highlights = job.highlights.concat(workItem.highlights);
        }

        jobs.set(workItem.name, job);
    });

    return Array.from(jobs.values());
}