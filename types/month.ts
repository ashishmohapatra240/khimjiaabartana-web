import { HolidayType, SubhadinaType } from "./calendar";

export interface MonthData {
    name: string;
    odia: {
        first: string;
        second: string;
    };
    dates: {
        start: string;
        end: string;
    };
    festival: {
        name: string;
        description: string;
    };
    dateDetails: {
        date: string;
        significance: string;
    }[];
    holidays: HolidayType[];
    subhadina: SubhadinaType;
    moonIcons: Record<number, string>;
}
