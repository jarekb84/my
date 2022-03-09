import React, { FC } from 'react'
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
            {data.basics.summaryOfQualifications.map(qualification => {
                return <div key={qualification}>{qualification}</div>
            })}
        </div>
        <h2>Professional Experience</h2>
        {data.work.map(company => <Company {...company} key={company.name} />)}
    </div>
}

interface Position {
    title: string;
    startDate: string;
    endDate?: string;
}

interface Work {
    name: string;
    location: string;
    description: string;
    position: string;
    positions: Position[];
    url: string;
    startDate: string;
    endDate?: string;
    summary: string;
    skills: string[];
    highlights: string[]
}

interface Basics {
    name: string;
    label: string;
    email: string;
    url: string;
    summaryOfQualifications: string[]
}
interface Resume {
    basics: Basics;
    work: Work[]
}

export default Resume