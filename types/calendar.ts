export type HolidayType = {
  date: number;
  festival: string;
  color: string;
};

export type SubhadinaType = {
  bibaha: number[];
  brataGhara: number[];
};

export type DateDetailsType = {
  details: string;
};

export type MonthDataType = {
  holidays: HolidayType[];
  subhadina: SubhadinaType;
  dateDetails: Record<number, DateDetailsType>;
  moonIcons: Record<number, string>;
};

export type MoonType = {
  icon: string;
};

