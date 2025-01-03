import { holidayColors } from "@/app/constants/HolidayColors";
import { HolidayType } from "@/types/calendar";

import { SubhadinaType } from "@/types/calendar";

export const septemberData = {
    name: "SEPTEMBER",
    odia: {
        first: "ଭାଦ୍ରବ",
        second: "ଆଶ୍ୱିନ",
    },
    dates: {
        start: "ସିଂହ ଦି୧୮ନ",
        end: "କନ୍ୟା ଦି୧୭ନ",
    },
    festival: {
        name: "ଗଣେଶ ପୂଜା",
        description: "ଗଣେଶ ପୂଜା ହେଉଛି ଗଣପତିଙ୍କର ଜନ୍ମଦିନ । ଏହି ଦିନ ଗଣେଶଙ୍କୁ ବିଶେଷ ପୂଜା କରାଯାଏ ।",
    },
    dateDetails: [
        { date: "1", significance: "୨୨ ସପ୍ତମୀ ମୂଳା ଧନୁ" },
        { date: "2", significance: "୨୩ ଅଷ୍ଟମୀ ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "3", significance: "୨୪ ନବମୀ ଉତ୍ତରାଷାଢ଼ା ମକର" },
        { date: "4", significance: "୨୫ ଦଶମୀ ଶ୍ରବଣା ମକର" },
        { date: "5", significance: "୨୬ ଏକାଦଶୀ ଧନିଷ୍ଠା କୁମ୍ଭ" },
        { date: "6", significance: "୨୭ ଦ୍ୱାଦଶୀ ଶତଭିଷା କୁମ୍ଭ" },
        { date: "7", significance: "୨୮ ତ୍ରୟୋଦଶୀ ଉତ୍ତରାଭାଦ୍ର ମୀନ" },
        { date: "8", significance: "୨୯ ଚତୁର୍ଦ୍ଦଶୀ ରେବତୀ ମୀନ" },
        { date: "9", significance: "୩୦ ପୂର୍ଣ୍ଣିମା ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "10", significance: "୧ ପ୍ରତିପଦ ଦ୍ଵିଜା ମେଷ" },
        { date: "11", significance: "୨ ଦ୍୵ିତୀୟା କୃତ୍ତିକା ବୃଷ" },
        { date: "12", significance: "୩ ତୃତୀୟା ରୋହିଣୀ ବୃଷ" },
        { date: "13", significance: "୪ ଚତୁର୍ଥୀ ମୃଗଶିରା ବୃଷ" },
        { date: "14", significance: "୫ ପଞ୍ଚମୀ ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "15", significance: "୬ ଷଷ୍ଠୀ ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "16", significance: "୭ ସପ୍ତମୀ ପୁଷ୍ୟା କର୍କଟ" },
        { date: "17", significance: "୮ ଅଷ୍ଟମୀ ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "18", significance: "୯ ନବମୀ ମଘା ସିଂହ" },
        { date: "19", significance: "୧୦ ଦଶମୀ ପୂର୍ବାଫାଃ ସିଂହ" },
        { date: "20", significance: "୧୧ ଏକାଦଶୀ ଉତ୍ତରାଫାଃ ସିଂହ" },
        { date: "21", significance: "୧୨ ଦ୍ୱାଦଶୀ ହସ୍ତା କନ୍ୟା" },
        { date: "22", significance: "୧୩ ତ୍ରୟୋଦଶୀ ଚିତ୍ରା କନ୍ୟା" },
        { date: "23", significance: "୧୪ ଚତୁର୍ଦ୍ଦଶୀ ସ୍ୱାତୀ ତୁଳା" },
        { date: "24", significance: "୧୫ ପୂର୍ଣ୍ଣିମା ବିଶାଖା ତୁଳା" },
        { date: "25", significance: "୧୬ ପ୍ରତିପଦ ଅନୁରାଧା ବିଛା" },
        { date: "26", significance: "୧୭ ଦ୍୵ିତୀୟା ଜ୍ୟେଷ୍ଠା ବିଛା" },
        { date: "27", significance: "୧୮ ତୃତୀୟା ମୂଳା ଧନୁ" },
        { date: "28", significance: "୧୯ ଚତୁର୍ଥୀ ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "29", significance: "୨୦ ପଞ୍ଚମୀ ଉତ୍ତରାଷାଢ଼ା ମକର" },
        { date: "30", significance: "୨୧ ଷଷ୍ଠୀ ଶ୍ରବଣା ମକର" }
    ],
    holidays: [
        {
            date: "୧୭",
            englishDate: 17,
            festival: "ଇନ୍ଦ୍ରୋତ୍ସବ ପୂର୍ଣ୍ଣିମା - Biswakarma Puja",
            color: holidayColors[0],
            isoDate: "2025-09-17T00:00:00Z"
        },
        {
            date: "୨୧",
            englishDate: 21,
            festival: "ମହାଳୟା - Mahalaya",
            color: holidayColors[1],
            isoDate: "2025-09-21T00:00:00Z"
        },
        {
            date: "୦୧",
            englishDate: 1,
            festival: "ତାଳ ନବମୀ ଓ ଶ୍ରୀ ଶ୍ରୀ ଠାକୁର ଅନୁକୂଳ ଚନ୍ଦ୍ରଙ୍କ ଜୟନ୍ତୀ",
            color: holidayColors[4],
            isoDate: "2025-09-01T00:00:00Z"
        },
        {
            date: "୦୩",
            englishDate: 3,
            festival: "ପାର୍ଶ୍୍୭ପରିବର୍ତ୍ତନ (ବଡ଼) ଏକାଦଶୀ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-09-03T00:00:00Z"
        },
        {
            date: "୦୪",
            englishDate: 4,
            festival: "ସୁନିଆଁ ୧୪୩୩ ସାଇ ଅ୬୯ଙ୍କ ପ୍ରବେଶ, ବାମନ ଜନ୍ମ ଓ ଇନ୍ଦ୍ରଧ୍ବଜ ପୂଜା, ଗରୁଡ ପାର୍ଶ୍୍ୱପରିବର୍ତ୍ତନ, ଶରଣ ଆରମ୍ଭ",
            color: holidayColors[4],
            isoDate: "2025-09-04T00:00:00Z"
        },
        {
            date: "୦୫",
            englishDate: 5,
            festival: "ଗୁରୁ ଦିବସ ଓ ଡକ୍ଟର ସର୍ବପଲ୍ଲୀ ରାଧାକ୍ରିଷ୍ଣନ ଜୟନ୍ତୀ, ମହାପୁରୁଷ ମହମ୍ମଦଙ୍କ ଜନ୍ମ ଦିବସ, ମିଲାଦୁନନବି",
            color: holidayColors[4],
            isoDate: "2025-09-05T00:00:00Z"
        },
        {
            date: "୦୬",
            englishDate: 6,
            festival: "ଅଘୋର ଚତୁର୍ଦ୍ଦଶୀ, ଅନନ୍ତ ବ୍ରତ ଓ ଶ୍ରୀ ଦୁର୍ଗା ଓ ଶିବଙ୍କ ପାର୍ଶ୍୍ୱପରିବର୍ତ୍ତନ",
            color: holidayColors[4],
            isoDate: "2025-09-06T00:00:00Z"
        },
        // {
        //     date: "୦୭",
        //     englishDate: 7,
        //     festival: "ଇନ୍ଦ୍ରୋତ୍ସବ ପୂର୍ଣ୍ଣିମା, ଭାଗବତ ଜନ୍ମ, ଚନ୍ଦ୍ର ଗ୍ରହଣ ଓ ଚନ୍ଦ୍ରପୂଜା",
        //     color: holidayColors[4],
        //     isoDate: "2025-09-07T00:00:00Z"
        // },
        {
            date: "୦୮",
            englishDate: 8,
            festival: "ଅପରପକ୍ଷାରମ୍ଭ ଓ ଶରଣ ଶେଷ",
            color: holidayColors[4],
            isoDate: "2025-09-08T00:00:00Z"
        },
        {
            date: "୧୧",
            englishDate: 11,
            festival: "ଅଶ୍୭୍୍୭ପ ପଞ୍ଚମୀ",
            color: holidayColors[4],
            isoDate: "2025-09-11T00:00:00Z"
        },
        {
            date: "୧୩",
            englishDate: 13,
            festival: "ଗଜଷଷ୍ଠୀ",
            color: holidayColors[4],
            isoDate: "2025-09-13T00:00:00Z"
        },
        {
            date: "୧୪",
            englishDate: 14,
            festival: "ଦେବ୍ୟୁତ୍ ଥାପନ, ମୂଳାଷ୍ଟମୀ, ସହସ୍ର କୁମ୍ଭାଭିଷ୍ଟମୀ ପୂଜା, ଦ୍ଵିତୀବାହନ ଓଷା ଓ ଷୋଡ଼ଶଦିନାତ୍ମକ ପୂଜାରାରଭ",
            color: holidayColors[4],
            isoDate: "2025-09-14T00:00:00Z"
        },
        {
            date: "୧୭",
            englishDate: 17,
            festival: "କନ୍ୟା ସଂକ୍ରାନ୍ତି, ବିଶ୍୭୍୍୭କର୍ମା ପୂଜା, ଇନ୍ଦିରା ଏକାଦଶୀ, ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-09-17T00:00:00Z"
        },
        {
            date: "୨୦",
            englishDate: 20,
            festival: "ଶିବଚତୁର୍ଦ୍ଦଶୀ ଓ ବେଢ଼ା",
            color: holidayColors[4],
            isoDate: "2025-09-20T00:00:00Z"
        },
        {
            date: "୨୨",
            englishDate: 22,
            festival: "ଶ୍ରୀଦୁର୍ଗାଦେବ୍ୟୋଃ, ନବଦିନାତ୍ମକ ପୂଜାରାରଭଃ, ଶ୍ରୀବିରାଜାଦେବୀଙ୍କ ରଥଯାତ୍ରା",
            color: holidayColors[4],
            isoDate: "2025-09-22T00:00:00Z"
        },
        {
            date: "୨୩",
            englishDate: 23,
            festival: "ଚନ୍ଦ୍ରଦର୍ଶନ",
            color: holidayColors[4],
            isoDate: "2025-09-23T00:00:00Z"
        },
        {
            date: "୨୬",
            englishDate: 26,
            festival: "ନତଃ ପଞ୍ଚମୀ ଓ ବିରାଜାଦେବୀଙ୍କ ପଞ୍ଚମୀ ହୋମ",
            color: holidayColors[4],
            isoDate: "2025-09-26T00:00:00Z"
        },
        {
            date: "୨୭",
            englishDate: 27,
            festival: "ତପଃଷଷ୍ଠୀ, ବିଲ୍ବାବର࣍ଣ",
            color: holidayColors[4],
            isoDate: "2025-09-27T00:00:00Z"
        },
        {
            date: "୨୮",
            englishDate: 28,
            festival: "ପୀଠେ ଶ୍ରୀ ଦୁର୍ଗାଦେବୀଙ୍କ ତ୍ରିଦିନାତ୍ମକ ସପ୍ତମୀ ପୂଜା",
            color: holidayColors[4],
            isoDate: "2025-09-28T00:00:00Z"
        },
        {
            date: "୨୯",
            englishDate: 29,
            festival: "ପୀଠେ ମହାଷ୍ଟମୀ, ଶ୍ରୀ ମୃଣ୍ମୟୀ ଦେବୀଙ୍କ ତ୍ରିଦିନାତ୍ମକ ସପ୍ତମୀ ପୂଜା",
            color: holidayColors[4],
            isoDate: "2025-09-29T00:00:00Z"
        },
        {
            date: "୩୦",
            englishDate: 30,
            festival: "ପୀଠେ ମହାନବ஍ମୀ, ଶ୍ରୀ ମୃଣ୍ମୟୀ ଦେବୀଙ୍କ ମହାଷ୍ଟମୀ ପୂଜା, ସନ୍ଧିପୂଜା",
            color: holidayColors[4],
            isoDate: "2025-09-30T00:00:00Z"
        }
    ] as HolidayType[],

    subhadina: {
        bibaha: [2, 4, 7, 9, 11, 14, 16, 18],
        brataGhara: [2, 7, 11, 16],
    } as SubhadinaType,
    moonIcons: {
        7: 'Purnima',
        21: 'Amavasya',
        17: 'KrishnaPakshaEkadashi',
        3: 'ShuklaPakshaEkadashi',
    },
}; 