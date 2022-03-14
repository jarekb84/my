import React, { FC } from 'react';
import { Position } from '../types';

const Position: FC<Position> = ({ title, startDate, endDate }) => {
    return <div>
        <strong>{title}</strong> {startDate} -- {endDate}
    </div>;
};

export default Position;