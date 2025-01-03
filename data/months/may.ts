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
        name: "ଅକ୍ଷୟ ତୃତୀୟା",
        description: "ଅକ୍ଷୟ ତୃତୀୟା ହେଉଛି ଏକ ଶୁଭ ମୁହୂର୍ତ୍ତ । ଏହି ଦିନ ଯେକୌଣସି ଶୁଭକାର୍ଯ୍ୟ ଆରମ୍ଭ କରାଯାଇପାରେ ।",
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
            festival: "ଶ୍ରମିକ ଦିବସ - Labour Day",
            color: holidayColors[0]
        },
        {
            date: "୨୬",
            englishDate: 26,
            festival: "ସାବିତ୍ରୀ ବ୍ରତ - Sabitri Brata",
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
    }
}; 