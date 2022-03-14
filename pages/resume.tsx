import React, { FC } from 'react';
import Resume from '../components/resume/resume';
import resumeData from '../data/resume/resume.json';

interface ResumePageProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
}

const ResumePage: FC<ResumePageProps> = ({ data }) => {
    return <Resume data={data} />;
};

export async function getStaticProps() {
    return {
        props: {
            data: resumeData,
        },
    };
}

export default ResumePage;