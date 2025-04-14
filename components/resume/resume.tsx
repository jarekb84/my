import React, { FC } from 'react';
import Layout from '../common/layout';
import Job from './job/job';
import Skills from './skills/skills';
import { Basics, Job as IJob } from './types';

interface ResumeProps {
    basics: Basics;
    skills: string[];
    jobs: IJob[]
}

const Resume: FC<ResumeProps> = ({ basics, skills, jobs }) => {
    return <Layout pageTitle="Resume">
        <div className="resume">
            <div className="resume__contact-info">
                <h1>{basics.name}</h1>
                <div className="resume__contact-info__basics">
                    <div>
                        <strong>Email </strong>
                        <a href={`mailto:${basics.email}`}>
                            {basics.email}
                        </a>
                    </div>
                    <div>
                        <strong>Github </strong>
                        <a href={basics.url} target="_blank" rel="noreferrer">
                            {basics.url.replace('https://', '')}
                        </a>
                    </div>
                </div>
            </div>
            <div className="resume__summary">
                {basics.summary}
            </div>
            <h2>Skills</h2>
            <div>
                <Skills skills={skills} />
            </div>
            <h2>Professional Experience</h2>
            {jobs.map(job => <Job {...job} key={job.companyName} />)}
        </div>
    </Layout>;
};

export default Resume;