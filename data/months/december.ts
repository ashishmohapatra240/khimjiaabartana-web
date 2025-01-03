import { holidayColors } from "@/app/constants/HolidayColors";
import { SubhadinaType } from "@/types/calendar";

import { HolidayType } from "@/types/calendar";

export const decemberData = {
    name: "DECEMBER",
    odia: {
        first: "ମାର୍ଗଶିର",
        second: "ପୌଷ",
    },
    dates: {
        start: "ବୃଶ୍ଚିକ ଦି୧୮ନ",
        end: "ଧନୁ ଦି୧୭ନ",
    },
    festival: {
        name: "ଧନୁ ସଂକ୍ରାନ୍ତି",
        description: "ଧନୁ ସଂକ୍ରାନ୍ତି ହେଉଛି ସୂର୍ଯ୍ୟଙ୍କର ଧନୁ ରାଶିରେ ପ୍ରବେଶ ଦିନ । ଏହି ଦିନ ମକର ଚାଉଳ ଖାଇବାର ପରମ୍ପରା ରହିଛି ।",
    },
    dateDetails: [
        { date: "1", significance: "୨୩ ଅଷ୍ଟମୀ ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "2", significance: "୨୪ ନବମୀ ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "3", significance: "୨୫ ଦଶମୀ ପୁଷ୍ୟା କର୍କଟ" },
        { date: "4", significance: "୨୬ ଏକାଦଶୀ ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "5", significance: "୨୭ ଦ୍ୱାଦଶୀ ମଘା ସିଂହ" },
        { date: "6", significance: "୨୮ ତ୍ରୟୋଦଶୀ ପୂର୍ବାଫାଃ ସିଂହ" },
        { date: "7", significance: "୨୯ ଚତୁର୍ଦ୍ଦଶୀ ଉତ୍ତରାଫାଃ ସିଂହ" },
        { date: "8", significance: "୩୦ ପୂର୍ଣ୍ଣିମା ହସ୍ତା କନ୍ୟା" },
        { date: "9", significance: "୧ ପ୍ରତିପଦ ଚିତ୍ରା କନ୍ୟା" },
        { date: "10", significance: "୨ ଦ୍୵ିତୀୟା ସ୍ୱାତୀ ତୁଳା" },
        { date: "11", significance: "୩ ତୃତୀୟା ବିଶାଖା ତୁଳା" },
        { date: "12", significance: "୪ ଚତୁର୍ଥୀ ଅନୁରାଧା ବିଛା" },
        { date: "13", significance: "୫ ପଞ୍ଚମୀ ଜ୍ୟେଷ୍ଠା ବିଛା" },
        { date: "14", significance: "୬ ଷଷ୍ଠୀ ମୂଳା ଧନୁ" },
        { date: "15", significance: "୭ ସପ୍ତମୀ ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "16", significance: "୮ ଅଷ୍ଟମୀ ଉତ୍ତରାଷାଢ଼ା ମକର" },
        { date: "17", significance: "୯ ନବମୀ ଶ୍ରବଣା ମକର" },
        { date: "18", significance: "୧୦ ଦଶମୀ ଧନିଷ୍ଠା କୁମ୍ଭ" },
        { date: "19", significance: "୧୧ ଏକାଦଶୀ ଶତଭିଷା କୁମ୍ଭ" },
        { date: "20", significance: "୧୨ ଦ୍ୱାଦଶୀ ଉତ୍ତରାଭାଦ୍ର ମୀନ" },
        { date: "21", significance: "୧୩ ତ୍ରୟୋଦଶୀ ରେବତୀ ମୀନ" },
        { date: "22", significance: "୧୪ ଚତୁର୍ଦ୍ଦଶୀ ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "23", significance: "୧୫ ପୂର୍ଣ୍ଣିମା ଦ୍ଵିଜା ମେଷ" },
        { date: "24", significance: "୧୬ ପ୍ରତିପଦ କୃତ୍ତିକା ବୃଷ" },
        { date: "25", significance: "୧୭ ଦ୍୵ିତୀୟା ରୋହିଣୀ ବୃଷ" },
        { date: "26", significance: "୧୮ ତୃତୀୟା ମୃଗଶିରା ବୃଷ" },
        { date: "27", significance: "୧୯ ଚତୁର୍ଥୀ ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "28", significance: "୨୦ ପଞ୍ଚମୀ ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "29", significance: "୨୧ ଷଷ୍ଠୀ ପୁଷ୍ୟା କର୍କଟ" },
        { date: "30", significance: "୨୨ ସପ୍ତମୀ ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "31", significance: "୨୩ ଅଷ୍ଟମୀ ମଘା ସିଂହ" }
    ],
    holidays: [
        {
            date: "୦୪",
            englishDate: 4,
            festival: "ମାଣବସା ଶେଷ ଗୁରୁବାର - Sesa Manabasa Gurubara",
            color: holidayColors[0]
        },
        {
            date: "୧୯",
            englishDate: 19,
            festival: "ବକୁଳ ଅମାବାସ୍ୟା - Bakula Amabasya",
            color: holidayColors[1]
        },
        {
            date: "୨୫",
            englishDate: 25,
            festival: "ବଡ଼ ଦିନ - Christmas Day",
            color: holidayColors[2]
        }
    ] as HolidayType[],
    
    subhadina: {
        bibaha: [1, 3, 6, 8, 10, 13, 15, 17],
        brataGhara: [1, 6, 10, 15],
    } as SubhadinaType,
    moonIcons: {
        1: 'Purnima',
        14: 'Amavasya',
        20: 'KrishnaPakshaEkadashi',
        25: 'ShuklaPakshaEkadashi',
    }
};