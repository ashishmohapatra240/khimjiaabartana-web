import { MonthDataType } from "@/types/calendar";

export const januaryData: MonthDataType = {
  holidays: [
    {
      date: 1,
      festival: "ନୂଆ ବର୍ଷ",
      color: "#4CAF50",
    },
    {
      date: 9,
      festival: "ଶାମ୍ବ ଦଶମୀ",
      color: "#2196F3",
    },
    {
      date: 14,
      festival: "ମକର ସଂକ୍ରାନ୍ତି",
      color: "#FF9800",
    },
    {
      date: 26,
      festival: "ଗଣତନ୍ତ୍ର ଦିବସ",
      color: "#9C27B0",
    },
  ],
  subhadina: {
    bibaha: [2, 5, 9, 15, 21, 25],
    brataGhara: [3, 7, 11, 18, 23, 28],
  },
  dateDetails: {
    1: { details: "ରବି ଦଶମୀ ପୁରନ୍ତ" },
    2: { details: "ସୋମ ଏକାଦଶୀ ପୁରନ୍ତ" },
    3: { details: "ମଙ୍ଗଳ ଦ୍ଵାଦଶୀ ପୁରନ୍ତ" },

  },
  moonIcons: {
    1: 'Purnima',
    14: 'Amavasya',
    20: 'KrishnaPakshaEkadashi',
    25: 'ShuklaPakshaEkadashi',
  }
};