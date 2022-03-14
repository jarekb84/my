import React, { FC } from 'react';
import Position from './positions';
import Skills from './skills';

interface CompanyProps {
    name: string;
    position: string;
    startDate: string;
    endDate?: string;    
    highlights: string[]
}

const Company: FC<CompanyProps> = ({ name, position, highlights }) => {
    return <div>
        <h3>{name}</h3>
        {/* <Skills skills={skills} /> */}
        {/* <div>
            {positions.map(position => <Position key={`${name} ${position.position}`} {...position} />)}
        </div> */}
        <div>
            {highlights?.map(highlight => <p key={highlight}>{highlight}</p>)}
        </div>
    </div>;
};

export default Company;