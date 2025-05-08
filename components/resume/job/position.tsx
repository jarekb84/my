import React, { FC } from 'react';
import type { Position } from '../types';
import DateRange from './dateRange/dateRange';

const Position: FC<Position> = ({ title, startDate, endDate }) => {
    return <div>
        <strong>{title}</strong>
        {' '}
        <DateRange start={startDate} end={endDate} />
    </div>;
};

export default Position;