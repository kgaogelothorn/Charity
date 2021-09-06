export interface Donation {
    id: number;
    image: string;
    heading: string;
    subHeading: string;
    description: string;
    aboutImg: string;
    cta: boolean;
    cta_url: string;
    popular: boolean;
    end: boolean;
    goal: string;
    days: number;
    contributions: number;
    progress: number;
}