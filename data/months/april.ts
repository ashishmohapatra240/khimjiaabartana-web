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
            isoDate: "2025-04-01T00:00:00Z",
            festival: "ଉତ୍କଳ ଦିବସ - Utkala Dibasa",
            color: holidayColors[0]
        },
        {
            date: "୦୬",
            englishDate: 6,
            isoDate: "2025-04-06T00:00:00Z",
            festival: "ଶ୍ରୀ ରାମ ନବମୀ - Shree Rama Nabami",
            color: holidayColors[1]
        },
        {
            date: "୧୪",
            englishDate: 14,
            isoDate: "2025-04-14T00:00:00Z",
            festival: "ମହାବିଷୁବ ପଣା ସଂକ୍ରାନ୍ତି, ହନୁମାନ ଜୟନ୍ତୀ - Mahabishuba Sankranti",
            color: holidayColors[2]
        },
        {
            date: "୧୮",
            englishDate: 18,
            isoDate: "2025-04-18T00:00:00Z",
            festival: "Good Friday",
            color: holidayColors[3]
        },
        {
            date: "୩୦",
            englishDate: 30,
            isoDate: "2025-04-30T00:00:00Z",
            festival: "ଅକ୍ଷୟ ତୃତୀୟା - Akshaya Tritiya",
            color: holidayColors[0]
        },
        {
            date: "୦୨",
            englishDate: 2,
            isoDate: "2025-04-02T00:00:00Z",
            festival: "ଶ୍ରୀ ଦୁର୍ଗାଦେବ୍ୟୋ ପଞ୍ଚମାଦି କଳ୍ପାରମ୍ଭ",
            color: holidayColors[4]
        },
        {
            date: "୦୩",
            englishDate: 3,
            isoDate: "2025-04-03T00:00:00Z",
            festival: "ଶ୍ରୀମନ୍ଦିରେ ଚୈତ୍ର ଗୁଣ୍ଡିଚା ଯାତ୍ରା, ବାସନ୍ତୀକ ଶ୍ରୀ ଦୁର୍ଗାଦେବ୍ୟୋଃ ବିଲ୍ୱବରଣ",
            color: holidayColors[4]
        },
        {
            date: "୦୪",
            englishDate: 4,
            isoDate: "2025-04-04T00:00:00Z",
            festival: "ବାସନ୍ତୀକ ଶ୍ରୀ ଦୁର୍ଗାଦେବ୍ୟୋଃ ସପ୍ତମୀ ଓ ମହାଷ୍ଟମୀ ପୂଜା, ଶ୍ରୀ ଲିଙ୍ଗରାଜ ଦେବଙ୍କର ରଥ ପ୍ରତିଷ୍ଠା",
            color: holidayColors[4]
        },
        {
            date: "୦୫",
            englishDate: 5,
            isoDate: "2025-04-05T00:00:00Z",
            festival: "ଅଶୋକାଷ୍ଟମୀ, ଶ୍ରୀ ଶ୍ରୀ ଲିଙ୍ଗରାଜ ଦେବଙ୍କର ରଥଯାତ୍ରା, ଶ୍ରୀ ବାସନ୍ତୀଦୁର୍ଗା ଦେବ୍ୟୋଃ ମହାନବମୀ ପୂଜା",
            color: holidayColors[4]
        },
        {
            date: "୦୭",
            englishDate: 7,
            isoDate: "2025-04-07T00:00:00Z",
            festival: "ବାସନ୍ତୀକ ଦଶହରା",
            color: holidayColors[4]
        },
        {
            date: "୦୮",
            englishDate: 8,
            isoDate: "2025-04-08T00:00:00Z",
            festival: "କାମଦା ଏକାଦଶୀ ଉପବାସ, ସୀତା ବିବାହ, ହଳ ନିଷେଧ",
            color: holidayColors[4]
        },
        {
            date: "୧୦",
            englishDate: 10,
            isoDate: "2025-04-10T00:00:00Z",
            festival: "ଅନଙ୍ଗ ତ୍ରୟୋଦතୀ",
            color: holidayColors[4]
        },
        {
            date: "୧୧",
            englishDate: 11,
            isoDate: "2025-04-11T00:00:00Z",
            festival: "ଶିବ ଓ ବିଷ୍ଣୁ ଦମନକ ଚତୁର୍ଦ୍ଦଶୀ",
            color: holidayColors[4]
        },
        {
            date: "୧୨",
            englishDate: 12,
            isoDate: "2025-04-12T00:00:00Z",
            festival: "ଚୈତ୍ର ପୂର୍ଣ୍ଣିମା, ହିଙ୍ଗୁଳା ଯାତ୍ରା",
            color: holidayColors[4]
        },
        {
            date: "୧୩",
            englishDate: 13,
            isoDate: "2025-04-13T00:00:00Z",
            festival: "ମାସାନ୍ତ, ବୈଶାଖ ବ୍ରତାରମ୍ଭ, ବର୍ଷ ଶେଷ",
            color: holidayColors[4]
        },
        {
            date: "୨୦",
            englishDate: 20,
            isoDate: "2025-04-20T00:00:00Z",
            festival: "ଶରଣ ଆରମ୍ଭ",
            color: holidayColors[4]
        },
        {
            date: "୨୪",
            englishDate: 24,
            isoDate: "2025-04-24T00:00:00Z",
            festival: "ବରୁଥିନୀ ଏକାଦଶ୭ୀ, ଶରଣ ଶେଷ, ହଳ ନିଷେଧ",
            color: holidayColors[4]
        },
        {
            date: "୨୬",
            englishDate: 26,
            isoDate: "2025-04-26T00:00:00Z",
            festival: "ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢ଼ା",
            color: holidayColors[4]
        },
        {
            date: "୨୭",
            englishDate: 27,
            isoDate: "2025-04-27T00:00:00Z",
            festival: "ରୁକ୍ମିଣୀ ଅମାବାସ୍ୟା, ସୂର୍ଯ୍ୟମହତି ସ୍ନାନ, ଚନ୍ଦ୍ରକ୍ଷୟ, ନିଶିପାଳନ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4]
        },
        {
            date: "୨୯",
            englishDate: 29,
            isoDate: "2025-04-29T00:00:00Z",
            festival: "ଦ୍ଵିତୀୟାର ଚନ୍ଦ୍ର ଦର୍ଶନ",
            color: holidayColors[4]
        }
    ] as HolidayType[],

    subhadina: {
        bibaha: [3, 5, 7, 10, 12, 15, 17, 19],
        brataGhara: [3, 7, 12, 17],
    } as SubhadinaType,
    moonIcons: {
        12: 'Purnima',
        27: 'Amavasya',
        24: 'KrishnaPakshaEkadashi',
        8: 'ShuklaPakshaEkadashi',
    },
}; 