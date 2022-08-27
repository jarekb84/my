import { formatDate } from './dateUtils';

describe('dateUtils', () => {
    describe('formatDate', () => {
        it('should return the fallback value when date is not provided', () => {
            expect(formatDate(null, 'MM/dd')).toBe('');
        });

        it('should return a custom fallback value when date is not provided', () => {
            expect(formatDate(null, 'MM/dd', 'foobar')).toBe('foobar');
        });

        it('should return the fallback value when an invalid date string is provided', () => {
            expect(formatDate('August', 'MM/dd')).toBe('');
        });

        it('should return a formatted date range', () => {
            expect(formatDate('2012-08-03', 'MM/dd')).toBe('08/03');
        });
    });
});