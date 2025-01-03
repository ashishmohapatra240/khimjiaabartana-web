export type HolidayType = {
  date: string;
  englishDate: number;
  festival: string;
  color: string;
};


export type SubhadinaType = {
  bibaha: number[];
  brataGhara: number[];
};

export type DateDetailsType = {
  date: string;
  significance: string;
};

export type MonthDataType = {
  holidays: HolidayType[];
  subhadina: SubhadinaType;
  dateDetails: DateDetailsType[];
  moonIcons: Record<number, string>;
};

export type MoonType = {
  icon: string;
};

