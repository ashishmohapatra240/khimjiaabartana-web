import { holidayColors } from "@/app/constants/HolidayColors";
import { HolidayType } from "@/types/calendar";

import { SubhadinaType } from "@/types/calendar";

export const augustData = {
    name: "AUGUST",
    odia: {
        first: "ଶ୍ରାବଣ",
        second: "ଭାଦ୍ରବ",
    },
    dates: {
        start: "କର୍କଟ ଦି୧୮ନ",
        end: "ସିଂହ ଦି୧୭ନ",
    },
    festival: {
        name: "ରକ୍ଷା ବନ୍ଧନ",
        description: "ରକ୍ଷା ବନ୍ଧନ ହେଉଛି ଭାଇ-ଭଉଣୀଙ୍କ ମଧ୍ୟରେ ଥିବା ପବିତ୍ର ସମ୍ପର୍କର ପ୍ରତୀକ । ଏହି ଦିନ ଭଉଣୀମାନେ ଭାଇମାନଙ୍କୁ ରାଖି ବାନ୍ଧନ୍ତି ।",
    },
    dateDetails: [
        { date: "1", significance: "୨୧ ଷଷ୍ଠୀ ଚିତ୍ରା କନ୍ୟା" },
        { date: "2", significance: "୨୨ ସପ୍ତମୀ ସ୍ୱାତୀ ତୁଳା" },
        { date: "3", significance: "୨୩ ଅଷ୍ଟମୀ ବିଶାଖା ତୁଳା" },
        { date: "4", significance: "୨୪ ନବମୀ ଅନୁରାଧା ବିଛା" },
        { date: "5", significance: "୨୫ ଦଶମୀ ଜ୍ୟେଷ୍ଠା ବିଛା" },
        { date: "6", significance: "୨୬ ଏକାଦଶୀ ମୂଳା ଧନୁ" },
        { date: "7", significance: "୨୭ ଦ୍ୱାଦଶୀ ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "8", significance: "୨୮ ତ୍ରୟୋଦଶୀ ଉତ୍ତରାଷାଢ଼ା ମକର" },
        { date: "9", significance: "୨୯ ଚତୁର୍ଦ୍ଦଶୀ ଶ୍ରବଣା ମକର" },
        { date: "10", significance: "୩୦ ପୂର୍ଣ୍ଣିମା ଧନିଷ୍ଠା କୁମ୍ଭ" },
        { date: "11", significance: "୧ ପ୍ରତିପଦ ଶତଭିଷା କୁମ୍ଭ" },
        { date: "12", significance: "୨ ଦ୍୵ିତୀୟା ଉତ୍ତରାଭାଦ୍ର ମୀନ" },
        { date: "13", significance: "୩ ତୃତୀୟା ରେବତୀ ମୀନ" },
        { date: "14", significance: "୪ ଚତୁର୍ଥୀ ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "15", significance: "୫ ପଞ୍ଚମୀ ଦ୍ଵିଜା ମେଷ" },
        { date: "16", significance: "୬ ଷଷ୍ଠୀ କୃତ୍ତିକା ବୃଷ" },
        { date: "17", significance: "୭ ସପ୍ତମୀ ରୋହିଣୀ ବୃଷ" },
        { date: "18", significance: "୮ ଅଷ୍ଟମୀ ମୃଗଶିରା ବୃଷ" },
        { date: "19", significance: "୯ ନବମୀ ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "20", significance: "୧୦ ଦଶମୀ ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "21", significance: "୧୧ ଏକାଦଶୀ ପୁଷ୍ୟା କର୍କଟ" },
        { date: "22", significance: "୧୨ ଦ୍ୱାଦଶୀ ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "23", significance: "୧୩ ତ୍ରୟୋଦଶୀ ମଘା ସିଂହ" },
        { date: "24", significance: "୧୪ ଚତୁର୍ଦ୍ଦଶୀ ପୂର୍ବାଫାଃ ସିଂହ" },
        { date: "25", significance: "୧୫ ପୂର୍ଣ୍ଣିମା ଉତ୍ତରାଫାଃ ସିଂହ" },
        { date: "26", significance: "୧୬ ପ୍ରତିପଦ ହସ୍ତା କନ୍ୟା" },
        { date: "27", significance: "୧୭ ଦ୍୵ିତୀୟା ଚିତ୍ରା କନ୍ୟା" },
        { date: "28", significance: "୧୮ ତୃତୀୟା ସ୍ୱାତୀ ତୁଳା" },
        { date: "29", significance: "୧୯ ଚତୁର୍ଥୀ ବିଶାଖା ତୁଳା" },
        { date: "30", significance: "୨୦ ପଞ୍ଚମୀ ଅନୁରାଧା ବିଛା" },
        { date: "31", significance: "୨୧ ଷଷ୍ଠୀ ଜ୍ୟେଷ୍ଠା ବିଛା" }
    ],

    holidays: [
        {
            date: "୦୯",
            englishDate: 9,
            festival: "ରକ୍ଷ୍ୟା ବନ୍ଧନ - Rakshya Bandhana",
            color: holidayColors[0]
        },
        {
            date: "୧୫",
            englishDate: 15,
            festival: "ଶ୍ରୀକୃଷ୍ଣ ଜନ୍ମାଷ୍ଟମୀ - Janmastami",
            color: holidayColors[1]
        },
        {
            date: "୧୫",
            englishDate: 15,
            festival: "ସ୍ୱାଧୀନତା ଦିବସ - Independence Day",
            color: holidayColors[2]
        },
        {
            date: "୨୭",
            englishDate: 27,
            festival: "ଶ୍ରୀଗଣେଶ ଚତୁର୍ଥୀ - Ganesha Chaturthi",
            color: holidayColors[3]
        },
        {
            date: "୨୮",
            englishDate: 28,
            festival: "ନୂଆଖାଇ - Nuakhai",
            color: holidayColors[0]
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
    },
}; 