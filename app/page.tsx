import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-khimji-red overflow-hidden flex flex-col items-center justify-center">
      {/* Logo - Top Left */}
      <div className="absolute top-8 left-8 z-10">
        <Image
          src="https://cdn.jsdelivr.net/gh/ashishmohapatra240/khimjiaabartana-web/public/static/images/khimji-logo.png"
          alt="Khimji Jewellers"
          width={150}
          height={60}
          priority
        />
      </div>

      {/* Pattern - Top Right */}
      <div className="absolute top-0 right-0">
        <Image
          src="https://cdn.jsdelivr.net/gh/ashishmohapatra240/khimjiaabartana-web/public/static/images/Pattern.png"
          alt="Decorative Pattern"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center">
        {/* Main Illustration */}
        <div className="relative w-full max-w-2xl mx-auto px-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/ashishmohapatra240/khimjiaabartana-web/public/static/images/Illustration.png"
            alt="Khimji Illustration"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>

        {/* Coming Soon Text */}
        <div className="mt-10">
          <span className="text-white text-2xl font-normal tracking-[.90em]">
            COMING SOON
          </span>
        </div>
      </div>
    </div>
  );
}
