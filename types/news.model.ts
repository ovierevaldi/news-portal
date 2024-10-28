export type NewsData = {
    id: number;
    title: string;
    abstract: string;
    section: string;
    media: any[];
    published_date: Date
    updated: Date
    source: string
    url: string
} | null;