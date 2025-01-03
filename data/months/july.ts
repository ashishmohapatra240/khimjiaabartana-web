import { holidayColors } from "@/app/constants/HolidayColors";
import { HolidayType } from "@/types/calendar";

import { SubhadinaType } from "@/types/calendar";

export const julyData = {
    name: "JULY",
    odia: {
        first: "ଆଷାଢ଼",
        second: "ଶ୍ରାବଣ",
    },
    dates: {
        start: "ମିଥୁନ ଦି୧୮ନ",
        end: "କର୍କଟ ଦି୧୭ନ",
    },
    festival: {
        name: "ଗୁରୁ ପୂର୍ଣ୍ଣିମା",
        description: "ଗୁରୁ ପୂର୍ଣ୍ଣିମା ହେଉଛି ଗୁରୁଙ୍କୁ ସମ୍ମାନ ଜଣାଇବାର ଦିନ । ଏହି ଦିନ ଶିଷ୍ୟମାନେ ନିଜ ଗୁରୁଙ୍କୁ ପୂଜା କରନ୍ତି ।",
    },
    dateDetails: [
        { date: "1", significance: "୨୦ ପଞ୍ଚମୀ ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "2", significance: "୨୧ ଷଷ୍ଠୀ ମଘା ସିଂହ" },
        { date: "3", significance: "୨୨ ସପ୍ତମୀ ପୂର୍ବାଫାଃ ସିଂହ" },
        { date: "4", significance: "୨୩ ଅଷ୍ଟମୀ ଉତ୍ତରାଫାଃ ସିଂହ" },
        { date: "5", significance: "୨୪ ନବମୀ ହସ୍ତା କନ୍ୟା" },
        { date: "6", significance: "୨୫ ଦଶମୀ ଚିତ୍ରା କନ୍ୟା" },
        { date: "7", significance: "୨୬ ଏକାଦଶୀ ସ୍ୱାତୀ ତୁଳା" },
        { date: "8", significance: "୨୭ ଦ୍ୱାଦଶୀ ବିଶାଖା ତୁଳା" },
        { date: "9", significance: "୨୮ ତ୍ରୟୋଦଶୀ ଅନୁରାଧା ବିଛା" },
        { date: "10", significance: "୨୯ ଚତୁର୍ଦ୍ଦଶୀ ଜ୍ୟେଷ୍ଠା ବିଛା" },
        { date: "11", significance: "୩୦ ପୂର୍ଣ୍ଣିମା ମୂଳା ଧନୁ" },
        { date: "12", significance: "୧ ପ୍ରତିପଦ ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "13", significance: "୨ ଦ୍୵ିତୀୟା ଉତ୍ତରାଷାଢ଼ା ମକର" },
        { date: "14", significance: "୩ ତୃତୀୟା ଶ୍ରବଣା ମକର" },
        { date: "15", significance: "୪ ଚତୁର୍ଥୀ ଧନିଷ୍ଠା କୁମ୍ଭ" },
        { date: "16", significance: "୫ ପଞ୍ଚମୀ ଶତଭିଷା କୁମ୍ଭ" },
        { date: "17", significance: "୬ ଷଷ୍ଠୀ ଉତ୍ତରାଭାଦ୍ର ମୀନ" },
        { date: "18", significance: "୭ ସପ୍ତମୀ ରେବତୀ ମୀନ" },
        { date: "19", significance: "୮ ଅଷ୍ଟମୀ ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "20", significance: "୯ ନବମୀ ଦ୍ଵିଜା ମେଷ" },
        { date: "21", significance: "୧୦ ଦଶମୀ କୃତ୍ତିକା ବୃଷ" },
        { date: "22", significance: "୧୧ ଏକାଦଶୀ ରୋହିଣୀ ବୃଷ" },
        { date: "23", significance: "୧୨ ଦ୍ୱାଦଶୀ ମୃଗଶିରା ବୃଷ" },
        { date: "24", significance: "୧୩ ତ୍ରୟୋଦଶୀ ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "25", significance: "୧୪ ଚତୁର୍ଦ୍ଦଶୀ ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "26", significance: "୧୫ ପୂର୍ଣ୍ଣିମା ପୁଷ୍ୟା କର୍କଟ" },
        { date: "27", significance: "୧୬ ପ୍ରତିପଦ ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "28", significance: "୧୭ ଦ୍୵ିତୀୟା ମଘା ସିଂହ" },
        { date: "29", significance: "୧୮ ତୃତୀୟା ପୂର୍ବାଫାଃ ସିଂହ" },
        { date: "30", significance: "୧୯ ଚତୁର୍ଥୀ ଉତ୍ତରାଫାଃ ସିଂହ" },
        { date: "31", significance: "୨୦ ପଞ୍ଚମୀ ହସ୍ତା କନ୍ୟା" }
    ],
    holidays: [
        {
            date: "୦୫",
            englishDate: 5,
            festival: "ବାହୁଡ଼ା ଯାତ୍ରା - Bahuda Jatra",
            color: holidayColors[0]
        },
        {
            date: "୨୪",
            englishDate: 24,
            festival: "ଚିତାଲାଗି ଅମାବାସ୍ୟା - Chitaalagi Amabasya",
            color: holidayColors[1]
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