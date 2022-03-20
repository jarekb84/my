import React, { FC } from 'react';
import { Job } from '../types';
import Position from './position';
import DateRange from './dateRange/dateRange';

const Job: FC<Job> = ({ companyName, positions, highlights, startDate, endDate }) => {
    return <div>
        <h3>{companyName}</h3>
        <div><DateRange start={startDate} end={endDate} /></div>
        <div>
            {positions.map(position => <Position key={`${companyName} ${position.title}`} {...position} />)}
        </div>
        <div>
            {highlights?.map(highlight => <p key={highlight}>{highlight}</p>)}
        </div>
    </div>;
};

export default Job;