import React, { FC } from 'react';

interface PositionProps {
    title: string;
    startDate: string;
    endDate?: string;
}

const Position: FC<PositionProps> = ({ title, startDate, endDate }) => {
    return <div>
        <strong>{title}</strong> {startDate} -- {endDate}
    </div>;
};

export default Position;