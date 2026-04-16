import Image from "next/image";

import { archivo } from "./fonts";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-khimji-red">
      <div className="absolute left-4 top-4 z-10 sm:left-8 sm:top-8">
        <Image
          src="/static/images/khimji-logo.png"
          alt="Khimji Jewellers"
          width={150}
          height={60}
          priority
          className="h-auto w-28 sm:w-36"
        />
      </div>

      <div className="absolute right-0 top-0 opacity-80 sm:opacity-100">
        <Image
          src="/static/images/Pattern.png"
          alt="Decorative Pattern"
          width={400}
          height={400}
          priority
          className="h-auto w-40 sm:w-64 lg:w-80"
        />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center px-6 py-16 text-center sm:px-8 sm:py-20">
        <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[540px]">
          <Image
            src="/static/images/Illustration.png"
            alt="Khimji Aabartana illustration"
            width={540}
            height={540}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
          <p
            className={`${archivo.className} text-xs uppercase tracking-[0.5em] text-white/80 sm:text-sm`}
          >
            Khimji Aabartana
          </p>
          <h1
            className={`${archivo.className} text-3xl font-semibold uppercase tracking-[0.12em] text-white sm:text-5xl lg:text-6xl`}
          >
            2026-27
          </h1>
          <p
            className={`${archivo.className} text-base uppercase tracking-[0.45em] text-white sm:text-xl lg:text-2xl lg:tracking-[0.7em]`}
          >
            Coming Soon
          </p>
        </div>
      </div>
    </main>
  );
}
