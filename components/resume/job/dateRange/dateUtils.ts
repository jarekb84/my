import { parseISO, format } from 'date-fns';

export function formatDate(dateVal: string | null, formatPattern: string, fallback = '') {
    if (!dateVal) {
        return fallback;
    }

    try {
        const parsedDate = parseISO(dateVal);

        return format(parsedDate, formatPattern);
    } catch (error) {
        console.error(error);

        return fallback;
    }
}