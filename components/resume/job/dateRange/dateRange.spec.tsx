import React from 'react';
import { render, screen } from '@testing-library/react';

import DateRange from './dateRange';

describe('Date Range', () => {
    it('should return a formatted date range', () => {
        render(<DateRange start="2018-03-01" end="2020-03-01" />);
        expect(screen.getByText('03/2018 - 03/2020')).toBeTruthy();
    });
});