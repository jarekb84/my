import React, { FC } from 'react';
import Job from './job/job';
import Skills from './skills';
import { Basics, Job as IJob } from './types';


interface ResumeProps {
    basics: Basics;
    skills: string[];
    jobs: IJob[]
}

const Resume: FC<ResumeProps> = ({ basics, skills, jobs }) => {
    return <div>
        <h1>{basics.name}</h1>
        <div>
            <div>
                <strong>Email</strong> {basics.email}
                <strong>Github</strong> {basics.url}
            </div>
        </div>
        <div>
            {basics.summary}
        </div>
        <h2>Skills</h2>
        <div>
            <Skills skills={skills} />
        </div>
        <h2>Professional Experience</h2>
        {jobs.map(job => <Job {...job} key={job.companyName} />)}
    </div>;
};

export default Resume;