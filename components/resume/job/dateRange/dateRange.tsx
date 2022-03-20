import React, { FC } from 'react';

import { formatDate } from './dateUtils';

interface DateRangeProps {
    start: string;
    end: string | null,
    fallback?: string
}

const DateRange: FC<DateRangeProps> = ({ start, end, fallback = 'Present' }) => {
    return <span>
        {formatDate(start, 'MM/yyyy')} - {formatDate(end, 'MM/yyyy', fallback)}
    </span>;
};

export default DateRange;