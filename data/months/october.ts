import { holidayColors } from "@/app/constants/HolidayColors";
import { HolidayType } from "@/types/calendar";

import { SubhadinaType } from "@/types/calendar";

export const octoberData = {
    name: "OCTOBER",
    odia: {
        first: "ଆଶ୍ୱିନ",
        second: "କାର୍ତ୍ତିକ",
    },
    dates: {
        start: "କନ୍ୟା ଦି୧୮ନ",
        end: "ତୁଳା ଦି୧୭ନ",
    },
    festival: {
        name: "ଦଶହରା",
        description: "ଦୁର୍ଗା ପୂଜା ହେଉଛି ଅନ୍ୟାୟ ଉପରେ ନ୍ୟାୟର ବିଜୟର ନିଦର୍ଶନ । ଏହା ଆଶ୍ୱିନ ଶୁକ୍ଳପକ୍ଷ ଷଷ୍ଠୀ ତିଥିରୁ ଆରମ୍ଭ ହୋଇ ଆଶ୍ୱିନ ଶୁକ୍ଳପକ୍ଷ ଦଶମୀ ତିଥିରେ ଶେଷ ହୁଏ ।  ଅଷ୍ଟମୀ ଦିନ, ଓଡ଼ିଶାରେ କୁମାରୀ ପୂଜା ସହିତ ଚଣ୍ଡୀ ପାଠ କରାଯାଏ । ନବମୀରେ ଆୟୁଧ ପୂଜା ଓ ମହାଭୋଗ ପ୍ରସ୍ତୁତ କରାଯାଏ । ଦଶମୀ ଦିନ, ରାବଣ ପୋଡ଼ି ଏବଂ ଦୁର୍ଗା ମା'ଙ୍କର ବିସର୍ଜନ ସହିତ ଏହି ଶୁଭ ଉତ୍ସବ ସମାପ୍ତ ହୁଏ ।",
    },
    dateDetails: [
        { date: "1", significance: "୨୨ ସପ୍ତମୀ ଧନିଷ୍ଠା କୁମ୍ଭ" },
        { date: "2", significance: "୨୩ ଅଷ୍ଟମୀ ଶତଭିଷା କୁମ୍ଭ" },
        { date: "3", significance: "୨୪ ନବମୀ ଉତ୍ତରାଭାଦ୍ର ମୀନ" },
        { date: "4", significance: "୨୫ ଦଶମୀ ରେବତୀ ମୀନ" },
        { date: "5", significance: "୨୬ ଏକାଦଶୀ ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "6", significance: "୨୭ ଦ୍ୱାଦଶୀ ଦ୍ଵିଜା ମେଷ" },
        { date: "7", significance: "୨୮ ତ୍ରୟୋଦଶୀ କୃତ୍ତିକା ବୃଷ" },
        { date: "8", significance: "୨୯ ଚତୁର୍ଦ୍ଦଶୀ ରୋହିଣୀ ବୃଷ" },
        { date: "9", significance: "୩୦ ପୂର୍ଣ୍ଣିମା ମୃଗଶିରା ବୃଷ" },
        { date: "10", significance: "୧ ପ୍ରତିପଦ ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "11", significance: "୨ ଦ୍୵ିତୀୟା ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "12", significance: "୩ ତୃତୀୟା ପୁଷ୍ୟା କର୍କଟ" },
        { date: "13", significance: "୪ ଚତୁର୍ଥୀ ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "14", significance: "୫ ପଞ୍ଚମୀ ମଘା ସିଂହ" },
        { date: "15", significance: "୬ ଷଷ୍ଠୀ ପୂର୍ବାଫାଃ ସିଂହ" },
        { date: "16", significance: "୭ ସପ୍ତମୀ ଉତ୍ତରାଫାଃ ସିଂହ" },
        { date: "17", significance: "୮ ଅଷ୍ଟମୀ ହସ୍ତା କନ୍ୟା" },
        { date: "18", significance: "୯ ନବମୀ ଚିତ୍ରା କନ୍ୟା" },
        { date: "19", significance: "୧୦ ଦଶମୀ ସ୍ୱାତୀ ତୁଳା" },
        { date: "20", significance: "୧୧ ଏକାଦଶୀ ବିଶାଖା ତୁଳା" },
        { date: "21", significance: "୧୨ ଦ୍ୱାଦଶୀ ଅନୁରାଧା ବିଛା" },
        { date: "22", significance: "୧୩ ତ୍ରୟୋଦଶୀ ଜ୍ୟେଷ୍ଠା ବିଛା" },
        { date: "23", significance: "୧୪ ଚତୁର୍ଦ୍ଦଶୀ ମୂଳା ଧନୁ" },
        { date: "24", significance: "୧୫ ପୂର୍ଣ୍ଣିମା ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "25", significance: "୧୬ ପ୍ରତିପଦ ଉତ୍ତରାଷାଢ଼ା ମକର" },
        { date: "26", significance: "୧୭ ଦ୍୵ିତୀୟା ଶ୍ରବଣା ମକର" },
        { date: "27", significance: "୧୮ ତୃତୀୟା ଧନିଷ୍ଠା କୁମ୍ଭ" },
        { date: "28", significance: "୧୯ ଚତୁର୍ଥୀ ଶତଭିଷା କୁମ୍ଭ" },
        { date: "29", significance: "୨୦ ପଞ୍ଚମୀ ଉତ୍ତରାଭାଦ୍ର ମୀନ" },
        { date: "30", significance: "୨୧ ଷଷ୍ଠୀ ରେବତୀ ମୀନ" },
        { date: "31", significance: "୨୨ ସପ୍ତମୀ ଅଶ୍ୱିନୀ ମେଷ" }
    ],
    holidays: [
        {
            date: "୦୨",
            englishDate: 2,
            festival: "ଗାନ୍ଧୀ ଓ ଶାସ୍ତ୍ରୀ ଜୟନ୍ତୀ - Gandhi Jayanti",
            color: holidayColors[0],
            isoDate: "2025-10-02T00:00:00Z"
        },
        {
            date: "୦୨",
            englishDate: 2,
            festival: "ଦଶହରା - Dussehra",
            color: holidayColors[1],
            isoDate: "2025-10-02T00:00:00Z"
        },
        {
            date: "୦୬",
            englishDate: 6,
            festival: "ଗଜଲକ୍ଷ୍ମୀ ପୂଜା - Gajalakshmi Puja",
            color: holidayColors[2],
            isoDate: "2025-10-06T00:00:00Z"
        },
        {
            date: "୨୧",
            englishDate: 21,
            festival: "ଦୀପାବଳୀ - Diwali",
            color: holidayColors[3],
            isoDate: "2025-10-21T00:00:00Z"
        },
        {
            date: "୦୧",
            englishDate: 1,
            festival: "ମୃଣ୍ମୟୀ ଶ୍ରୀ ଦୁର୍ଗା ଦେବୀଙ୍କର ମହାନବମୀ, ପୀଠେ ବିଶ୍ରାମ, ଶରଣ ଆରମ୍ଭ",
            color: holidayColors[4],
            isoDate: "2025-10-01T00:00:00Z"
        },
        {
            date: "୦୩",
            englishDate: 3,
            festival: "ଭଷାଣି ଯାତ୍ରା ଓ ପାପାଙ୍କୁଶା ଏକାଦଶୀ ଉପବାସ, ଗୋଷାଣୀ ଯାତ୍ରା ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-10-03T00:00:00Z"
        },
        {
            date: "୦୪",
            englishDate: 4,
            festival: "ଗ୍ୟାରୁଁହିଁ ସରିଫ୍",
            color: holidayColors[4],
            isoDate: "2025-10-04T00:00:00Z"
        },
        {
            date: "୦୫",
            englishDate: 5,
            festival: "ଶିବଚତୁର୍ଦ୍ଦଶୀ ଓ ବେଢ଼ା, ଶରଣଶେଷ",
            color: holidayColors[4],
            isoDate: "2025-10-05T00:00:00Z"
        },
        // {
        //     date: "୦୬",
        //     englishDate: 6,
        //     festival: "କୁମାରୋତ୍ସବ, ଗଜଲକ୍ଷ୍ମୀ ପୂଜା ଓ ଚନ୍ଦ୍ର ପୂଜା",
        //     color: holidayColors[4],
        //     isoDate: "2025-10-06T00:00:00Z"
        // },
        {
            date: "୦୭",
            englishDate: 7,
            festival: "କୁମାର ପୂର୍ଣ୍ଣିମା ଓ କାର୍ତ୍ତିକ ବ୍ରତାରମ୍ଭ",
            color: holidayColors[4],
            isoDate: "2025-10-07T00:00:00Z"
        },
        {
            date: "୧୭",
            englishDate: 17,
            festival: "ତୁଳା (ଗର୍ଭଣା) ସଂକ୍ରାନ୍ତି, ରମା ଏକାଦଶୀ, ଗୋବତ୍ସା ଦ୍ୱାଦଶୀ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-10-17T00:00:00Z"
        },
        {
            date: "୧୯",
            englishDate: 19,
            festival: "ଧନ୍ଵନ୍ତରୀ ଜୟନ୍ତୀ ଓ ନରକ ଚତୁର୍ଦ୍ଦଶୀ, ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଓ ବେଢ଼ା, ଯମ ତର୍ପଣ",
            color: holidayColors[4],
            isoDate: "2025-10-19T00:00:00Z"
        },
        {
            date: "୨୦",
            englishDate: 20,
            festival: "ଶ୍ୟାମାକାଳୀ ପୂଜା, ଚନ୍ଦ୍ରକ୍ଷୟ ଓ ନିଶିପାଳନ",
            color: holidayColors[4],
            isoDate: "2025-10-20T00:00:00Z"
        },
        {
            date: "୨୨",
            englishDate: 22,
            festival: "ଗୋବର୍ଦ୍ଧନ ପୂଜା",
            color: holidayColors[4],
            isoDate: "2025-10-22T00:00:00Z"
        },
        {
            date: "୨୩",
            englishDate: 23,
            festival: "ଯମ ଓ ଭାତୃ ଦ୍ୱିତୀୟା, ଚନ୍ଦ୍ର ଦର୍ଶନ",
            color: holidayColors[4],
            isoDate: "2025-10-23T00:00:00Z"
        },
        {
            date: "୨୫",
            englishDate: 25,
            festival: "ନାଗ ଚତୁର୍ଥୀ",
            color: holidayColors[4],
            isoDate: "2025-10-25T00:00:00Z"
        },
        {
            date: "୨୮",
            englishDate: 28,
            festival: "ଶରଣ ଆରମ୍ଭ",
            color: holidayColors[4],
            isoDate: "2025-10-28T00:00:00Z"
        },
        {
            date: "୨୯",
            englishDate: 29,
            festival: "ଷୋଳଶାସନ ଅମୃତ ମଣୋହି ଭୋଗ",
            color: holidayColors[4],
            isoDate: "2025-10-29T00:00:00Z"
        },
        {
            date: "୩୦",
            englishDate: 30,
            festival: "ଗୋଷ୍ଠାଷ୍ଟମୀ",
            color: holidayColors[4],
            isoDate: "2025-10-30T00:00:00Z"
        },
        {
            date: "୩୧",
            englishDate: 31,
            festival: "ଅଁଳା ନବମୀ, ଜଗଦ୍ଧାତ୍ରୀ ପୂଜା ଓ ଶ୍ରୀରାଧାଙ୍କ ପାଦଦର୍ଶନ",
            color: holidayColors[4],
            isoDate: "2025-10-31T00:00:00Z"
        }
    ] as HolidayType[],
    

    subhadina: {
        bibaha: [1, 3, 6, 8, 10, 13, 15, 17],
        brataGhara: [1, 6, 10, 15],
    } as SubhadinaType,
    moonIcons: {
        7: 'Purnima',
        21: 'Amavasya',
        17: 'KrishnaPakshaEkadashi',
        3: 'ShuklaPakshaEkadashi',
    },
};