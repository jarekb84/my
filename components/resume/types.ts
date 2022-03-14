export interface Basics {
    name: string;
    email: string;
    url: string;
    summary: string;
}

export interface Job {
    companyName: string;
    startDate: string;
    endDate: string | null;
    positions: Position[];
    highlights: string[]
}

export interface Position {
    title: string;
    startDate: string;
    endDate: string | null;
}