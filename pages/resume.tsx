import React, { FC } from 'react'
import Resume from '../components/resume/resume'
import jbatorski from '../data/resume/jbatorski.json'

interface ResumePageProps {
    data: any
}

const ResumePage: FC<ResumePageProps> = ({ data }) => {
    return <Resume data={data} />
}

export async function getStaticProps() {

    return {
        props: {
            data: jbatorski,
        },
    }
}

export default ResumePage