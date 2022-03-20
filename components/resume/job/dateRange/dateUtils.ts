import { parseISO, format, isDate } from 'date-fns';

export function formatDate(dateVal: string | null, formatPattern: string, fallback = '') {
    if (!dateVal) {
        return fallback;
    }

    const parsedDate = parseISO(dateVal);

    if (!isDate(parsedDate)) {
        return fallback;
    }

    return format(parsedDate, formatPattern);
}