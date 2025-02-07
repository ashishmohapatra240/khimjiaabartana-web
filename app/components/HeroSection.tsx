import Image from "next/image";
import { archivo, notoSansOriya } from "../fonts";

export default function HeroSection() {
  return (
    <section className="md:bg-[#aa030e] bg-[#b81d18] md:h-screen px-6 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-4 flex flex-col items-start justify-start">
      {/* Logos Section */}
      <div className="flex items-center justify-start gap-6 sm:gap-8 mb-4 sm:mb-4">
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
      <div className="max-w-2xl lg:max-w-3xl text-left space-y-2 sm:space-y-2">
        {/* Odia Content */}
        <p
          className={`${notoSansOriya.className} text-khimji-gold text-xs sm:text-sm lg:text-base`}
        >
          ଜାନିଜାତ, ବାର ମାସରେ ତେର ପର୍ବ ହେଉଛି ଆମ ଓଡ଼ିଆ ସଂସ୍କୃତି ଏବଂ ଓଡ଼ିଆତ୍ୱର ମାନକ ।
          ଏହି ତିଥି ବାରର ବାହକ ଆମ ଓଡ଼ିଆ ପଞ୍ଜିକା ବା ପାଞ୍ଜି । ସମୟର ଚିତ୍ରପଟରେ ଆମ
          ତିଥି ବାରର ମହତ୍ୱର ରଙ୍ଗ ଧିରେ ଧିରେ ଲିଭି ଯାଉଥିବା ସମୟରେ, ଓଡ଼ିଆ ପଞ୍ଜିକାକୁ ଏକ
          ଆଧୁନିକ ରୂପ ଦେଇ, ନୂତନ ପିଢ଼ିଙ୍କୁ ଅବଗତ କରାଇବା ଏବଂ ଆମ ଗୌରବମୟ ପରମ୍ପରାକୁ
          ବଞ୍ଚାଇ ରଖିବା ପାଇଁ &apos;ଖିମଜୀ&apos; ପରିବାର ତରଫରୁ ଏକ କ୍ଷୁଦ୍ର ପ୍ରୟାସ ହେଉଛି &apos;ଆବର୍ତ୍ତନ&apos; ।
          <br />
          <br />
          &apos;ଆବର୍ତ୍ତନ&apos; ଅର୍ଥାତ ଏକ କେନ୍ଦ୍ରୀୟ ଘୂର୍ଣ୍ଣନ ଗତି ଏବଂ ସମୟର ଚିରସ୍ଥାୟୀ ଚକ୍ରର
          ଏକ ପ୍ରତୀକ । ପ୍ରତ୍ୟେକ ଦିନ, ସପ୍ତାହ ଏବଂ ମାସ ଏକ ଆବର୍ତ୍ତନ ଗତିରେ ଘୂରିବୁଲୁଛି,
          ଯାହା ଜୀବନର ନିରନ୍ତର ଗତିକୁ ପ୍ରତିଫଳିତ କରେ । ପରିବର୍ତ୍ତନ, ନବୀକରଣ ଏବଂ
          ନିରନ୍ତରତା ଜୀବନର ଏକ ସାର ।
        </p>
        <br />
        {/* English Content */}
        <p className="font-archivoExpanded text-khimji-gold text-xs sm:text-sm lg:text-base">
          Rituals and the tradition of &quot;13 festivals in twelve months&quot; capture the heart of Odia culture and identity, with the Odia Panji (astronomical almanac/calendar) acting as the keeper of these cherished customs. As time passes and the significance of these dates fades, the Khimji Group takes a humble step forward, in the form of &apos;Aabartana&apos;, to preserve our glorious heritage by adapting the traditional Odia Panji to the sensibilities of the current generation.
          <br />
          <br />
        </p>
      </div>

      {/* Button Section */}
      <a
        href="/calendar"
        className={`${archivo.className} mt-4 sm:mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#CBA20E] text-khimji-red font-medium text-xs sm:text-sm md:text-base uppercase hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap`}
      >
        Explore Khimji Aabartana 2025
      </a>
    </section>
  );
}