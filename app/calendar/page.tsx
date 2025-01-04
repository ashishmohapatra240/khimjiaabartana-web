"use client";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { useState, useMemo } from "react";
import { monthsData } from "@/data/months";
import { motion, AnimatePresence } from "framer-motion";

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2025, 0));
  const [direction, setDirection] = useState(0);

  const handlePreviousMonth = () => {
    setDirection(-1);
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1
    );
    if (newDate.getFullYear() >= 2025) {
      setCurrentMonth(newDate);
    }
  };

  const handleNextMonth = () => {
    setDirection(1);
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1
    );
    if (newDate.getFullYear() <= 2025) {
      setCurrentMonth(newDate);
    }
  };

  const handleCurrentMonth = () => {
    setDirection(0);
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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const contentVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  // Add animation variants for different sections
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.95,
    },
  };

  const headerVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const illustrationVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotate: 5,
    },
  };

  const sidebarVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const listItemVariants = {
    initial: {
      opacity: 0,
      x: -20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      scale: 0.95,
    },
  };

  return (
    <main className="min-h-screen">
      <section className="min-h-[66vh] bg-[#b81d18] relative px-4 sm:px-8 py-6">
        {/* Navigation */}
        <motion.div
          className="flex justify-between items-center mb-8"
          variants={headerVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="bg-[#CBA20E] text-black px-3 sm:px-4 py-2 text-xs sm:text-sm flex items-center"
          >
            <svg
              height="20"
              width="20"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
            </svg>
            HOME
          </Link>
          <Image
            src="https://raw.githubusercontent.com/ashishmohapatra240/khimjiaabartana-web/khimji-main/public/static/images/khimji-logo.png"
            alt="Khimji Logo"
            width={100}
            height={33}
            className="object-contain w-24 sm:w-32"
          />
        </motion.div>

        {/* Content Container */}
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentMonth.toISOString()}
            className="flex flex-col lg:flex-row justify-between mt-4 sm:mt-8 mx-auto max-w-5xl"
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 0.3 },
            }}
          >
            <div className="text-white max-w-xl mb-8 lg:mb-0">
              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-light mb-2">
                  {currentMonthData.name}
                </h4>
                <div className="flex items-center">
                  <div className="text-xl sm:text-2xl">
                    <span className="mr-2 font-bold text-2xl sm:text-3xl font-NotoSansOriya">
                      {currentMonthData.odia.first}
                    </span>
                    <span className="font-bold text-2xl sm:text-3xl font-NotoSansOriya">
                      {currentMonthData.odia.second}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <span className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  ପ୍ରାରମ୍ଭ ତିଥି: {currentMonthData.dates.start}
                </span>
                <span className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  ଶେଷ ତିଥି: {currentMonthData.dates.end}
                </span>
              </div>

              <h3 className="text-[#C5A265] text-xl sm:text-2xl">
                {currentMonthData.festival.name}
              </h3>
              <p className="text-white/80 leading-relaxed text-xs sm:text-sm">
                {currentMonthData.festival.description}
              </p>
            </div>

            {/* Illustration */}
            <motion.div
              className="relative w-64 h-48 sm:w-84 sm:h-64 mx-auto lg:mx-0"
              variants={illustrationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Image
                src={`/images/months/${currentMonthData.name.toLowerCase()}.png`}
                alt={`${currentMonthData.name} Illustration`}
                width={280}
                height={280}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Calendar Section */}
      <section className="flex flex-col lg:flex-row min-h-screen bg-white relative">
        <motion.div
          className="w-full lg:w-2/3 border-b lg:border-b-0 lg:border-r border-gray-200"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="p-4 sm:p-8">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentMonth.toISOString()}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
              >
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
              </motion.div>
            </AnimatePresence>

            <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 sm:gap-4 z-50">
              <button
                onClick={handlePreviousMonth}
                disabled={isPreviousDisabled}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm bg-[#CBA20E] text-white shadow-lg transition-all duration-200 ${isPreviousDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#B39154] hover:scale-105 hover:shadow-xl"}`}
                style={{ fontFamily: 'Archivo, sans-serif', textTransform: 'uppercase' }}
              >
                Previous
              </button>
              <button
                onClick={handleCurrentMonth}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[#CBA20E] text-white shadow-lg transition-all duration-200 hover:bg-[#B39154] hover:scale-105"
                style={{ fontFamily: 'Archivo, sans-serif', textTransform: 'uppercase' }}
              >
                <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleNextMonth}
                disabled={isNextDisabled}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm bg-[#CBA20E] text-white shadow-lg transition-all duration-200 ${isNextDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#B39154] hover:scale-105"}`}
                style={{ fontFamily: 'Archivo, sans-serif', textTransform: 'uppercase' }}
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>

        {/* Holidays & Subhadina section */}
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentMonth.toISOString()}
            className="w-full lg:w-1/3 p-4 sm:p-8"
            custom={direction}
            variants={sidebarVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 16,
              mass: 1,
            }}
          >
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3
                className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 font-NotoSansOriya text-[#221F20]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                ଛୁଟିଦିନ
              </motion.h3>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              >
                {currentMonthHolidays.map((holiday, index) => (
                  <motion.div
                    key={`${holiday.date}-${holiday.festival}`}
                    className="flex items-center gap-2 mb-2"
                    variants={listItemVariants}
                    custom={index}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                  >
                    <span
                      className="text-xs sm:text-sm text-black"
                      style={{ color: holiday.color }}
                    >
                      {holiday.date.split("-")[0]}
                    </span>
                    <span
                      className="font-NotoSansOriya text-xs sm:text-sm text-black"
                      style={{ color: holiday.color }}
                    >
                      {holiday.festival}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.h3
                className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 font-NotoSansOriya text-[#221F20]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                ଶୁଭଦିନ
              </motion.h3>
              <motion.div
                className="space-y-2 sm:space-y-2"
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                <motion.div variants={listItemVariants}>
                  <p className="font-NotoSansOriya text-base sm:text-lg text-gray-600 text-sm text-[#aa030e]">
                    ବିବାହ: {currentMonthData.subhadina.bibaha.join(", ")}
                  </p>
                </motion.div>
                <motion.div variants={listItemVariants}>
                  <p className="font-NotoSansOriya text-base sm:text-lg text-gray-600 text-sm text-[#aa030e]">
                    ବ୍ରତ ଗୃହ: {currentMonthData.subhadina.brataGhara.join(", ")}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}
