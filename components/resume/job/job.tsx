import React, { FC } from 'react';
import { Job } from '../types';
import Position from './position';

const Job: FC<Job> = ({ companyName, positions, highlights }) => {
    return <div>
        <h3>{companyName}</h3>
        <div>
            {positions.map(position => <Position key={`${companyName} ${position.title}`} {...position} />)}
        </div>
        <div>
            {highlights?.map(highlight => <p key={highlight}>{highlight}</p>)}
        </div>
    </div>;
};

export default Job;