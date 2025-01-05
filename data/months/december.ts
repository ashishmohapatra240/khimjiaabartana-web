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
        name: "ମାର୍ଗଶିର ମାଣବସା ଗୁରୁବାର",
        description: "ମହାଲକ୍ଷ୍ମୀଙ୍କୁ ଧନଧାନ୍ୟ ବୃଦ୍ଧି ନିମନ୍ତେ ମାର୍ଗଶିର ମାସ ମାଣବସା ଗୁରୁବାର ଦିନ ପୂଜା କରାଯାଏ । ଓଡ଼ିଆ ନାରୀମାନେ ଏହି ମାସ ପ୍ରତି ଗୁରୁବାର ଦିନ ଏହି ଓଷା ପାଳନ କରିଥାନ୍ତି । ପ୍ରତିଟି ଓଡ଼ିଆ ନିଜ ଘର ପରିଷ୍କାର ରଖନ୍ତି ଏବଂ ଝୋଟି ଚିତାରେ ମା' ଲକ୍ଷ୍ମୀଙ୍କ ପାଦ ଚିହ୍ନ ପକାଇଥାନ୍ତି । ବିଶ୍ୱାସ ରହିଛି ଯେ ମା' ଲକ୍ଷ୍ମୀ ପରିଷ୍କାର ଓ ସୁସଜ୍ଜିତ ଘର ଆଡ଼କୁ ଆକର୍ଷିତ ହୁଅନ୍ତି । ମାର୍ଗଶିର ମାସରେ ପ୍ରଥମ ଧାନ ଅମଳ ଆରମ୍ଭ ହୁଏ । ଚାଷୀ ତା’ର ଖଳାକୁ ଧାନହଳା ଆଣିଥାଏ । ଏହି ପୂଜାରେ ମା' ଲକ୍ଷ୍ମୀ ପ୍ରସନ୍ନ ହୋଇ ଉତ୍ତମ ସ୍ୱାସ୍ଥ୍ୟ, ସମୃଦ୍ଧି ଓ ଖୁସି ନିମନ୍ତେ ଆଶୀର୍ବାଦ କରନ୍ତି ବୋଲି ମାନ୍ୟତା ରହିଛି । ମାର୍ଗଶିର ମାସର ଶେଷ ଗୁରୁବାର ଦିନ ବ୍ରତ ସାରି ଉଜୁଆଁ ଯାଏ ।",
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
            color: holidayColors[0],
            isoDate: "2025-12-04T00:00:00Z"
        },
        {
            date: "୧୯",
            englishDate: 19,
            festival: "ବକୁଳ ଅମାବାସ୍ୟା - Bakula Amabasya",
            color: holidayColors[1],
            isoDate: "2025-12-19T00:00:00Z"
        },
        {
            date: "୨୫",
            englishDate: 25,
            festival: "ବଡ଼ ଦିନ - Christmas Day",
            color: holidayColors[2],
            isoDate: "2025-12-25T00:00:00Z"
        },
        {
            date: "୦୧",
            englishDate: 1,
            festival: "ମୋକ୍ଷଦା ଏକାଦଶୀ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-12-01T00:00:00Z"
        },
        {
            date: "୦୨",
            englishDate: 2,
            festival: "ବ୍ୟଞ୍ଜନ ଦ୍ୱାଦଶୀ",
            color: holidayColors[4],
            isoDate: "2025-12-02T00:00:00Z"
        },
        {
            date: "୦୩",
            englishDate: 3,
            festival: "ଅନଙ୍ଗ ତ୍ରୟୋଦଶୀ, ଗୀତା ଜୟନ୍ତୀ, ପାଷାଣ ଚତୁର୍ଦ୍ଦଶୀ, ଶିବ ଓ ବେଢ଼ା ପରିକ୍ରମା",
            color: holidayColors[4],
            isoDate: "2025-12-03T00:00:00Z"
        },
        {
            date: "୦୬",
            englishDate: 6,
            festival: "ଦାଣ୍ଡ ପହଁରା ଓ ବାଟ ଓଷା",
            color: holidayColors[4],
            isoDate: "2025-12-06T00:00:00Z"
        },
        {
            date: "୧୫",
            englishDate: 15,
            festival: "ସଫଳା ଏକାଦଶୀ ଉପବାସ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-12-15T00:00:00Z"
        },
        {
            date: "୧୬",
            englishDate: 16,
            festival: "ଧନୁ ସଂକ୍ରାନ୍ତି, ପହିଲି ଭୋଗ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-12-16T00:00:00Z"
        },
        {
            date: "୧୮",
            englishDate: 18,
            festival: "ଶିବଚତୁର୍ଦ୍ଦଶୀ ଓ ଉପବାସ",
            color: holidayColors[4],
            isoDate: "2025-12-18T00:00:00Z"
        },
        {
            date: "୨୧",
            englishDate: 21,
            festival: "ଦ୍ଵିତୀୟାର ଚନ୍ଦ୍ରଦର୍ଶନ",
            color: holidayColors[4],
            isoDate: "2025-12-21T00:00:00Z"
        },
        {
            date: "୨୨",
            englishDate: 22,
            festival: "ଶରଣ ଆରମ୍ଭ",
            color: holidayColors[4],
            isoDate: "2025-12-22T00:00:00Z"
        },
        {
            date: "୨୬",
            englishDate: 26,
            festival: "ଶରଣ ଶେଷ",
            color: holidayColors[4],
            isoDate: "2025-12-26T00:00:00Z"
        },
        {
            date: "୩୦",
            englishDate: 30,
            festival: "ଶାମ୍ବଦଶମୀ, ପୁତ୍ରଦା ଏକାଦଶୀ ଉପବାସ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-12-30T00:00:00Z"
        }
    ] as HolidayType[],
    

    subhadina: {
        bibaha: [1, 3, 6, 8, 10, 13, 15, 17],
        brataGhara: [1, 6, 10, 15],
    } as SubhadinaType,
    moonIcons: {
        4: 'Purnima',
        19: 'Amavasya',
        15: 'KrishnaPakshaEkadashi',
        1: 'ShuklaPakshaEkadashi',
    },

};