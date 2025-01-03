"use client";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { useState, useMemo } from "react";
import { monthsData } from "@/data/months";

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2025, 0));

  const handlePreviousMonth = () => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1
    );
    if (newDate.getFullYear() >= 2025) {
      setCurrentMonth(newDate);
    }
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1
    );
    if (newDate.getFullYear() <= 2025) {
      setCurrentMonth(newDate);
    }
  };

  const handleCurrentMonth = () => {
    setCurrentMonth(new Date(2025, 0));
  };

  const currentMonthData = monthsData[currentMonth.getMonth() + 1];
  const isPreviousDisabled =
    currentMonth.getFullYear() <= 2025 && currentMonth.getMonth() === 0;
  const isNextDisabled =
    currentMonth.getFullYear() >= 2025 && currentMonth.getMonth() === 11;

  const currentMonthHolidays = useMemo(() => {
    if (!currentMonth || !currentMonthData.holidays) return [];

    return currentMonthData.holidays.filter((holiday) => {
      if (!holiday.isoDate) {
        return false;
      }

      const holidayDate = new Date(holiday.isoDate);
      return (
        holidayDate.getMonth() === currentMonth.getMonth() &&
        holidayDate.getFullYear() === currentMonth.getFullYear() &&
        holidayDate.getFullYear() === 2025
      );
    });
  }, [currentMonth, currentMonthData.holidays]);

  return (
    <main className="min-h-screen">
      <section className="h-[66vh] bg-[#aa030e] relative px-8 py-6">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="bg-[#CBA20E] text-black px-4 py-2 rounded-full text-sm"
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
          <div className="text-white max-w-xl">
            <div className="mb-6">
              <h4 className="text-sm font-light mb-2">
                {currentMonthData.name}
              </h4>
              <div className="flex items-center">
                <div className="text-2xl">
                  <span className="mr-2 font-bold text-3xl font-NotoSansOriya">
                    {currentMonthData.odia.first}
                  </span>
                  <span className="font-bold text-3xl font-NotoSansOriya">
                    {currentMonthData.odia.second}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-white/80 leading-relaxed">
                ପ୍ରାରମ୍ଭ ତିଥି: {currentMonthData.dates.start}
              </span>
              <span className="text-sm text-white/80 leading-relaxed">
                ଶେଷ ତିଥି: {currentMonthData.dates.end}
              </span>
            </div>

            <h3 className="text-[#C5A265] text-2xl">
              {currentMonthData.festival.name}
            </h3>
            <p className="text-white/80 leading-relaxed text-sm">
              {currentMonthData.festival.description}
            </p>
          </div>

          {/* Illustration */}
          <div className="relative w-84 h-64">
            <Image
              src={`/images/months/${currentMonthData.name.toLowerCase()}.png`}
              alt={`${currentMonthData.name} Illustration`}
              width={350}
              height={350}
            />
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="flex min-h-screen bg-white">
        <div className="w-2/3 border-r border-gray-200">
          <div className="p-8">
            <Calendar
              dateDetails={currentMonthData.dateDetails.map((date) => ({
                date: date.date,
                significance: date.significance.includes(":")
                  ? date.significance.split(":")[1].trim()
                  : date.significance,
              }))}
              holidays={currentMonthHolidays}
              mode="default"
              defaultMonth={currentMonth}
              month={currentMonth}
              selected={new Date()}
              className="w-full"
              moonIcons={currentMonthData.moonIcons}
              fromYear={2025}
              toYear={2025}
            />
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePreviousMonth}
                disabled={isPreviousDisabled}
                className={`px-6 py-2 bg-[#CBA20E] text-white rounded-md ${
                  isPreviousDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#B39154]"
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNextMonth}
                disabled={isNextDisabled}
                className={`px-6 py-2 bg-[#CBA20E] text-white rounded-md ${
                  isNextDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#B39154]"
                }`}
              >
                Next
              </button>
              <button
                onClick={handleCurrentMonth}
                className="px-6 py-2 bg-[#CBA20E] text-white rounded-md hover:bg-[#B39154]"
              >
                <CalendarIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Holidays & Subhadina section */}
        <div className="w-1/3 p-8">
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 font-NotoSansOriya text-black">
              ଛୁଟିଦିନ
            </h3>
            <div>
              {currentMonthHolidays.map((holiday) => (
                <div key={holiday.date} className="flex items-center gap-2 ">
                  <span
                    className="text-sm text-black"
                    style={{ color: holiday.color }}
                  >
                    {holiday.date}
                  </span>
                  <span
                    className="font-NotoSansOriya text-sm text-black"
                    style={{ color: holiday.color }}
                  >
                    {holiday.festival}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 font-NotoSansOriya text-black">
              ଶୁଭଦିନ
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-NotoSansOriya text-lg mb-3 text-black">
                  ବିବାହ
                </h4>
                <p className="text-gray-600">
                  {currentMonthData.subhadina.bibaha.join(", ")}
                </p>
              </div>
              <div>
                <h4 className="font-NotoSansOriya text-lg mb-3 text-black">
                  ବ୍ରତ ଗୃହ
                </h4>
                <p className="text-gray-600">
                  {currentMonthData.subhadina.brataGhara.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
