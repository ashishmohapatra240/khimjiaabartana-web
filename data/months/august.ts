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
        name: "ନୂଆଖାଇ",
        description: "ନୂଆଖାଇ ହେଉଛି ପଶ୍ଚିମ ଓଡ଼ିଶାର କୃଷିଭିତ୍ତିକ ଗଣପର୍ବ । ଏହା ଭାଦ୍ରବ ମାସ ଶୁକ୍ଳ ପଞ୍ଚମୀ ତିଥିରେ (ଗଣେଶ ଚତୁର୍ଥୀର ପରଦିନ) ପାଳିତ ହୋଇଥାଏ । ଏହି ଦିନ ପ୍ରତି ପରିବାର ନିଜ ନିଜ ଘରେ ଅକାଣ୍ଡିଆ ଚାଉଳର କ୍ଷୀରି ରାନ୍ଧିଥାନ୍ତି । ଏହି କ୍ଷୀରି 'ନବାନ୍ନ' ବା 'ନବାର୍ଣ୍ଣ' ନାମରେ ଜଣା । ଚାଷୀ ପ୍ରଥମ ଅମଳ ଧାନକୁ ଇଷ୍ଟଦେବୀଙ୍କୁ ଅର୍ପଣକରି ସେହି ପ୍ରସାଦ ନିଜେ ଗ୍ରହଣ କରିବା ସଙ୍ଗେସଙ୍ଗେ ଅନ୍ୟ ମାନଙ୍କୁ ପଂକ୍ତିଭୋଜନରେ ଆପ୍ୟାୟିତ କରିଥାନ୍ତି । ନୂଆଖାଇ କେବଳ ଧାର୍ମିକ ଉତ୍ସବ ନୁହେଁ, ଏହା ସାମ୍ପ୍ରଦାୟିକ ସମ୍ପର୍କ ବଢ଼ାଇବା ସହ ଏକତା ବଜାୟ ରଖିବାର ପ୍ରତୀକ ।",
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
            isoDate: "2025-08-09T00:00:00Z",
            festival: "ରକ୍ଷ୍ୟା ବନ୍ଧନ - Rakshya Bandhana",
            color: holidayColors[0]
        },
        {
            date: "୧୫-1",
            englishDate: 15,
            isoDate: "2025-08-15T00:00:00Z",
            festival: "ଶ୍ରୀକୃଷ୍ଣ ଜନ୍ମାଷ୍ଟମୀ - Janmastami",
            color: holidayColors[1]
        },
        {
            date: "୧୫-2",
            englishDate: 15,
            isoDate: "2025-08-15T00:00:00Z",
            festival: "ସ୍ୱାଧୀନତା ଦିବସ - Independence Day",
            color: holidayColors[2]
        },
        {
            date: "୨୭",
            englishDate: 27,
            isoDate: "2025-08-27T00:00:00Z",
            festival: "ଶ୍ରୀଗଣେଶ ଚତୁର୍ଥୀ - Ganesha Chaturthi",
            color: holidayColors[3]
        },
        {
            date: "୨୮",
            englishDate: 28,
            isoDate: "2025-08-28T00:00:00Z",
            festival: "ନୂଆଖାଇ - Nuakhai",
            color: holidayColors[0]
        },
        {
            date: "୦୪",
            englishDate: 4,
            isoDate: "2025-08-04T00:00:00Z",
            festival: "ଶ୍ରୀମନ୍ଦିରେ ଝୁଲଣ ଯାତ୍ରା ଆରମ୍ବ",
            color: holidayColors[4]
        },
        {
            date: "୦୫",
            englishDate: 5,
            isoDate: "2025-08-05T00:00:00Z",
            festival: "ପୁତ୍ରଦା ଏକାଦଶୀ, ପବିତ୍ରାଧିବାସ, ହଳନିଷେଧ",
            color: holidayColors[4]
        },
        {
            date: "୦୬",
            englishDate: 6,
            isoDate: "2025-08-06T00:00:00Z",
            festival: "ବିଷ୍ଣୁ ପବିତ୍ରାରୋପଣ",
            color: holidayColors[4]
        },
        {
            date: "୦୭",
            englishDate: 7,
            isoDate: "2025-08-07T00:00:00Z",
            festival: "ଶିବ ପବିତ୍ରାରୋପଣ ଚତୁର୍ଦ୍ଦଶୀ, ଶରଣ ଆରମ୍ଭ",
            color: holidayColors[4]
        },
        {
            date: "୦୮",
            englishDate: 8,
            isoDate: "2025-08-08T00:00:00Z",
            festival: "ପୂର୍ଣ୍ଣିମାର ଚନ୍ଦ୍ର ଆରମ୍ବ",
            color: holidayColors[4]
        },
        // {
        //     date: "୦୯",
        //     englishDate: 9,
        //     isoDate: "2025-08-09T00:00:00Z",
        //     festival: "ଗହ୍ମାପୂର୍ଣ୍ଣିମା, ଶ୍ରୀ ବଳଭଦ୍ର ଜନ୍ମ, ରାକ୍ଷୀବନ୍ଧନ",
        //     color: holidayColors[4]
        // },
        {
            date: "୧୦",
            englishDate: 10,
            isoDate: "2025-08-10T00:00:00Z",
            festival: "ଶ୍ରୀମନ୍ଦିରେ ଝୁଲଣ ଶେଷ",
            color: holidayColors[4]
        },
        {
            date: "୧୨",
            englishDate: 12,
            isoDate: "2025-08-12T00:00:00Z",
            festival: "ଅଙ୍ଗଭେଟ ତୃତୀୟା, ଶରଣ ଶେଷ",
            color: holidayColors[4]
        },
        {
            date: "୧୩",
            englishDate: 13,
            isoDate: "2025-08-13T00:00:00Z",
            festival: "ବୁଧିବାମନ ଓଷା, ଶ୍ରୀମନ୍ଦିରେ ରେଖାପଞ୍ଚମୀ ଓ ଗୃହିଣାଂରକ୍ଷା ପଞ୍ଚମୀ",
            color: holidayColors[4]
        },
        // {
        //     date: "୧୫",
        //     englishDate: 15,
        //     isoDate: "2025-08-15T00:00:00Z",
        //     festival: "ଶ୍ରୀକୃଷ୍ଣ ଜନ୍ମାଷ୍ଟମୀ, ୭୯ତମ ସ୍ୱାଧୀନତା ଦିବସ, ଶ୍ରୀ ଅରବିନ୍ଦଙ୍କ ଜୟନ୍ତୀ, ଶ୍ରୀ ଶ୍ରୀ ଆଦିତ୍ୟ ନାରାୟଣ ଦାସଙ୍କ ଜନ୍ମୋତ୍ସବ",
        //     color: holidayColors[4]
        // },
        {
            date: "୧୭",
            englishDate: 17,
            isoDate: "2025-08-17T00:00:00Z",
            festival: "ଖୁଦୁରୁକୁଣୀ ଓଷା, ସିଂହ ସଂକ୍ରାନ୍ତି ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4]
        },
        {
            date: "୧୯",
            englishDate: 19,
            isoDate: "2025-08-19T00:00:00Z",
            festival: "କାଳୀୟଦଳନ ଏକାଦଶୀ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4]
        },
        {
            date: "୨୧",
            englishDate: 21,
            isoDate: "2025-08-21T00:00:00Z",
            festival: "ଶିବଚତୁର୍ଦ୍ଦଶୀ ପୋବାସ ଓ ବେଢ଼ା",
            color: holidayColors[4]
        },
        {
            date: "୨୨",
            englishDate: 22,
            isoDate: "2025-08-22T00:00:00Z",
            festival: "ଗୃହାଣାଂ ସପ୍ତପୁରୀ ଭୋଗ, ଚନ୍ଦ୍ରକ୍ଷୟ ନିଶିପାଳନ ଓ ହଳ ନିଷେଧ",
            color: holidayColors[4]
        },
        {
            date: "୨୩",
            englishDate: 23,
            isoDate: "2025-08-23T00:00:00Z",
            festival: "ଅମାବାସ୍ୟା, ଶ୍ରୀ ମନ୍ଦିରେ ସପ୍ତପୁରୀ ଭୋଗ",
            color: holidayColors[4]
        },
        {
            date: "୨୪",
            englishDate: 24,
            isoDate: "2025-08-24T00:00:00Z",
            festival: "ଚନ୍ଦ୍ର ଦର୍ଶନ",
            color: holidayColors[4]
        },
        {
            date: "୨୬",
            englishDate: 26,
            isoDate: "2025-08-26T00:00:00Z",
            festival: "ବାଲିତୃତୀୟା, ଗୌରୀବ୍ରତ",
            color: holidayColors[4]
        },
        {
            date: "୨୯",
            englishDate: 29,
            isoDate: "2025-08-29T00:00:00Z",
            festival: "ଷଷ୍ଠୀ ଓଷା, ସୋମନାଥ ବ୍ରତାରମ୍ଭ",
            color: holidayColors[4]
        },
        {
            date: "୩୦",
            englishDate: 30,
            isoDate: "2025-08-30T00:00:00Z",
            festival: "ଲଳିତା ସପ୍ତମୀ, କୁକକୁଟି ବ୍ରତ",
            color: holidayColors[4]
        },
        {
            date: "୩୧",
            englishDate: 31,
            isoDate: "2025-08-31T00:00:00Z",
            festival: "ଶ୍ରୀରାଧାଷ୍ଟମୀ, ଦୁର୍ବାଷ୍ଟମୀ, ଶ୍ରୀ ଦୁର୍ଗାଦେବ୍ୟୋ ଶୟନୋତ୍ସବ",
            color: holidayColors[4]
        }
    ] as HolidayType[],


    subhadina: {
        bibaha: [1, 3, 6, 8, 10, 13, 15, 17],
        brataGhara: [1, 6, 10, 15],
    } as SubhadinaType,
    moonIcons: {
        1: 'ShuklaPakshaPratipada',
        6: 'ShuklaPakshaEkadashi',
        10: 'Purnima',
        24: 'Amavasya',
        29: 'KrishnaPakshaEkadashi',
    },
}; 