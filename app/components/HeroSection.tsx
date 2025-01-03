import Image from "next/image";
import { archivo, notoSansOriya } from "../fonts";

export default function HeroSection() {
  return (
    <section className="bg-[#aa030e] h-screen px-6 sm:px-8 md:px-12 lg:px-16 py-8 flex flex-col items-start justify-start">
      {/* Logos Section */}
      <div className="flex items-center justify-start gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div className="relative w-32 sm:w-40 h-20 sm:h-24">
          <Image
            src="/images/khimji-logo.png"
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
          ଖିମଜି ଜୁଏଲର୍ସ, ୧୯୩୬ ରେ ପ୍ରତିଷ୍ଠିତ, ଓଡ଼ିଶାର ଅଗ୍ରଣୀ ଜୁଏଲରି ହାଉସ୍ ଯାହା
          ଏହାର ଅତି ସୁନ୍ଦର କାରିଗରୀ ଏବଂ ଚିରନ୍ତନ ଡିଜାଇନ୍ ପାଇଁ ପରିଚିତ। ଆଠ ଦଶନ୍ଧିରୁ
          ଅଧିକ ସମୟର ଐତିହ୍ୟ ସହିତ, ଆମେ ପରମ୍ପରା ଏବଂ ନବୀକରଣକୁ ପାଳନ କରୁଥିବା
          ମାଷ୍ଟରପିସ୍ ସୃଷ୍ଟି କରିବା ଜାରି ରଖିଛୁ।
        </p>
        <p className="font-archivoExpanded text-khimji-gold text-base sm:text-lg lg:text-xl">
          Khimji Jewellers, established in 1936, is Odisha&apos;s premier
          jewelry house known for its exquisite craftsmanship and timeless
          designs. With a legacy spanning over eight decades, we continue to
          create masterpieces that celebrate tradition and innovation.
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
