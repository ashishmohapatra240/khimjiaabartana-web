import Image from "next/image";
import { archivo, notoSansOriya } from "../fonts";

export default function HeroSection() {
  return (
    <section className="md:bg-[#aa030e] bg-[#b81d18] md:h-screen px-6 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-4 flex flex-col items-start justify-start">
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
      <div className="max-w-2xl lg:max-w-3xl text-left space-y-2 sm:space-y-2">
        <p
          className={`${notoSansOriya.className} text-khimji-gold text-xs sm:text-sm lg:text-base`}
        >
          ଜାନିଜାତ, ବାର ମାସରେ ତେର ପର୍ବ ହେଉଛି ଆମ ଓଡ଼ିଆ ସଂସ୍କୃତି ଏବଂ ଓଡ଼ିଆତ୍ୱର ମାନକ ।
          ଏହି ତିଥି ବାରର ବାହକ ଆମ ଓଡ଼ିଆ ପଞ୍ଜିକା ବା ପାଞ୍ଜି । ସମୟର ଚିତ୍ରପଟରେ ଆମ
          ତିଥି ବାରର ମହତ୍ୱର ରଙ୍ଗ ଧିରେ ଧିରେ ଲିଭି ଯାଉଥିବା ସମୟରେ, ଓଡ଼ିଆ ପଞ୍ଜିକାକୁ ଏକ
          ଆଧୁନିକ ରୂପ ଦେଇ, ନୂତନ ପିଢ଼ିଙ୍କୁ ଅବଗତ କରାଇବା ଏବଂ ଆମ ଗୌରବମୟ ପରମ୍ପରାକୁ
          ବଞ୍ଚାଇ ରଖିବା ପାଇଁ 'ଖିମଜୀ' ପରିବାର ତରଫରୁ ଏକ କ୍ଷୁଦ୍ର ପ୍ରୟାସ ହେଉଛି ‘ଆବର୍ତ୍ତନ’ ।
          <br />
          <br />
        </p>
      </div>

      {/* Button Section */}
      <a
        href="/calendar"
        className={`${archivo.className} mt-8 sm:mt-12 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#CBA20E] text-khimji-red font-medium text-xs sm:text-sm md:text-base uppercase hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap`}
      >
        Explore Khimji Aabartana 2025
      </a>
    </section>
  );
}