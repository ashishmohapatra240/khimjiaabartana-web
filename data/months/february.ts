import { holidayColors } from "@/app/constants/HolidayColors";
import { HolidayType } from "@/types/calendar";

import { SubhadinaType } from "@/types/calendar";

export const februaryData = {
    name: "FEBRUARY",
    odia: {
        first: "ମାଘ",
        second: "ଫାଲ୍ଗୁନ",
    },
    dates: {
        start: "ମକର ଦି୧୯ନ",
        end: "କୁମ୍ଭ ଦି୧୭ନ",
    },
    festival: {
        name: "ବସନ୍ତ ପଞ୍ଚମୀ",
        description: "ମାଘମାସ ଶୁକ୍ଳ ପଞ୍ଚମୀକୁ ଶ୍ରୀ ପଞ୍ଚମୀ ବା ବସନ୍ତ ପଞ୍ଚମୀ ଭାବେ ପାଳନ କରାଯାଏ । ଏହି ଦିନ ଜ୍ଞାନ, ଶିକ୍ଷା ଓ ସଙ୍ଗୀତର ଦେବୀ, ଆଦ୍ୟାଶକ୍ତି ମହାସରସ୍ୱତୀ ସ୍ୱତନ୍ତ୍ର ରୂପରେ ପୂଜା ପାଇଥାନ୍ତି । ମା' ସରସ୍ୱତୀ ଶୁକ୍ଳ ବସ୍ତ୍ର ପରିଧାନ କରି କର୍ଣ୍ଣରେ ରତ୍ନବିଭୂଷିତ କୁଣ୍ଡଳ, ଗଳାରେ ଗଜମୋତି ଓ ମୁକ୍ତାହାର; ହସ୍ତରେ ବୀଣା ଓ ପୁସ୍ତକ ଧାରଣ କରି ପଦ୍ମାସନରେ ଶ୍ୱେତପଦ୍ମ ଉପରେ ଅଧିଷ୍ଠାତ୍ରୀ ହୁଅନ୍ତି । ଏହି ଦିନ ବିଦ୍ୟାର୍ଥୀ ଓ ସଙ୍ଗୀତ ସାଧକମାନେ ଜ୍ଞାନ ଓ କଳାର ଉନ୍ନତି ପାଇଁ ମା' ସରସ୍ୱତୀଙ୍କୁ ପୂଜା କରିଥାନ୍ତି । ବସନ୍ତ ପଞ୍ଚମୀ ବସନ୍ତ ଋତୁର ଆରମ୍ଭକୁ ସୂଚିତ କରେ । ଏହା ମନ, ଶରୀର ଓ ପରିବେଶକୁ ପୁନର୍ଜୀବିତ କରେ । ଏହି ପର୍ବ ସମୃଦ୍ଧି, ସଫଳତା ଓ ଶାନ୍ତିର ପ୍ରତୀକ ଭାବରେ ପରିଚିତ ।",
    },
    dateDetails: [
        { date: "1", significance: "ମକର ଦି୧୯ନ ତୃତୀୟା ପୂର୍ବାଭାଦ୍ର କୁମ୍ଭ" },
        { date: "2", significance: "୨୦ ଚତୁର୍ଥୀ ଉତ୍ତରାଭାଦ୍ର ମୀନ" },
        { date: "3", significance: "୨୧ ପଞ୍ଚମୀ ଷଷ୍ଠୀକ୍ଷଃ ରେବତୀ ମୀନ" },
        { date: "4", significance: "୨୨ ସପ୍ତମୀ ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "5", significance: "୨୩ ଅଷ୍ଟମୀ ଦ୍ଵିଜା ମେଷ" },
        { date: "6", significance: "ନବମୀ କୃତ୍ତିକା ବୃଷ" },
        { date: "7", significance: "୨୫ ଦଶମୀ ରୋହିଣୀ ବୃଷ" },
        { date: "8", significance: "୨୬ ମୃଗଶିରା ବୃଷ (ଏକାଦଶୀ)" },
        { date: "9", significance: "୨୭ ଦ୍ୱାଦଶୀ ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "10", significance: "୨୮ ତ୍ରୟୋଦଶୀ ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "11", significance: "୨୯ ଚତୁର୍ଦ୍ଦଶୀ ପୁଷ୍ୟା କର୍କଟ" },
        { date: "12", significance: "କୁମ୍ଭ ଦି୧ନ ଅଶ୍ଳେଷା କର୍କଟ (ପୂର୍ଣ୍ଣିମା)" },
        { date: "13", significance: "୨ ପ୍ରତିପଦ ମଘା ସିଂହ" },
        { date: "14", significance: "୩ ଦ୍୵ିତୀୟା ପୂର୍ବାଫାଃ ସିଂହ" },
        { date: "15", significance: "୪ ତୃତୀୟା ଉତ୍ତରାଫାଃ ସିଂହ" },
        { date: "16", significance: "୫ ଚତୁର୍ଥୀ ହସ୍ତା କନ୍ୟା" },
        { date: "17", significance: "୬ ପଞ୍ଚମୀ ଚିତ୍ରା କନ୍ୟା" },
        { date: "18", significance: "୭ ଷଷ୍ଠୀ ଚିତ୍ରା ତୁଳା" },
        { date: "19", significance: "୮ ଷଷ୍ଠୀ (ମଳ) ସ୍ୱାତୀ ତୁଳା" },
        { date: "20", significance: "୯ ସପ୍ତମୀ ବିଶାଖା ତୁଳା" },
        { date: "21", significance: "୧୦ ଅଷ୍ଟମୀ ଅନୁରାଧା ବିଛା" },
        { date: "22", significance: "୧୧ ନବମୀ ଜ୍ୟେଷ୍ଠା ବିଛା" },
        { date: "23", significance: "୧୨ ଦଶମୀ ମୂଳା ଧନୁ" },
        { date: "24", significance: "୧୩ ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "25", significance: "୧୪ ଦ୍ୱାଦଶୀ ଉତ୍ତରାଷାଢ଼ା ମକର" },
        { date: "26", significance: "୧୫ ତ୍ରୟୋଦଶୀ ଶ୍ରବଣା ମକର" },
        { date: "27", significance: "୧୬ ଚତୁର୍ଦ୍ଦଶୀ ଧନିଷ୍ଠା କୁମ୍ଭ" },
        { date: "28", significance: "୧୭ ପ୍ରତିପଦକ୍ଷଃ ଶତଭିଷା କୁମ୍ଭ (ଅମାବାସ୍ୟା)" }
    ],
    holidays: [
        {
            date: "୦୨",
            englishDate: 2,
            festival: "ସରସ୍ବତୀ ପୂଜା - Saraswati Puja",
            color: holidayColors[0],
            isoDate: "2025-02-02T00:00:00Z"
        },
        {
            date: "୦୪",
            englishDate: 4,
            festival: "ମାଘ ସପ୍ତମୀ - Magha Saptami",
            color: holidayColors[1],
            isoDate: "2025-02-04T00:00:00Z"
        },
        {
            date: "୨୬",
            englishDate: 26,
            festival: "ମହାଶିବରାତ୍ରି ଓ ଜାଗର - Maha Sibaratri",
            color: holidayColors[2],
            isoDate: "2025-02-26T00:00:00Z"
        },
        {
            date: "୦୧",
            englishDate: 1,
            festival: "ବରଦା ଚତୁର୍ଥୀ ଓ ଶରଣ ଶେଷ",
            color: holidayColors[4],
            isoDate: "2025-02-01T00:00:00Z"
        },
        // {
        //     date: "୦୨",
        //     englishDate: 2,
        //     festival: "ଶ୍ରୀ ପଞ୍ଚମୀ ଓ ସରସ୍ବତୀ ପୂଜା",
        //     color: holidayColors[4],
        //     isoDate: "2025-02-02T00:00:00Z"
        // },
        // {
        //     date: "୦୪",
        //     englishDate: 4,
        //     festival: "ମାଘ ସପ୍ତମୀ, (କୋଣାର୍କ) ଚନ୍ଦ୍ରଭାଗା ତୀର୍ଥେ ସ୍ନାନ, ଗୋବର୍ଦ୍ଧନପୀଠ ଗାରୋଇ ଆଶ୍ରମରେ ଶ୍ରୀମନ୍ଦିରର ଜନ୍ମଉତ୍ସବ, ମାଛଗାଁ, ଜଗତସିଂହପୁର",
        //     color: holidayColors[4],
        //     isoDate: "2025-02-04T00:00:00Z"
        // },
        {
            date: "୦୫",
            englishDate: 5,
            festival: "ଭୀଷ୍ମାଷ୍ଟମୀ",
            color: holidayColors[4],
            isoDate: "2025-02-05T00:00:00Z"
        },
        {
            date: "୦୮",
            englishDate: 8,
            festival: "ଭୈମୀ ଏକାଦଶୀ (ବଡ଼) ଉପବାସ, ବ୍ୟାସ ସରୋବର ମେଳା, ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-02-08T00:00:00Z"
        },
        {
            date: "୦୯",
            englishDate: 9,
            festival: "ବରାହ ଦ୍ୱାଦଶୀ",
            color: holidayColors[4],
            isoDate: "2025-02-09T00:00:00Z"
        },
        {
            date: "୧୦",
            englishDate: 10,
            festival: "ନିତ୍ୟାନନ୍ଦ ମହାପ୍ରଭୁଙ୍କ ଜନ୍ମୋତ୍ସବ",
            color: holidayColors[4],
            isoDate: "2025-02-10T00:00:00Z"
        },
        {
            date: "୧୧",
            englishDate: 11,
            festival: "ଜୋରନ୍ଦା ମେଳା",
            color: holidayColors[4],
            isoDate: "2025-02-11T00:00:00Z"
        },
        {
            date: "୧୨",
            englishDate: 12,
            festival: "କୁମ୍ଭ ସଂକ୍ରାନ୍ତି, ମାଘ ପୂର୍ଣ୍ଣିମା, ଅଗ୍ନି ଉତ୍ସବ, ମାଘ ବ୍ରତ ସମାପନ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-02-12T00:00:00Z"
        },
        {
            date: "୧୪",
            englishDate: 14,
            festival: "ସବେ-ବରାତ୍ (ପୂର୍ବରାତ୍ରି)",
            color: holidayColors[4],
            isoDate: "2025-02-14T00:00:00Z"
        },
        {
            date: "୨୪",
            englishDate: 24,
            festival: "ପଙ୍କୋଦ୍ଧାର ଏକାଦଶୀ, ଶରଣ ଆରମ୍ଭ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-02-24T00:00:00Z"
        },
        {
            date: "୨୭",
            englishDate: 27,
            festival: "ଚନ୍ଦ୍ରକ୍ଷୟ, ନିଶିପାଳନ, ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-02-27T00:00:00Z"
        },
        {
            date: "୨୮",
            englishDate: 28,
            festival: "ଅମାବାସ୍ୟା",
            color: holidayColors[4],
            isoDate: "2025-02-28T00:00:00Z"
        }
    ] as HolidayType[],

    subhadina: {
        bibaha: [2, 4, 6, 7, 14, 17, 18, 20, 21, 23, 25],
        brataGhara: [2, 4, 7, 14, 17],
    } as SubhadinaType,
    moonIcons: {
        12: 'Purnima',
        28: 'Amavasya',
        24: 'KrishnaPakshaEkadashi',
        8: 'ShuklaPakshaEkadashi',
    },
};
