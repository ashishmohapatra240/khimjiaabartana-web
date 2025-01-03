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
        name: "ଦୁର୍ଗା ପୂଜା",
        description: "ଦୁର୍ଗା ପୂଜା ହେଉଛି ଓଡ଼ିଶାର ସବୁଠାରୁ ବଡ଼ ପର୍ବ । ଏହି ସମୟରେ ମା' ଦୁର୍ଗାଙ୍କୁ ନଅ ଦିନ ଧରି ପୂଜା କରାଯାଏ ।",
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
            color: holidayColors[0]
        },
        {
            date: "୦୨",
            englishDate: 2,
            festival: "ଦଶହରା - Dussehra",
            color: holidayColors[1]
        },
        {
            date: "୦୬",
            englishDate: 6,
            festival: "ଗଜଲକ୍ଷ୍ମୀ ପୂଜା - Gajalakshmi Puja",
            color: holidayColors[2]
        },
        {
            date: "୨୧",
            englishDate: 21,
            festival: "ଦୀପାବଳୀ - Diwali",
            color: holidayColors[3]
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