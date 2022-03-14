import React, { FC } from 'react';
import Company from './company/company';

interface ResumeProps {
    data: Resume
}

const Resume: FC<ResumeProps> = ({ data }) => {
    return <div>
        <h1>{data.basics.name}</h1>
        <div>
            <div>
                <strong>Email</strong> {data.basics.email}
                <strong>Github</strong> {data.basics.url}
            </div>
        </div>
        <h2>Summary of Qualifications</h2>
        <div>
            {data.basics.summary}
        </div>
        <h2>Professional Experience</h2>
        {data.work.map(company => <Company {...company} key={company.name} />)}
    </div>;
};

interface Work {
    name: string;
    position: string;
    startDate: string;
    endDate?: string;
    skills: string[];
    highlights?: string[]
}

interface Basics {
    name: string;
    email: string;
    url: string;
    summary: string;
}
interface Resume {
    basics: Basics;
    work: Work[]
}

export default Resume;