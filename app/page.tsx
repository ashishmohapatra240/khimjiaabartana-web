import Image from "next/image";

import { archivo } from "./fonts";
import { Button } from "@/components/ui/button";

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
          <Button
            asChild
            size="lg"
            className={`${archivo.className} mt-2 rounded-none bg-[#cca032] px-6 text-xs font-semibold uppercase tracking-[0.3em] text-khimji-red shadow-lg transition-transform hover:bg-[#cca032]/90 sm:px-8 sm:text-sm`}
          >
            <a
              href="/static/Aabartana%202026-27.pdf"
              download="Aabartana 2026-27.pdf"
            >
              Download Calendar
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
