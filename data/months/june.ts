import { holidayColors } from "@/app/constants/HolidayColors";
import { HolidayType } from "@/types/calendar";

import { SubhadinaType } from "@/types/calendar";

export const juneData = {
    name: "JUNE",
    odia: {
        first: "ଜ୍ୟେଷ୍ଠ",
        second: "ଆଷାଢ଼",
    },
    dates: {
        start: "ବୃଷ ଦି୧୮ନ",
        end: "ମିଥୁନ ଦି୧୭ନ",
    },
    festival: {
        name: "ରଥଯାତ୍ରା",
        description: "ବିଶ୍ୱପ୍ରସିଦ୍ଧ ରଥଯାତ୍ରା ହେଉଛି ଓଡ଼ିଆ ସଂସ୍କୃତି ଓ ପରମ୍ପରାର ଅନନ୍ୟ ପରିଚୟ । ଏହା ଶ୍ରୀଜଗନ୍ନାଥ ମନ୍ଦିରରେ ପାଳିତ ଦ୍ୱାଦଶ ଯାତ୍ରା ମଧ୍ୟରେ ପ୍ରଧାନ । ରଥଯାତ୍ରା ଆଷାଢ଼-ଶୁକ୍ଳ-ଦ୍ୱିତୀୟା ତିଥି ଦିନ ପାଳିତ ହୋଇଥାଏ । ଏହି ଦିନ ମହାପ୍ରଭୁ ଶ୍ରୀଜଗନ୍ନାଥ, ଭଗିନୀ ସୁଭଦ୍ରା ଓ ଭାଇ ବଳଭଦ୍ର ରଥରେ ବିଜେହୋଇ ଶ୍ରୀମନ୍ଦିରରୁ ଜନ୍ମବେଦୀ ଗୁଣ୍ଡିଚା ମନ୍ଦିରକୁ ଯାଆନ୍ତି । ରଥଯାତ୍ରାରେ ମହାପ୍ରଭୁ ଶ୍ରୀମନ୍ଦିର ବାହାରେ ଭକ୍ତଙ୍କୁ ଦର୍ଶନ ଦିଅନ୍ତି ତେଣୁ ଏହାକୁ ଭକ୍ତ ଓ ଭଗବାନଙ୍କ ଅପୂର୍ବ ମିଳନ ବୋଲି କୁହାଯାଏ । ପତିତ ଜନଙ୍କୁ ଉଦ୍ଧାର କରିବା ପାଇଁ ରତ୍ନ ସିଂହାସନ ଛାଡ଼ି ରଥକୁ ଆସନ୍ତି ମହାପ୍ରଭୁ ।",
    },
    dateDetails: [
        { date: "1", significance: "୨୦ ପଞ୍ଚମୀ ମୃଗଶିରା ବୃଷ" },
        { date: "2", significance: "୨୧ ଷଷ୍ଠୀ ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "3", significance: "୨୨ ସପ୍ତମୀ ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "4", significance: "୨୩ ଅଷ୍ଟମୀ ପୁଷ୍ୟା କର୍କଟ" },
        { date: "5", significance: "୨୪ ନବମୀ ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "6", significance: "୨୫ ଦଶମୀ ମଘା ସିଂହ" },
        { date: "7", significance: "୨୬ ଏକାଦଶୀ ପୂର୍ବାଫାଃ ସିଂହ" },
        { date: "8", significance: "୨୭ ଦ୍ୱାଦଶୀ ଉତ୍ତରାଫାଃ ସିଂହ" },
        { date: "9", significance: "୨୮ ତ୍ରୟୋଦଶୀ ହସ୍ତା କନ୍ୟା" },
        { date: "10", significance: "୨୯ ଚତୁର୍ଦ୍ଦଶୀ ଚିତ୍ରା କନ୍ୟା" },
        { date: "11", significance: "୩୦ ପୂର୍ଣ୍ଣିମା ସ୍ୱାତୀ ତୁଳା" },
        { date: "12", significance: "୧ ପ୍ରତିପଦ ବିଶାଖା ତୁଳା" },
        { date: "13", significance: "୨ ଦ୍୵ିତୀୟା ଅନୁରାଧା ବିଛା" },
        { date: "14", significance: "୩ ତୃତୀୟା ଜ୍ୟେଷ୍ଠା ବିଛା" },
        { date: "15", significance: "୪ ଚତୁର୍ଥୀ ମୂଳା ଧନୁ" },
        { date: "16", significance: "୫ ପଞ୍ଚମୀ ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "17", significance: "୬ ଷଷ୍ଠୀ ଉତ୍ତରାଷାଢ଼ା ମକର" },
        { date: "18", significance: "୭ ସପ୍ତମୀ ଶ୍ରବଣା ମକର" },
        { date: "19", significance: "୮ ଅଷ୍ଟମୀ ଧନିଷ୍ଠା କୁମ୍ଭ" },
        { date: "20", significance: "୯ ନବମୀ ଶତଭିଷା କୁମ୍ଭ" },
        { date: "21", significance: "୧୦ ଦଶମୀ ଉତ୍ତରାଭାଦ୍ର ମୀନ" },
        { date: "22", significance: "୧୧ ଏକାଦଶୀ ରେବତୀ ମୀନ" },
        { date: "23", significance: "୧୨ ଦ୍ୱାଦଶୀ ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "24", significance: "୧୩ ତ୍ରୟୋଦଶୀ ଦ୍ଵିଜା ମେଷ" },
        { date: "25", significance: "୧୪ ଚତୁର୍ଦ୍ଦଶୀ କୃତ୍ତିକା ବୃଷ" },
        { date: "26", significance: "୧୫ ପୂର୍ଣ୍ଣିମା ରୋହିଣୀ ବୃଷ" },
        { date: "27", significance: "୧୬ ପ୍ରତିପଦ ମୃଗଶିରା ବୃଷ" },
        { date: "28", significance: "୧୭ ଦ୍୵ିତୀୟା ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "29", significance: "୧୮ ତୃତୀୟା ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "30", significance: "୧୯ ଚତୁର୍ଥୀ ପୁଷ୍ୟା କର୍କଟ" }
    ],

    holidays: [
        {
            date: "୦୧",
            englishDate: 1,
            festival: "ଶୀତଳ ଷଷ୍ଠୀ - Sitala Sasti",
            color: holidayColors[0],
            isoDate: "2025-06-01T00:00:00Z"
        },
        {
            date: "୧୧",
            englishDate: 11,
            festival: "ଦେବସ୍ନାନ ପୂର୍ଣ୍ଣିମା - Debasnana Purnima",
            color: holidayColors[1],
            isoDate: "2025-06-11T00:00:00Z"
        },
        {
            date: "୧୪",
            englishDate: 14,
            festival: "ପ୍ରଥମ ରଜ - Pahili Raja",
            color: holidayColors[2],
            isoDate: "2025-06-14T00:00:00Z"
        },
        {
            date: "୨୭",
            englishDate: 27,
            festival: "ଶ୍ରୀଗୁଣ୍ଡିଚା (ରଥଯାତ୍ରା) - Shree Gundicha (Ratha Jatra)",
            color: holidayColors[3],
            isoDate: "2025-06-27T00:00:00Z"
        },
        // {
        //     date: "୦୧",
        //     englishDate: 1,
        //     festival: "ଶୀତଳ ଷଷ୍ଠୀ, ଶ୍ରୀମନ୍ଦିରେ ଜଳକ୍ରୀଡ଼ା",
        //     color: holidayColors[4],
        //     isoDate: "2025-06-01T00:00:00Z"
        // },
        {
            date: "୦୫",
            englishDate: 5,
            festival: "ଗଙ୍ଗା ଦଶହରା ଓ ସୁଦଶା ବ୍ରତ",
            color: holidayColors[4],
            isoDate: "2025-06-05T00:00:00Z"
        },
        {
            date: "୦୬",
            englishDate: 6,
            festival: "ରୁକ୍ମିଣୀ ବିବାହ, ନିର୍ଜଳା ଏକାଦଶୀ ଉପବାସ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-06-06T00:00:00Z"
        },
        {
            date: "୦୭",
            englishDate: 7,
            festival: "ଚମ୍ପକ ଦ୍ୱାଦଶୀ, ଇଦୁଜୁହା",
            color: holidayColors[4],
            isoDate: "2025-06-07T00:00:00Z"
        },
        {
            date: "୦୯",
            englishDate: 9,
            festival: "ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢ଼ା",
            color: holidayColors[4],
            isoDate: "2025-06-09T00:00:00Z"
        },
        {
            date: "୧୦",
            englishDate: 10,
            festival: "ପୂର୍ଣ୍ଣିମାର ଚନ୍ଦ୍ରପୂଜା",
            color: holidayColors[4],
            isoDate: "2025-06-10T00:00:00Z"
        },
        {
            date: "୧୨",
            englishDate: 12,
            festival: "ଅଲାରନାଥଙ୍କ ଦର୍ଶନ ଆରମ୍ଭ",
            color: holidayColors[4],
            isoDate: "2025-06-12T00:00:00Z"
        },
        // {
        //     date: "୧୪",
        //     englishDate: 14,
        //     festival: "ଶରଣ ଆରମ୍ଭ, ମାସାନ୍ତ",
        //     color: holidayColors[4],
        //     isoDate: "2025-06-14T00:00:00Z"
        // },
        {
            date: "୧୫",
            englishDate: 15,
            festival: "ମିଥୁନ (ରଜ) ସଂକ୍ରାନ୍ତି ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-06-15T00:00:00Z"
        },
        {
            date: "୧୬",
            englishDate: 16,
            festival: "ଭୂଦାହ, ଅଣସର ପଞ୍ଚମୀ",
            color: holidayColors[4],
            isoDate: "2025-06-16T00:00:00Z"
        },
        {
            date: "୧୭",
            englishDate: 17,
            festival: "ବସୁମତୀ ସ୍ନାନ",
            color: holidayColors[4],
            isoDate: "2025-06-17T00:00:00Z"
        },
        {
            date: "୧୮",
            englishDate: 18,
            festival: "ଶରଣ ଶେଷ",
            color: holidayColors[4],
            isoDate: "2025-06-18T00:00:00Z"
        },
        {
            date: "୨୧",
            englishDate: 21,
            festival: "ଅଣସର ଦଶମୀ, ଖଳିଲାଗି ଏକାଦଶୀ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-06-21T00:00:00Z"
        },
        {
            date: "୨୨",
            englishDate: 22,
            festival: "ଅଣସର ଦ୍ୱାଦଶୀ, ପଠାଣି ସାମନ୍ତଙ୍କ ତିରୋଧାନ ଦିବସ",
            color: holidayColors[4],
            isoDate: "2025-06-22T00:00:00Z"
        },
        {
            date: "୨୩",
            englishDate: 23,
            festival: "ଅଣସର ତ୍ରୟୋଦଶୀ",
            color: holidayColors[4],
            isoDate: "2025-06-23T00:00:00Z"
        },
        {
            date: "୨୪",
            englishDate: 24,
            festival: "ଶିବଚତୁର୍ଦ୍ଦଶୀ ଓ ବେଢ଼ା",
            color: holidayColors[4],
            isoDate: "2025-06-24T00:00:00Z"
        },
        {
            date: "୨୫",
            englishDate: 25,
            festival: "ଅମାବାସ୍ୟା ଓ ହଳନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-06-25T00:00:00Z"
        },
        {
            date: "୨୬",
            englishDate: 26,
            festival: "ନେତ୍ରୋତ୍ସବ, ନବଯୌବନ ଦର୍ଶନ, ଉଭାଯାତ୍ରା, ଚନ୍ଦ୍ରଦର୍ଶନ ଓ ପୂଜା",
            color: holidayColors[4],
            isoDate: "2025-06-26T00:00:00Z"
        }
    ] as HolidayType[],
    

    subhadina: {
        bibaha: [1, 3, 6, 8, 10, 13, 15, 17],
        brataGhara: [1, 6, 10, 15],
    } as SubhadinaType,
    moonIcons: {
        1: 'ShuklaPakshaPratipada',
        6: 'ShuklaPakshaEkadashi',
        11: 'Purnima',
        25: 'Amavasya',
        30: 'KrishnaPakshaEkadashi',
    },

};