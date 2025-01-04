import Image from "next/image";
import { archivo, notoSansOriya } from "../fonts";

export default function HeroSection() {
  return (
    <section className="bg-[#aa030e] h-screen px-6 sm:px-8 md:px-12 lg:px-16 py-8 flex flex-col items-start justify-start">
      {/* Logos Section */}
      <div className="flex items-center justify-start gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div className="relative w-32 sm:w-40 h-20 sm:h-24">
          <Image
            src="https://raw.githubusercontent.com/ashishmohapatra240/khimjiaabartana-web/khimji-main/public/static/images/khimji-logo.png"
            alt="Khimji Logo"
            fill
            className="object-contain"
            quality={100}
          />
        </div>
        <div className="relative w-32 sm:w-40 lg:w-32 h-36 sm:h-48">
          <Image
            src="/images/abartana.png"
            alt="Abartana Logo"
            fill
            className="object-contain"
            quality={100}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-2xl lg:max-w-3xl text-left space-y-4 sm:space-y-2">
        <p
          className={`${notoSansOriya.className} text-khimji-gold text-base sm:text-lg lg:text-xl`}
        >
          ରୀତିନୀତି, ବାର ମାସରେ ତେରଉ ପର୍ବ ହେଉଛି ଆମ ଓଡ଼ିଆ ସଂସ୍କୃତି ଏବଂ ଓଡ଼ିଆର ମାନକ।
          ଏହି ଚିରାନ୍ବିତ ପାରମ୍ପରିକ ତାଲିକାକୁ ଆଜି ଓଡ଼ିଆ ଜୀବନ ଦା ଭାଗ ଭାବରେ ପାଇବା ଏକ
          ଅଭିଜ୍ଞତା। ସମୟର ଚିତ୍ରପଟରେ ଆମ ଚିରା ମାନବତା ଚକ୍ର ଏକ ଅତୁଳନୀୟ ସମ୍ପଦ ହେଉଛି
          ଯାହା ପାରମ୍ପରିକ ଏବଂ ଆଧୁନିକତାର ମିଶ୍ରଣରେ ଜୀବନର ଗତିଶୀଳତାକୁ ମଧ୍ୟ ପ୍ରଦର୍ଶନ
          କରେ।
        </p>
        <p className="font-archivoExpanded text-khimji-gold text-base sm:text-lg lg:text-xl">
          Rituals and the tradition of &quot;13 festivals in twelve months&quot;
          capture the heart of Odia culture and identity, with the Odia Panji
          (astronomical almanac/calendar) acting as the keeper of these
          cherished customs. &apos;Aabartana&apos; reflects the essence of change,
          renewal, and continuity in life while preserving our glorious
          heritage.
        </p>
      </div>

      {/* Button Section */}
      <a
        href="/calendar"
        className={`${archivo.className} mt-12 sm:mt-16 px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-[#CBA20E] text-khimji-red font-medium text-sm sm:text-base md:text-lg uppercase hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap`}
      >
        Explore Khimji Aabartana 2025
      </a>
    </section>
  );
}
