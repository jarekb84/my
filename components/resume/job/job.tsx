import React, { FC } from 'react';
import { Job } from '../types';
import DateRange from './dateRange/dateRange';
import Position from './position';

const Job: FC<Job> = ({ companyName, positions, highlights, startDate, endDate }) => {
    return <div>
        <div className="resume__job">
            <div className="resume__job__company">
                <div className="resume__job__company__info">{companyName}</div>
                {positions.length > 1 || <strong>{positions[0].title}</strong>}
            </div>
            <div><DateRange start={startDate} end={endDate} /></div>
        </div>
        {positions.length > 1 && <div>
            {positions.map(position => <Position key={`${companyName} ${position.title}`} {...position} />)}
        </div>}
        <div>
            {highlights?.map(highlight => <p key={highlight}>{highlight}</p>)}
        </div>
    </div>;
};

export default Job;