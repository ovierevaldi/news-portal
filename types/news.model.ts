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

export type NewsFilter = {
    begin_date: Date | null,
    end_date: Date | null,
    sort: string
}