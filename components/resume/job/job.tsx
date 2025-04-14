import React, { FC } from 'react';
import type { Job as IJob, Position as IPosition } from '../types';
import DateRange from './dateRange/dateRange';
import Position from './position';

interface PositionsListProps {
    companyName: string;
    positions: IPosition[];
}

const PositionsList: FC<PositionsListProps> = ({ companyName, positions }) => {
    if (positions.length <= 1) {
        return null;
    }

    return (
        <div className="resume__job__positions-list">
            {positions.map(position => <Position key={`${companyName} ${position.title}`} {...position} />)}
        </div>
    );
};

interface HighlightsListProps {
    highlights?: string[];
}

const HighlightsList: FC<HighlightsListProps> = ({ highlights }) => {
    if (!highlights || highlights.length === 0) {
        return null;
    }

    return (
        <ul className="resume__job__highlights">
            {highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
        </ul>
    );
};


const Job: FC<IJob> = ({ companyName, positions, highlights, startDate, endDate }) => {
    const singlePositionTitle = positions.length === 1 ? positions[0].title : null;

    return <div className="resume__job">
        <div className="resume__job__header">
            <div className="resume__job__company">
                <div className="resume__job__company__info">{companyName}</div>
                {singlePositionTitle && <div className="resume__job__position-title"><strong>{singlePositionTitle}</strong></div>}
            </div>
            <div className="resume__job__date-range">
                <DateRange start={startDate} end={endDate} />
            </div>
        </div>
        <PositionsList companyName={companyName} positions={positions} />
        <HighlightsList highlights={highlights} />
    </div>;
};

export default Job;