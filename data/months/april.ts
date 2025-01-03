import { holidayColors } from "@/app/constants/HolidayColors";
import { HolidayType, SubhadinaType } from "@/types/calendar";

export const aprilData = {
    name: "APRIL",
    odia: {
        first: "ଚୈତ୍ର",
        second: "ବୈଶାଖ",
    },
    dates: {
        start: "ମୀନ ଦି୧୮ନ",
        end: "ମେଷ ଦି୧୭ନ",
    },
    festival: {
        name: "ପଣା ସଂକ୍ରାନ୍ତି",
        description: "ପଣା ସଂକ୍ରାନ୍ତି ହେଉଛି ଓଡ଼ିଆ ନବବର୍ଷର ପ୍ରଥମ ଦିନ । ଏହି ଦିନ ବେଲପତ୍ର, ମହୁ, ଦହି ଓ କଦଳୀ ମିଶ୍ରିତ ପଣା ପିଆଯାଏ ।",
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
        { date: "30", significance: "୧୮ ତୃତୀୟା କୃତ୍ତିକା ବୃଷ" }
    ],

    holidays: [
        {
            date: "୦୧",
            englishDate: 1,
            festival: "ଉତ୍କଳ ଦିବସ - Utkala Dibasa",
            color: holidayColors[0]
        },
        {
            date: "୦୬",
            englishDate: 6,
            festival: "ଶ୍ରୀ ରାମ ନବମୀ - Shree Rama Nabami",
            color: holidayColors[1]
        },
        {
            date: "୧୪",
            englishDate: 14,
            festival: "ମହାବିଷୁବ ପଣା ସଂକ୍ରାନ୍ତି, ହନୁମାନ ଜୟନ୍ତୀ - Mahabishuba Sankranti",
            color: holidayColors[2]
        },
        {
            date: "୧୮",
            englishDate: 18,
            festival: "Good Friday",
            color: holidayColors[3]
        },
        {
            date: "୩୦",
            englishDate: 30,
            festival: "ଅକ୍ଷୟ ତୃତୀୟା - Akshaya Tritiya",
            color: holidayColors[0]
        }
    ] as HolidayType[],

    subhadina: {
        bibaha: [3, 5, 7, 10, 12, 15, 17, 19],
        brataGhara: [3, 7, 12, 17],
    } as SubhadinaType,
    moonIcons: {
        1: 'Purnima',
        14: 'Amavasya',
        20: 'KrishnaPakshaEkadashi',
        25: 'ShuklaPakshaEkadashi',
    }
}; 