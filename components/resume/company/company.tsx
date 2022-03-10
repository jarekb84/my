import React, { FC } from 'react'
import Position from './positions';
import Skills from './skills';

interface Position {
    title: string;
    startDate: string;
    endDate?: string;
}

interface CompanyProps {
    name: string;
    positions: Position[];
    startDate: string;
    endDate?: string;
    skills: string[];
    highlights: string[]
}

const Company: FC<CompanyProps> = ({ name, skills, positions, highlights }) => {
    return <div>
        <h3>{name}</h3>
        <Skills skills={skills} />
        <div>
            {positions.map(position => <Position key={`${name} ${position.title}`} {...position} />)}
        </div>
        <div>
            {highlights.map(highlight => <p key={highlight}>{highlight}</p>)}
        </div>
    </div>
}

export default Company