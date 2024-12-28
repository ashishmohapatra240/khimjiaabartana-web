import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import Link from "next/link";
// import { CalendarIcon } from "@/components/icons/calendar-icon";
import { januaryData } from "@/data/january";
import { CalendarIcon } from "lucide-react";

export default function CalendarPage() {
  return (
    <main className="min-h-screen">
      {/* Top Section - Red Background */}
      <section className="h-[66vh] bg-[#B3313A] relative px-8 py-6">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="bg-[#C5A265] text-black px-4 py-2 rounded-full text-sm"
          >
            HOME
          </Link>
          <Image
            src="/images/khimji-logo.png"
            alt="Khimji Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="flex justify-between mt-8 mx-auto max-w-5xl">
          {/* Text Content */}
          <div className="text-white max-w-xl">
            <div className="mb-6">
              <h4 className="text-sm font-light mb-2">JANUARY</h4>
              <div className="flex items-center">
                <div className="text-2xl">
                  <span className="mr-2 font-bold text-3xl font-NotoSansOriya">
                    ପୌଷ
                  </span>
                  <span className="font-bold text-3xl font-NotoSansOriya">
                    ମାଘ
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-white/80 leading-relaxed">
                ପ୍ରାରମ୍ଭ ତିଥି: ୧୬ ଜାନୁଆରୀ
              </span>
              <span className="text-sm text-white/80 leading-relaxed">
                ଶେଷ ତିଥି: ୧୪ ଫେବ୍ରୁଆରୀ
              </span>
            </div>

            <h3 className="text-[#C5A265] text-2xl">ଶାମ୍ବ ଦଶମୀ</h3>
            <p className="text-white/80 leading-relaxed text-sm">
            ଶାମ୍ବ ଦଶମୀ - ଶାମ୍ବ ଦଶମୀ ହେଉଛି ଓଡ଼ିଶାର ଏକ ପବିତ୍ର ଦିନ ଏବଂ ସୂର୍ଯ୍ୟପୂଜାର ପର୍ବ । ପ୍ରତ୍ୟେକ ବର୍ଷ ପୌଷ ମାସ ଶୁକ୍ଲ ପକ୍ଷ ଦଶମୀ ତିଥିରେ ଏହା ପାଳନ କରାଯାଏ । ମା&rsquo; ମାନେ ନିଜ ସନ୍ତାନସନ୍ତତିଙ୍କ ମଙ୍ଗଳ କାମନା କରି ଏହି ପର୍ବ ପାଳନ କରନ୍ତି । ଏହାର ବିଶେଷତ୍ୱ ହେଉଛି ସୂର୍ଯ୍ୟଙ୍କର ତିନି ସ୍ଥିତିକୁ ଲକ୍ଷ୍ୟ କରି ଘରେ ତିନି ପ୍ରକାର ଧୂପ ବା ପୂଜା କରାଯାଏ । ଅରୁଣୋଦୟ ସମୟରେ ପ୍ରଥମ ଧୂପ ହୁଏ । ମଧ୍ୟାହ୍ନରେ ମଧ୍ୟାହ୍ନ ସୂର୍ଯ୍ୟ ତେଜୋଦୀପ୍ତ ଭାସ୍କରଙ୍କୁ ଦ୍ୱିତୀୟ ଧୂପ ଦିଆଯାଏ । ତୃତୀୟ ବା ଶେଷଧୂପ ହେଉଛି ସନ୍ଧ୍ୟା ସମୟର ଅସ୍ତାଚଳଗାମୀ ସୂର୍ଯ୍ୟଦେବଙ୍କ ପାଇଁ । ଏହି ଧୂପରେ ପିଠା, କାକରା ଆଦି ନୈବେଦ୍ୟ ଅର୍ପଣ କରାଯାଇଥାଏ ।
            </p>
          </div>

          {/* Illustration */}
          <div className="relative w-84 h-84">
            <Image
              src="/images/months/january.png"
              alt="January Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="flex min-h-screen bg-white">
        {/* Calendar */}
        <div className="w-2/3 border-r border-gray-200">
          <div className="p-8">
            <Calendar
              dateDetails={januaryData.dateDetails}
              holidays={januaryData.holidays}
              mode="default"
              defaultMonth={new Date(2024, 0)}
              selected={new Date()}
              className="w-full"
              moonIcons={januaryData.moonIcons}
            />
            <div className="flex justify-center gap-4 mt-8">
              <button className="px-6 py-2 bg-[#C5A265] text-white rounded-md hover:bg-[#B39154]">
                Previous
              </button>
              <button className="px-6 py-2 bg-[#C5A265] text-white rounded-md hover:bg-[#B39154]">
                Next
              </button>
              <button className="px-6 py-2 bg-[#C5A265] text-white rounded-md hover:bg-[#B39154]">
                <CalendarIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-200" />

        {/* Holidays & Subhadina */}
        <div className="w-1/3 p-8">
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 font-NotoSansOriya text-black">ଛୁଟିଦିନ</h3>
            <div>
              {januaryData.holidays.map((holiday) => (
                <div
                  key={holiday.date}
                  className="flex items-center gap-2"
                >
                  <span className="text-sm" style={{ color: holiday.color }}>
                    {holiday.date}
                  </span>
                  <span className="font-NotoSansOriya text-sm" style={{ color: holiday.color }}>
                    {holiday.festival}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 font-NotoSansOriya">ଶୁଭଦିନ</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-NotoSansOriya text-lg mb-3 text-black">ବିବାହ</h4>
                <p className="text-gray-600">{januaryData.subhadina.bibaha.join(", ")}</p>
              </div>
              <div>
                <h4 className="font-NotoSansOriya text-lg mb-3 text-black">ବ୍ରତ ଗୃହ</h4>
                <p className="text-gray-600">{januaryData.subhadina.brataGhara.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
