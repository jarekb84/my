export interface ResumeJson {
    basics: Basics;
    work: WorkItem[];
    education: Education[];
    languages: Language[];
    skills: SkillSet[];
    meta: Meta;
}

interface Basics {
    name: string;
    label: string;
    email: string;
    url: string;
    summary: string;

}

export interface WorkItem {
    name: string;
    location: string;
    url: string;
    position: string;
    startDate: string;
    endDate?: string;
    highlights?: string[];
}

interface Education {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
}

interface Language {
    language: string;
    fluency: string;
}

interface SkillSet {
    name: string;
    keywords: string[];
}

interface Meta {
    canonical: string;
    version: string;
    lastModified: string;
}