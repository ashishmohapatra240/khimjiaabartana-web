import { holidayColors } from "@/app/constants/HolidayColors";
import { HolidayType } from "@/types/calendar";

import { SubhadinaType } from "@/types/calendar";

export const mayData = {
    name: "MAY",
    odia: {
        first: "ବୈଶାଖ",
        second: "ଜ୍ୟେଷ୍ଠ",
    },
    dates: {
        start: "ମେଷ ଦି୧୮ନ",
        end: "ବୃଷ ଦି୧୭ନ",
    },
    festival: {
        name: "ସାବିତ୍ରୀ ବ୍ରତ",
        description: "ସାବିତ୍ରୀ ବ୍ରତ ବା ସାବିତ୍ରୀ ଅମାବାସ୍ୟା ଓଡ଼ିଶାରେ ସଧବା ନାରୀମାନଙ୍କ ଦ୍ୱାରା ପାଳିତ ଏକ ଓଷା । ଜ୍ୟେଷ୍ଠ ମାସ ଅମାବାସ୍ୟା ତିଥିରେ ସାବିତ୍ରୀ ଓଷା ପାଳନ କରାଯାଇଥାଏ । ସଧବା ନାରୀମାନେ ନିଜ ପତିଙ୍କର ଦୀର୍ଘ ଆୟୁଷ ପାଇଁ ମଙ୍ଗଳ ମନାସି ସାବିତ୍ରୀଙ୍କ ପରି ଆଜୀବନ ସଧବା ହେବା ପାଇଁ ଓଷା କରିଥାନ୍ତି । ପୂଜା ଦିନରେ ମହିଳାମାନେ ବ୍ରତ କଥା ଶୁଣନ୍ତି । ଏହି ପୂଜା ମହିଳାମାନଙ୍କ ସମର୍ପଣ, ପ୍ରେମ ଓ ଶ୍ରଦ୍ଧାର ପ୍ରତୀକ । ଏହି ବ୍ରତ ଘରେ ନୈତିକତା ଓ ପାରିବାରିକ ଶାନ୍ତି ବଜାୟ ରଖିବାରେ ସାହାଯ୍ୟ କରେ ।",
    },
    dateDetails: [
        { date: "1", significance: "୧୯ ଚତୁର୍ଥୀ ରେବତୀ ମୀନ" },
        { date: "2", significance: "୨୦ ପଞ୍ଚମୀ ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "3", significance: "୨୧ ଷଷ୍ଠୀ ଦ୍ଵିଜା ମେଷ" },
        { date: "4", significance: "୨୨ ସପ୍ତମୀ କୃତ୍ତିକା ବୃଷ" },
        { date: "5", significance: "୨୩ ଅଷ୍ଟମୀ ରୋହିଣୀ ବୃଷ" },
        { date: "6", significance: "୨୪ ନବମୀ ମୃଗଶିରା ବୃଷ" },
        { date: "7", significance: "୨୫ ଦଶମୀ ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "8", significance: "୨୬ ଏକାଦଶୀ ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "9", significance: "୨୭ ଦ୍ୱାଦଶୀ ପୁଷ୍ୟା କର୍କଟ" },
        { date: "10", significance: "୨୮ ତ୍ରୟୋଦଶୀ ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "11", significance: "୨୯ ଚତୁର୍ଦ୍ଦଶୀ ମଘା ସିଂହ" },
        { date: "12", significance: "୩୦ ପୂର୍ଣ୍ଣିମା ପୂର୍ବାଫାଃ ସିଂହ" },
        { date: "13", significance: "୧ ପ୍ରତିପଦ ଉତ୍ତରାଫାଃ ସିଂହ" },
        { date: "14", significance: "୨ ଦ୍୵ିତୀୟା ହସ୍ତା କନ୍ୟା" },
        { date: "15", significance: "୩ ତୃତୀୟା ଚିତ୍ରା କନ୍ୟା" },
        { date: "16", significance: "୪ ଚତୁର୍ଥୀ ସ୍ୱାତୀ ତୁଳା" },
        { date: "17", significance: "୫ ପଞ୍ଚମୀ ବିଶାଖା ତୁଳା" },
        { date: "18", significance: "୬ ଷଷ୍ଠୀ ଅନୁରାଧା ବିଛା" },
        { date: "19", significance: "୭ ସପ୍ତମୀ ଜ୍ୟେଷ୍ଠା ବିଛା" },
        { date: "20", significance: "୮ ଅଷ୍ଟମୀ ମୂଳା ଧନୁ" },
        { date: "21", significance: "୯ ନବମୀ ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "22", significance: "୧୦ ଦଶମୀ ଉତ୍ତରାଷାଢ଼ା ମକର" },
        { date: "23", significance: "୧୧ ଏକାଦଶୀ ଶ୍ରବଣା ମକର" },
        { date: "24", significance: "୧୨ ଦ୍ୱାଦଶୀ ଧନିଷ୍ଠା କୁମ୍ଭ" },
        { date: "25", significance: "୧୩ ତ୍ରୟୋଦଶୀ ଶତଭିଷା କୁମ୍ଭ" },
        { date: "26", significance: "୧୪ ଚତୁର୍ଦ୍ଦଶୀ ଉତ୍ତରାଭାଦ୍ର ମୀନ" },
        { date: "27", significance: "୧୫ ପୂର୍ଣ୍ଣିମା ରେବତୀ ମୀନ" },
        { date: "28", significance: "୧୬ ପ୍ରତିପଦ ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "29", significance: "୧୭ ଦ୍୵ିତୀୟା ଦ୍ଵିଜା ମେଷ" },
        { date: "30", significance: "୧୮ ତୃତୀୟା କୃତ୍ତିକା ବୃଷ" },
        { date: "31", significance: "୧୯ ଚତୁର୍ଥୀ ରୋହିଣୀ ବୃଷ" }
    ],

    holidays: [
        {
            date: "୦୧",
            englishDate: 1,
            isoDate: "2025-05-01",
            festival: "ଶ୍ରମିକ ଦିବସ - Labour Day",
            color: holidayColors[0]
        },
        {
            date: "୨୬",
            englishDate: 26,
            isoDate: "2025-05-26",
            festival: "ସାବିତ୍ରୀ ବ୍ରତ - Sabitri Brata",
            color: holidayColors[1]
        },
        {
            date: "୦୨",
            englishDate: 2,
            isoDate: "2025-05-02",
            festival: "ଜଗଦ୍ ଗୁରୁ ଆଦି ଶଙ୍କରାଚାର୍ଯ୍ୟଙ୍କ ଜୟନ୍ତୀ",
            color: holidayColors[4]
        },
        {
            date: "୦୩",
            englishDate: 3,
            isoDate: "2025-05-03",
            festival: "ରାମାନୁଚାର୍ଯ୍ୟଙ୍କ ଜୟନ୍ତୀ, ଶନିଶ୍ଚର ମହାଯଜ୍ଞ",
            color: holidayColors[4]
        },
        {
            date: "୦୫",
            englishDate: 5,
            isoDate: "2025-05-05",
            festival: "ନିଳାଦ୍ରୀ ମହୋଦୟାଷ୍ଟମୀ, ସୀତା ନବମୀ",
            color: holidayColors[4]
        },
        {
            date: "୦୮",
            englishDate: 8,
            isoDate: "2025-05-08",
            festival: "ମୋହିନୀ ଏକାଦଶୀ, ଲକ୍ଷ୍ମୀନାରାୟଣ ଏକାଦଶୀ ବ୍ରତ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4]
        },
        {
            date: "୧୧",
            englishDate: 11,
            isoDate: "2025-05-11",
            festival: "ନୃସିଂହ ଜନ୍ମ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ, ଶିବ ଓ ବେଢ଼ା ପରିକ୍ରମା",
            color: holidayColors[4]
        },
        {
            date: "୧୨",
            englishDate: 12,
            isoDate: "2025-05-12",
            festival: "ଚନ୍ଦନ ପୂର୍ଣ୍ଣିମା, ଚନ୍ଦ୍ରପୂଜା, ବୁଦ୍ଧ ଜୟନ୍ତୀ, ବୈଶାଖ ବ୍ରତ ସମାପନ",
            color: holidayColors[4]
        },
        {
            date: "୧୪",
            englishDate: 14,
            isoDate: "2025-05-14",
            festival: "ମାସାନ୍ତ",
            color: holidayColors[4]
        },
        {
            date: "୧୫",
            englishDate: 15,
            isoDate: "2025-05-15",
            festival: "ବୃଷ ସଂକ୍ରାନ୍ତି, ବୃହସ୍ପତି ସଞ୍ଚାର ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4]
        },
        {
            date: "୧୭",
            englishDate: 17,
            isoDate: "2025-05-17",
            festival: "ଶରଣ ଆରମ୍ଭ",
            color: holidayColors[4]
        },
        {
            date: "୧୯",
            englishDate: 19,
            isoDate: "2025-05-19",
            festival: "ଶ୍ରୀକ୍ଷେତ୍ରେ ଭଉଁରୀ",
            color: holidayColors[4]
        },
        {
            date: "୨୦",
            englishDate: 20,
            isoDate: "2025-05-20",
            festival: "ଉତ୍କଳେ ଭଉଁରୀ ଓ ଶ୍ରୀକ୍ଷେତ୍ରେ ହଳଦୀ ପାଣି",
            color: holidayColors[4]
        },
        {
            date: "୨୨",
            englishDate: 22,
            isoDate: "2025-05-22",
            festival: "ଶରଣ ଶେଷ",
            color: holidayColors[4]
        },
        {
            date: "୨୩",
            englishDate: 23,
            isoDate: "2025-05-23",
            festival: "ଜଳକ୍ରୀଡା ଏକାଦଶୀ ଉପବାସ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4]
        },
        {
            date: "୨୫",
            englishDate: 25,
            isoDate: "2025-05-25",
            festival: "ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢ଼ା",
            color: holidayColors[4]
        },
        {
            date: "୨୭",
            englishDate: 27,
            isoDate: "2025-05-27",
            festival: "ଜ୍ୟେଷ୍ଠ ଅମାବାସ୍ୟା, ଗୋସହସ୍ରୀ ସ୍ନାନ",
            color: holidayColors[4]
        },
        {
            date: "୨୮",
            englishDate: 28,
            isoDate: "2025-05-28",
            festival: "ଚନ୍ଦ୍ର ଦର୍ଶନ, ପୂଜା ଓ ଉପବାସ",
            color: holidayColors[4]
        },
        {
            date: "୨୯",
            englishDate: 29,
            isoDate: "2025-05-29",
            festival: "ରମ୍ଭା ତୃତୀୟା",
            color: holidayColors[4]
        },
        {
            date: "୩୦",
            englishDate: 30,
            isoDate: "2025-05-30",
            festival: "ଉମା ଚତୁର୍ଥୀ",
            color: holidayColors[4]
        },
        {
            date: "୩୧",
            englishDate: 31,
            isoDate: "2025-05-31",
            festival: "ଶିବ ବିବାହ",
            color: holidayColors[4]
        }
    ] as HolidayType[],

    subhadina: {
        bibaha: [2, 4, 7, 9, 11, 14, 16, 18],
        brataGhara: [2, 7, 11, 16],
    } as SubhadinaType,
    moonIcons: {
        12: 'Purnima',
        27: 'Amavasya',
        23: 'KrishnaPakshaEkadashi',
        8: 'ShuklaPakshaEkadashi',
    },
}; 