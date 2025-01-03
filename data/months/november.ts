import { holidayColors } from "@/app/constants/HolidayColors";
import { SubhadinaType } from "@/types/calendar";

import { HolidayType } from "@/types/calendar";

export const novemberData = {
    name: "NOVEMBER",
    odia: {
        first: "କାର୍ତ୍ତିକ",
        second: "ମାର୍ଗଶିର",
    },
    dates: {
        start: "ତୁଳା ଦି୧୮ନ",
        end: "ବୃଶ୍ଚିକ ଦି୧୭ନ",
    },
    festival: {
        name: "କାର୍ତ୍ତିକ ପୂର୍ଣ୍ଣିମା",
        description: "କାର୍ତ୍ତିକ ପୂର୍ଣ୍ଣିମା ଓଡ଼ିଶାର ଏକ ମହତ୍ତ୍ୱପୂର୍ଣ୍ଣ ଉତ୍ସବ, ଯାହା ପ୍ରତିବର୍ଷ କାର୍ତ୍ତିକ ମାସର ପୂର୍ଣ୍ଣିମା ତିଥିରେ ପାଳିତ ହୁଏ । ଏହି ଦିନ ବ୍ରହ୍ମ ମୁହୂର୍ତ୍ତରୁ ଉଠି ନଦୀ କିମ୍ବା ପୋଖରୀରେ ବୁଡ଼ ପକାଇ, ଦୀପ ଜାଳି ଡଙ୍ଗା ଭସାଇବାର ପରମ୍ପରା ରହିଛି । ବିଶ୍ୱାସ ରହିଛି ଯେ ଏହିଦିନ ପ୍ରତ୍ୟୁଷରୁ ସ୍ନାନପୂର୍ବକ ଦେବଦର୍ଶନ କଲେ ସମସ୍ତ ପ୍ରକାର ପାପ ନାଶ ହୋଇଥାଏ । ଓଡ଼ିଶାର ଗୌରବମୟ ନୌପରମ୍ପରା ସହିତ ଏହାର ସମ୍ପର୍କ ରହିଥିବାରୁ, କାର୍ତ୍ତିକ ପୂର୍ଣ୍ଣିମା ବୋଇତ ବନ୍ଦାଣ ଦିବସ ନାମରେ ମଧ୍ୟ ଜଣାଶୁଣା । ବିଧବାମାନେ ଏହି ମାସରେ ହବିଷ୍ୟ ପାଳନ ପୂର୍ବକ ପ୍ରତ୍ୟହ ସନ୍ଧ୍ୟାରେ ଆକାଶଦୀପ ପ୍ରଜ୍ଜଳନ କରିଥାନ୍ତି ।",
    },
    dateDetails: [
        { date: "1", significance: "୨୩ ଅଷ୍ଟମୀ ଦ୍ଵିଜା ମେଷ" },
        { date: "2", significance: "୨୪ ନବମୀ କୃତ୍ତିକା ବୃଷ" },
        { date: "3", significance: "୨୫ ଦଶମୀ ରୋହିଣୀ ବୃଷ" },
        { date: "4", significance: "୨୬ ଏକାଦଶୀ ମୃଗଶିରା ବୃଷ" },
        { date: "5", significance: "୨୭ ଦ୍ୱାଦଶୀ ଆର୍ଦ୍ରା ମିଥୁନ" },
        { date: "6", significance: "୨୮ ତ୍ରୟୋଦଶୀ ପୁନର୍ବସୁ ମିଥୁନ" },
        { date: "7", significance: "୨୯ ଚତୁର୍ଦ୍ଦଶୀ ପୁଷ୍ୟା କର୍କଟ" },
        { date: "8", significance: "୩୦ ପୂର୍ଣ୍ଣିମା ଅଶ୍ଳେଷା କର୍କଟ" },
        { date: "9", significance: "୧ ପ୍ରତିପଦ ମଘା ସିଂହ" },
        { date: "10", significance: "୨ ଦ୍୵ିତୀୟା ପୂର୍ବାଫାଃ ସିଂହ" },
        { date: "11", significance: "୩ ତୃତୀୟା ଉତ୍ତରାଫାଃ ସିଂହ" },
        { date: "12", significance: "୪ ଚତୁର୍ଥୀ ହସ୍ତା କନ୍ୟା" },
        { date: "13", significance: "୫ ପଞ୍ଚମୀ ଚିତ୍ରା କନ୍ୟା" },
        { date: "14", significance: "୬ ଷଷ୍ଠୀ ସ୍ୱାତୀ ତୁଳା" },
        { date: "15", significance: "୭ ସପ୍ତମୀ ବିଶାଖା ତୁଳା" },
        { date: "16", significance: "୮ ଅଷ୍ଟମୀ ଅନୁରାଧା ବିଛା" },
        { date: "17", significance: "୯ ନବମୀ ଜ୍ୟେଷ୍ଠା ବିଛା" },
        { date: "18", significance: "୧୦ ଦଶମୀ ମୂଳା ଧନୁ" },
        { date: "19", significance: "୧୧ ଏକାଦଶୀ ପୂର୍ବାଷାଢ଼ା ଧନୁ" },
        { date: "20", significance: "୧୨ ଦ୍ୱାଦଶୀ ଉତ୍ତରାଷାଢ଼ା ମକର" },
        { date: "21", significance: "୧୩ ତ୍ରୟୋଦଶୀ ଶ୍ରବଣା ମକର" },
        { date: "22", significance: "୧୪ ଚତୁର୍ଦ୍ଦଶୀ ଧନିଷ୍ଠା କୁମ୍ଭ" },
        { date: "23", significance: "୧୫ ପୂର୍ଣ୍ଣିମା ଶତଭିଷା କୁମ୍ଭ" },
        { date: "24", significance: "୧୬ ପ୍ରତିପଦ ଉତ୍ତରାଭାଦ୍ର ମୀନ" },
        { date: "25", significance: "୧୭ ଦ୍୵ିତୀୟା ରେବତୀ ମୀନ" },
        { date: "26", significance: "୧୮ ତୃତୀୟା ଅଶ୍ୱିନୀ ମେଷ" },
        { date: "27", significance: "୧୯ ଚତୁର୍ଥୀ ଦ୍ଵିଜା ମେଷ" },
        { date: "28", significance: "୨୦ ପଞ୍ଚମୀ କୃତ୍ତିକା ବୃଷ" },
        { date: "29", significance: "୨୧ ଷଷ୍ଠୀ ରୋହିଣୀ ବୃଷ" },
        { date: "30", significance: "୨୨ ସପ୍ତମୀ ମୃଗଶିରା ବୃଷ" }
    ],

    holidays: [
        {
            date: "୦୫",
            englishDate: 5,
            festival: "କାର୍ତ୍ତିକେଶ୍ୱର ପୂଜା - Kartika Purnima",
            color: holidayColors[0],
            isoDate: "2025-11-05T00:00:00Z"
        },
        {
            date: "୧୨",
            englishDate: 12,
            festival: "ପ୍ରଥମାଷ୍ଟମୀ - Prathamastami",
            color: holidayColors[1],
            isoDate: "2025-11-12T00:00:00Z"
        },
        {
            date: "୧୪",
            englishDate: 14,
            festival: "ଶିଶୁ ଦିବସ - Children's Day",
            color: holidayColors[2],
            isoDate: "2025-11-14T00:00:00Z"
        },
        {
            date: "୦୧",
            englishDate: 1,
            festival: "ଶରଦ୍ରାସାଧିବାସ",
            color: holidayColors[4],
            isoDate: "2025-11-01T00:00:00Z"
        },
        {
            date: "୦୨",
            englishDate: 2,
            festival: "ଦେବୋତ୍ ଥାପନ (ବଡ଼) ଏକାଦଶୀ, ଭୀଷ୍ମ ପଞ୍ଚକ ବ୍ରତ, ରବିନାରାୟଣ ବ୍ରତ, ଶରଦ୍ରାସାରମ୍ଭ, ଗରୁଡ଼ ଦ୍ୱାଦଶୀ ଓ ତୁଳସୀ ବିବାହ, ଶରଣ ଶେଷ",
            color: holidayColors[4],
            isoDate: "2025-11-02T00:00:00Z"
        },
        {
            date: "୦୪",
            englishDate: 4,
            festival: "ବଡ଼ଓଷା, ଶିବୋତ୍ଥାପନ ଓ ବୈକୁଣ୍ଠ ଚତୁର୍ଦ୍ଦଶୀ",
            color: holidayColors[4],
            isoDate: "2025-11-04T00:00:00Z"
        },
        {
            date: "୦୬",
            englishDate: 6,
            festival: "ଛାଡ଼ଖାଇ, ମାର୍ଗଶୀର ଗୁରୁବାର",
            color: holidayColors[4],
            isoDate: "2025-11-06T00:00:00Z"
        },
        {
            date: "୦୯",
            englishDate: 9,
            festival: "ସୀତା ବିବାହ",
            color: holidayColors[4],
            isoDate: "2025-11-09T00:00:00Z"
        },
        {
            date: "୧୦",
            englishDate: 10,
            festival: "ଶ୍ରୀକ୍ଷେତ୍ର ପରିକ୍ରମା",
            color: holidayColors[4],
            isoDate: "2025-11-10T00:00:00Z"
        },
        {
            date: "୧୩",
            englishDate: 13,
            festival: "କାଞ୍ଜିଅଁଳା ନବମୀ, ମାଣବସା ଗୁରୁବାର",
            color: holidayColors[4],
            isoDate: "2025-11-13T00:00:00Z"
        },
        {
            date: "୧୫",
            englishDate: 15,
            festival: "ଉତ୍ପନ୍ନା ଏକାଦଶୀ ଉପବାସ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-11-15T00:00:00Z"
        },
        {
            date: "୧୬",
            englishDate: 16,
            festival: "ବିଛା ସଂକ୍ରାନ୍ତି, କାର୍ତ୍ତିକେୟ ପୂଜା ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4],
            isoDate: "2025-11-16T00:00:00Z"
        },
        {
            date: "୧୮",
            englishDate: 18,
            festival: "ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            color: holidayColors[4],
            isoDate: "2025-11-18T00:00:00Z"
        },
        {
            date: "୧୯",
            englishDate: 19,
            festival: "ଶ୍ରୀମନ୍ଦିରେ ଦେବଦୀପାବଳି ଆରମ୍ଭ ଓ ଚନ୍ଦ୍ରକ୍ଷୟ",
            color: holidayColors[4],
            isoDate: "2025-11-19T00:00:00Z"
        },
        {
            date: "୨୦",
            englishDate: 20,
            festival: "ମହୋଦଧି ଅମାବାସ୍ୟା ଓ ମଧ୍ୟ ଦେବ ଦୀପାବଳି",
            color: holidayColors[4],
            isoDate: "2025-11-20T00:00:00Z"
        },
        {
            date: "୨୧",
            englishDate: 21,
            festival: "ଦେବଦୀପାବଳି ସମାପ୍ତି ଓ ଚନ୍ଦ୍ର ଦର୍ଶନ",
            color: holidayColors[4],
            isoDate: "2025-11-21T00:00:00Z"
        },
        {
            date: "୨୩",
            englishDate: 23,
            festival: "ରମ୍ଭାତୃତୀୟା",
            color: holidayColors[4],
            isoDate: "2025-11-23T00:00:00Z"
        },
        {
            date: "୨୪",
            englishDate: 24,
            festival: "ଶରଣ ଆରମ୍ଭ",
            color: holidayColors[4],
            isoDate: "2025-11-24T00:00:00Z"
        },
        {
            date: "୨୫",
            englishDate: 25,
            festival: "କୁରାଳ ପଞ୍ଚମୀ",
            color: holidayColors[4],
            isoDate: "2025-11-25T00:00:00Z"
        },
        {
            date: "୨୬",
            englishDate: 26,
            festival: "ଓଢ଼ଣ ଓ ପ୍ରାବର࣍ଣ ଷଷ୍ଠୀ",
            color: holidayColors[4],
            isoDate: "2025-11-26T00:00:00Z"
        },
        {
            date: "୨୭",
            englishDate: 27,
            festival: "ମାଣବସା ଗୁରୁବାର",
            color: holidayColors[4],
            isoDate: "2025-11-27T00:00:00Z"
        },
        {
            date: "୨୯",
            englishDate: 29,
            festival: "ଶରଣ ଶେଷ",
            color: holidayColors[4],
            isoDate: "2025-11-29T00:00:00Z"
        }
    ] as HolidayType[],


    subhadina: {
        bibaha: [2, 4, 7, 9, 11, 14, 16, 18],
        brataGhara: [2, 7, 11, 16],
    } as SubhadinaType,
    moonIcons: {
        5: 'Purnima',
        20: 'Amavasya',
        15: 'KrishnaPakshaEkadashi',
        2: 'ShuklaPakshaEkadashi',
    },
};