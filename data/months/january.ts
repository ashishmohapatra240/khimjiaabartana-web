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
        description: "ଶାମ୍ବ ଦଶମୀ ହେଉଛି ଓଡ଼ିଶାର ଏକ ପବିତ୍ର ଦିନ ଏବଂ ସୂର୍ଯ୍ୟପୂଜାର ପର୍ବ । ପ୍ରତ୍ୟେକ ବର୍ଷ ପୌଷ ମାସ ଶୁକ୍ଲ ପକ୍ଷ ଦଶମୀ ତିଥିରେ ଏହା ପାଳନ କରାଯାଏ । ମା' ମାନେ ନିଜ ସନ୍ତାନସନ୍ତତିଙ୍କ ମଙ୍ଗଳ କାମନା କରି ଏହି ପର୍ବ ପାଳନ କରନ୍ତି । ଏହାର ବିଶେଷତ୍ୱ ହେଉଛି ସୂର୍ଯ୍ୟଙ୍କର ତିନି ସ୍ଥିତିକୁ ଲକ୍ଷ୍ୟ କରି ଘରେ ତିନି ପ୍ରକାର ଧୂପ ବା ପୂଜା କରାଯାଏ ।",
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
            color: holidayColors[0]
        },
        {
            date: "୦୯",
            englishDate: 9,
            festival: "ଶାମ୍ବଦଶମୀ ଓ ସୁଦଶା ବ୍ରତ - Samba Dashami",
            color: holidayColors[1]
        },
        {
            date: "୧୪",
            englishDate: 14,
            festival: "ଉତ୍ତରାୟଣ ମକର ସଂକ୍ରାନ୍ତି - Makara Sankranti",
            color: holidayColors[2]
        },
        {
            date: "୨୬",
            englishDate: 26,
            festival: "ସାଧାରଣତନ୍ତ୍ର ଦିବସ - Republic Day",
            color: holidayColors[3]
        }
    ] as HolidayType[],

    subhadina: {
        bibaha: [18, 19, 20, 21, 22, 24, 27, 30],
        brataGhara: [16, 31],
    } as SubhadinaType,
    moonIcons: {
        1: 'Purnima',
        14: 'Amavasya',
        20: 'KrishnaPakshaEkadashi',
        25: 'ShuklaPakshaEkadashi',
    }
};
