import { holidayColors } from "@/app/constants/HolidayColors";
import { HolidayType } from "@/types/calendar";

import { SubhadinaType } from "@/types/calendar";

export const januaryData = {
    name: "JANUARY",
    odia: {
        first: "ପୌଷ",
        second: "ମାଘ",
    },
    dates: {
        start: "ଧନୁ ଦି୧୭ନ",
        end: "ମକର ଦି୧୮ନ",
    },
    festival: {
        name: "ଶାମ୍ବ ଦଶମୀ",
        description: "ଶାମ୍ବ ଦଶମୀ ହେଉଛି ଓଡ଼ିଶାର ଏକ ପବିତ୍ର ଦିନ ଏବଂ ସୂର୍ଯ୍ୟପୂଜାର ପର୍ବ । ପ୍ରତ୍ୟେକ ବର୍ଷ ପୌଷ ମାସ ଶୁକ୍ଲ ପକ୍ଷ ଦଶମୀ ତିଥିରେ ଏହା ପାଳନ କରାଯାଏ । ମା' ମାନେ ନିଜ ସନ୍ତାନସନ୍ତତିଙ୍କ ମଙ୍ଗଳ କାମନା କରି ଏହି ପର୍ବ ପାଳନ କରନ୍ତି । ଏହାର ବିଶେଷତ୍ୱ ହେଉଛି ସୂର୍ଯ୍ୟଙ୍କର ତିନି ସ୍ଥିତିକୁ ଲକ୍ଷ୍ୟ କରି ଘରେ ତିନି ପ୍ରକାର ଧୂପ ବା ପୂଜା କରାଯାଏ । ଅରୁଣୋଦୟ ସମୟରେ ପ୍ରଥମ ଧୂପ ହୁଏ । ମଧ୍ୟାହ୍ନରେ ମଧ୍ୟାହ୍ନ ସୂର୍ଯ୍ୟ ତେଜୋଦୀପ୍ତ ଭାସ୍କରଙ୍କୁ ଦ୍ୱିତୀୟ ଧୂପ ଦିଆଯାଏ । ତୃତୀୟ ବା ଶେଷଧୂପ ହେଉଛି ସନ୍ଧ୍ୟା ସମୟର ଅସ୍ତାଚଳଗାମୀ ସୂର୍ଯ୍ୟଦେବଙ୍କ ପାଇଁ । ଏହି ଧୂପରେ ପିଠା, କାକରା ଆଦି ନୈବେଦ୍ୟ ଅର୍ପଣ କରାଯାଇଥାଏ ।",
    },
    dateDetails: [
        { date: "1", significance: "ଧନୁ ଦି୧୭ନ ଦ୍୵ିତୀୟା ଉତ୍ତରାଷାଢ଼ା ଧନୁ" },
        { date: "2", significance: "୧୮ ତୃତୀୟା ଶ୍ରବଣା ମକର" },
        { date: "3", significance: "୧୯ ଚତୁର୍ଥୀ ଧନିଷ୍ଠା ମକର" },
        { date: "4", significance: "୨୦ ପଞ୍ଚମୀ ଶତଭିଷା କୁମ୍ଭ" },
        { date: "5", significance: "୨୧ ଷଷ୍ଠୀ ପୂର୍ବଭାଦ୍ର କୁମ୍ଭ" },
        { date: "6", significance: "୨୨ ସପ୍ତମୀ ଉତ୍ତରାଭାଦ୍ର କୁମ୍ଭ" },
        { date: "7", significance: "୨୩ ଅଷ୍ଟମୀ ରେବତୀ ମୀନ" },
        { date: "8", significance: "୨୪ ନବମୀ ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "9", significance: "୨୫ ଦଶମୀ ଦ୍ଵିଜା ମେଷ" },
        { date: "10", significance: "୨୬ କୃତ୍ତିକା ବୃଷ (ଏକାଦଶୀ)" },
        { date: "11", significance: "୨୭ ଦ୍ୱାଦଶୀ ରୋହିଣୀ ବୃଷ" },
        { date: "12", significance: "୨୮ ତ୍ରୟୋଦଶୀ ଚତୁର୍ଦଶୀକ୍ଷଃ ମୃଗଶିରା ମିଥୁନ" },
        { date: "13", significance: "୨୯ ଆର୍ଦ୍ରା ମିଥୁନ (ପୂର୍ଣ୍ଣିମା)" },
        { date: "14", significance: "ମକର ଦି୧ନ ପ୍ରତିପଦ ପୁନର୍ବସୁ କର୍କଟ" },
        { date: "15", significance: "୨ ଦ୍୵ିତୀୟା ପୁଷ୍ୟା କର୍କଟ" },
        { date: "16", significance: "୩ ତୃତୀୟା ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "17", significance: "୪ ଚତୁର୍ଥୀ ମଘା ସିଂହ" },
        { date: "18", significance: "୫ ପଞ୍ଚମୀ ପୂର୍ବାଫା ସିଂହ" },
        { date: "19", significance: "୬ ପଞ୍ଚମୀ (ମଳ) ଉତ୍ତରାଫା କନ୍ୟା" },
        { date: "20", significance: "୭ ଷଷ୍ଠୀ ହସ୍ତା କନ୍ୟା" },
        { date: "21", significance: "୮ ସପ୍ତମୀ ଚିତ୍ରା କନ୍ୟା" },
        { date: "22", significance: "୯ ଅଷ୍ଟମୀ ସ୍ୱାତୀ ତୁଳା" },
        { date: "23", significance: "୧୦ ନବମୀ ବିଶାଖା ତୁଳା" },
        { date: "24", significance: "୧୧ ଦଶମୀ ଅନୁରାଧା ବିଛା" },
        { date: "25", significance: "୧୨ ଅନୁରାଧା ବିଛା (ଏକାଦଶୀ)" },
        { date: "26", significance: "୧୩ ଦ୍ୱାଦଶୀ ଜ୍ୟେଷ୍ଠା ବିଛା" },
        { date: "27", significance: "୧୪ ତ୍ରୟୋଦଶୀ ମୂଳା ଧନୁ" },
        { date: "28", significance: "୧୫ ଚତୁର୍ଦ୍ଦଶୀ ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "29", significance: "୧୬ ଉତ୍ତରାଷାଢ଼ା ମକର (ଅମାବାସ୍ୟା)" },
        { date: "30", significance: "୧୭ ପ୍ରତିପଦ ଶ୍ରବଣା ମକର" },
        { date: "31", significance: "୧୮ ଦ୍୵ିତୀୟା ଧନିଷ୍ଠା ଶତଭିଷାକ୍ଷଃ କୁମ୍ଭ" }
    ],
    holidays: [
        {
            date: "୦୧",
            englishDate: 1,
            festival: "ଇଂରାଜୀ ନୂତନ ବର୍ଷ - New Year Day",
            color: holidayColors[0],
            isoDate: "2025-01-01T00:00:00Z"
        },
        {
            date: "୦୯",
            englishDate: 9,
            festival: "ଶାମ୍ବଦଶମୀ ଓ ସୁଦଶା ବ୍ରତ - Samba Dashami",
            color: holidayColors[1],
            isoDate: "2025-01-09T00:00:00Z"
        },
        {
            date: "୧୪",
            englishDate: 14,
            festival: "ଉତ୍ତରାୟଣ ମକର ସଂକ୍ରାନ୍ତି - Makara Sankranti",
            color: holidayColors[2],
            isoDate: "2025-01-14T00:00:00Z"
        },
        {
            date: "୨୬",
            englishDate: 26,
            festival: "ସାଧାରଣତନ୍ତ୍ର ଦିବସ - Republic Day",
            color: holidayColors[3],
            isoDate: "2025-01-26T00:00:00Z"
        },
        // {
        //     date: "୦୧",
        //     englishDate: 1,
        //     festival: "ଇଂରାଜୀ ନୂତନ ବର୍ଷ ସନ ୨୦୨୫ ମସିହା ପ୍ରବେଶ ଆରମ୍ବ, ଦ୍ଵିତୀୟାର ଚନ୍ଦ୍ର ଦର୍ଶନ, ଶରଣ ଆରମ୍ଭ",
        //     color: "holidayColors[4]",
        //     isoDate: "2025-01-01T00:00:00Z"
        // },
        {
            date: "୦୫",
            englishDate: 5,
            festival: "ଶରଣ ଶେଷ",
            color: "holidayColors[4]",
            isoDate: "2025-01-05T00:00:00Z"
        },
        {
            date: "୧୦",
            englishDate: 10,
            festival: "ପୁତ୍ରଦା ଏକାଦଶୀ ଉପବାସ ଓ ହଳ ନିଷେଧ",
            color: "holidayColors[4]",
            isoDate: "2025-01-10T00:00:00Z"
        },
        {
            date: "୧୨",
            englishDate: 12,
            festival: "ସ୍ୱାମୀ ବିବେକାନନ୍ଦ ଜୟନ୍ତୀ, ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢ଼ା ପରିକ୍ରମା",
            color: "holidayColors[4]",
            isoDate: "2025-01-12T00:00:00Z"
        },
        {
            date: "୧୩",
            englishDate: 13,
            festival: "ପୌଷ ପୂର୍ଣ୍ଣିମା, ଚନ୍ଦ୍ର ପୂଜା, ମହୋଦଧି ଆରତୀ, ନବାଙ୍କ ବେଢ଼ା, ମାସାନ୍ତ",
            color: "holidayColors[4]",
            isoDate: "2025-01-13T00:00:00Z"
        },
        {
            date: "୧୫",
            englishDate: 15,
            festival: "ପୁଷ୍ୟା ଭିଷେକ ଓ ରାଜା ଭିଷେକ",
            color: "holidayColors[4]",
            isoDate: "2025-01-15T00:00:00Z"
        },
        {
            date: "୨୩",
            englishDate: 23,
            festival: "ନେତାଜୀ ସୁଭାଷ ଚନ୍ଦ୍ର ବୋଷ ଜୟନ୍ତୀ",
            color: "holidayColors[4]",
            isoDate: "2025-01-23T00:00:00Z"
        },
        {
            date: "୨୫",
            englishDate: 25,
            festival: "ଷଟ୍ ତିଳା ଏକାଦଶୀ ଉପବାସ, ଓଳାଶୁଣୀ ମେଳା, ହଳ ନିଷେଧ",
            color: "holidayColors[4]",
            isoDate: "2025-01-25T00:00:00Z"
        },
        {
            date: "୨୭",
            englishDate: 27,
            festival: "ରଟନ୍ତୀ କାଳୀକା ପୂଜା",
            color: "holidayColors[4]",
            isoDate: "2025-01-27T00:00:00Z"
        },
        {
            date: "୨୮",
            englishDate: 28,
            festival: "ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢ଼ା ପରିକ୍ରମା, ରଟନ୍ତୀ ଚତୁର୍ଦ୍ଦଶୀ, ଚନ୍ଦ୍ର କ୍ଷୟ, ନିଶିପାଳନ, ଶରଣ ଆରମ୍ଭ, ସବେ-ମେରାକ୍ (ପୂର୍ବରାତ୍ରି)",
            color: "holidayColors[4]",
            isoDate: "2025-01-28T00:00:00Z"
        },
        {
            date: "୨୯",
            englishDate: 29,
            festival: "ତ୍ରିବେଣୀ ଅମାବାସ୍ୟା, ମା ବିରଜା ଦେବୀଙ୍କର ଜନ୍ମୋତ୍ସବ, ହଳ ନିଷେଧ",
            color: "holidayColors[4]",
            isoDate: "2025-01-29T00:00:00Z"
        },
        {
            date: "୩୦",
            englishDate: 30,
            festival: "ଦ୍ଵିତୀୟାର ଚନ୍ଦ୍ର ଦର୍ଶନ ପୂଜା ଓ ଉପବାସ, ମହାତ୍ମାଗାନ୍ଧୀଙ୍କ ତିରୋଧାନ ଦିବସ",
            color: "holidayColors[4]",
            isoDate: "2025-01-30T00:00:00Z"
        }
    ] as HolidayType[],


    subhadina: {
        bibaha: [18, 19, 20, 21, 22, 24, 27, 30],
        brataGhara: [16, 31],
    } as SubhadinaType,
    moonIcons: {
        13: 'Purnima',
        29: 'Amavasya',
        25: 'KrishnaPakshaEkadashi',
        10: 'ShuklaPakshaEkadashi',
    },
};
