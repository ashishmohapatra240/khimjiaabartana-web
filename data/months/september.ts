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
            color: holidayColors[0]
        },
        {
            date: "୨୧",
            englishDate: 21,
            festival: "ମହାଳୟା - Mahalaya",
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