import { holidayColors } from "@/app/constants/HolidayColors";
import { SubhadinaType } from "@/types/calendar";

import { HolidayType } from "@/types/calendar";

export const novemberData = {
    name: "NOVEMBER",
    odia: {
        first: "କାର୍ତ୍ତିକ",
        second: "ମାର୍ଗଶିର",
    },
    dates: {
        start: "ତୁଳା ଦି୧୮ନ",
        end: "ବୃଶ୍ଚିକ ଦି୧୭ନ",
    },
    festival: {
        name: "କାର୍ତ୍ତିକ ପୂର୍ଣ୍ଣିମା",
        description: "କାର୍ତ୍ତିକ ପୂର୍ଣ୍ଣିମା ହେଉଛି ଓଡ଼ିଶାର ଏକ ପବିତ୍ର ପର୍ବ । ଏହି ଦିନ ବୋଇତ ବନ୍ଦାଣ ଉତ୍ସବ ପାଳନ କରାଯାଏ ।",
    },
    dateDetails: [
        { date: "1", significance: "୨୩ ଅଷ୍ଟମୀ ଦ୍ଵିଜା ମେଷ" },
        { date: "2", significance: "୨୪ ନବମୀ କୃତ୍ତିକା ବୃଷ" },
        { date: "3", significance: "୨୫ ଦଶମୀ ରୋହିଣୀ ବୃଷ" },
        { date: "4", significance: "୨୬ ଏକାଦଶୀ ମୃଗଶିରା ବୃଷ" },
        { date: "5", significance: "୨୭ ଦ୍ୱାଦଶୀ ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "6", significance: "୨୮ ତ୍ରୟୋଦଶୀ ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "7", significance: "୨୯ ଚତୁର୍ଦ୍ଦଶୀ ପୁଷ୍ୟା କର୍କଟ" },
        { date: "8", significance: "୩୦ ପୂର୍ଣ୍ଣିମା ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "9", significance: "୧ ପ୍ରତିପଦ ମଘା ସିଂହ" },
        { date: "10", significance: "୨ ଦ୍୵ିତୀୟା ପୂର୍ବାଫାଃ ସିଂହ" },
        { date: "11", significance: "୩ ତୃତୀୟା ଉତ୍ତରାଫାଃ ସିଂହ" },
        { date: "12", significance: "୪ ଚତୁର୍ଥୀ ହସ୍ତା କନ୍ୟା" },
        { date: "13", significance: "୫ ପଞ୍ଚମୀ ଚିତ୍ରା କନ୍ୟା" },
        { date: "14", significance: "୬ ଷଷ୍ଠୀ ସ୍ୱାତୀ ତୁଳା" },
        { date: "15", significance: "୭ ସପ୍ତମୀ ବିଶାଖା ତୁଳା" },
        { date: "16", significance: "୮ ଅଷ୍ଟମୀ ଅନୁରାଧା ବିଛା" },
        { date: "17", significance: "୯ ନବମୀ ଜ୍ୟେଷ୍ଠା ବିଛା" },
        { date: "18", significance: "୧୦ ଦଶମୀ ମୂଳା ଧନୁ" },
        { date: "19", significance: "୧୧ ଏକାଦଶୀ ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "20", significance: "୧୨ ଦ୍ୱାଦଶୀ ଉତ୍ତରାଷାଢ଼ା ମକର" },
        { date: "21", significance: "୧୩ ତ୍ରୟୋଦଶୀ ଶ୍ରବଣା ମକର" },
        { date: "22", significance: "୧୪ ଚତୁର୍ଦ୍ଦଶୀ ଧନିଷ୍ଠା କୁମ୍ଭ" },
        { date: "23", significance: "୧୫ ପୂର୍ଣ୍ଣିମା ଶତଭିଷା କୁମ୍ଭ" },
        { date: "24", significance: "୧୬ ପ୍ରତିପଦ ଉତ୍ତରାଭାଦ୍ର ମୀନ" },
        { date: "25", significance: "୧୭ ଦ୍୵ିତୀୟା ରେବତୀ ମୀନ" },
        { date: "26", significance: "୧୮ ତୃତୀୟା ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "27", significance: "୧୯ ଚତୁର୍ଥୀ ଦ୍ଵିଜା ମେଷ" },
        { date: "28", significance: "୨୦ ପଞ୍ଚମୀ କୃତ୍ତିକା ବୃଷ" },
        { date: "29", significance: "୨୧ ଷଷ୍ଠୀ ରୋହିଣୀ ବୃଷ" },
        { date: "30", significance: "୨୨ ସପ୍ତମୀ ମୃଗଶିରା ବୃଷ" }
    ],

    holidays: [
        {
            date: "୦୫",
            englishDate: 5,
            festival: "କାର୍ତ୍ତିକେଶ୍ୱର ପୂଜା - Kartika Purnima",
            color: holidayColors[0]
        },
        {
            date: "୧୨",
            englishDate: 12,
            festival: "ପ୍ରଥମାଷ୍ଟମୀ - Prathamastami",
            color: holidayColors[1]
        },
        {
            date: "୧୪",
            englishDate: 14,
            festival: "ଶିଶୁ ଦିବସ - Children's Day",
            color: holidayColors[2]
        }
    ] as HolidayType[],
    
    subhadina: {
        bibaha: [2, 4, 7, 9, 11, 14, 16, 18],
        brataGhara: [2, 7, 11, 16],
    } as SubhadinaType,
    moonIcons: {
        1: 'Purnima',
        14: 'Amavasya',
        20: 'KrishnaPakshaEkadashi',
        25: 'ShuklaPakshaEkadashi',
    },
}; 