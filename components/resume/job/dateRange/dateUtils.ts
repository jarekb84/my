import { parseISO, format, isValid } from 'date-fns';

export function formatDate(dateVal: string | null, formatPattern: string, fallback = '') {
    if (!dateVal) {
        return fallback;
    }

    try {
        const parsedDate = parseISO(dateVal);

        if (!isValid(parsedDate)) {
            return fallback;
        }

        return format(parsedDate, formatPattern);
    } catch (error) {
        console.error('Error formatting date:', error);

        return fallback;
    }
}