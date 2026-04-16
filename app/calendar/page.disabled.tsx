"use client";

import { useMemo, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { monthsData } from "@/data/months";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarPageDisabled() {
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
    if (!currentMonthData.holidays) return [];

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
    enter: (variantDirection: number) => ({
      x: variantDirection > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (variantDirection: number) => ({
      zIndex: 0,
      x: variantDirection < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const contentVariants = {
    enter: (variantDirection: number) => ({
      x: variantDirection > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (variantDirection: number) => ({
      x: variantDirection < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

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
        ease: [0.25, 0.1, 0.25, 1] as const,
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
        ease: [0.25, 0.1, 0.25, 1] as const,
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
        type: "spring" as const,
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
    enter: (variantDirection: number) => ({
      x: variantDirection > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (variantDirection: number) => ({
      x: variantDirection < 0 ? 300 : -300,
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
      <section className="relative min-h-[66vh] bg-[#b81d18] px-4 py-6 sm:px-8">
        <motion.div
          className="mb-8 flex items-center justify-between"
          variants={headerVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="flex items-center bg-[#CBA20E] px-3 py-2 text-xs text-black sm:px-4 sm:text-sm"
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
            src="/static/images/khimji-logo.png"
            alt="Khimji Logo"
            width={100}
            height={33}
            className="w-24 object-contain sm:w-32"
          />
        </motion.div>

        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentMonth.toISOString()}
            className="mx-auto mt-4 flex max-w-5xl flex-col justify-between sm:mt-8 lg:flex-row"
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
            <div className="mb-8 max-w-xl text-white lg:mb-0">
              <div className="mb-4 sm:mb-6">
                <h4 className="mb-2 text-xs font-light sm:text-sm">
                  {currentMonthData.name}
                </h4>
                <div className="flex items-center">
                  <div className="flex items-end text-xl sm:text-2xl">
                    <span className="mr-2 font-odia text-2xl font-bold sm:text-3xl">
                      {currentMonthData.odia.first}
                    </span>
                    <span className="mb-2 mr-1 inline-block h-2 w-2 rounded-full bg-white" />
                    <span className="font-odia text-2xl font-bold sm:text-3xl">
                      {currentMonthData.odia.second}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="font-odia text-xs leading-relaxed text-white/80 sm:text-sm">
                  ପ୍ରାରମ୍ଭ ତିଥି: {currentMonthData.dates.start}
                </span>
                <span className="font-odia text-xs leading-relaxed text-white/80 sm:text-sm">
                  ଶେଷ ତିଥି: {currentMonthData.dates.end}
                </span>
              </div>

              <h3 className="mb-2 font-odia text-xl font-bold text-[#C5A265] sm:text-2xl">
                {currentMonthData.festival.name}
              </h3>
              <p className="mb-8 font-odia text-xs leading-relaxed text-white/80 sm:text-sm">
                {currentMonthData.festival.description}
              </p>
            </div>

            <motion.div
              className="relative mx-auto h-48 w-64 sm:h-64 sm:w-84 lg:mx-0"
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
                className="h-full w-full object-contain"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="relative flex min-h-screen flex-col bg-white lg:flex-row">
        <motion.div
          className="w-full border-b border-gray-200 lg:w-2/3 lg:border-b-0 lg:border-r"
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
                  defaultMonth={currentMonth}
                  month={currentMonth}
                  className="w-full"
                  moonIcons={currentMonthData.moonIcons}
                  startMonth={new Date(2025, 0)}
                  endMonth={new Date(2025, 11)}
                />
              </motion.div>
            </AnimatePresence>

            <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 transform justify-center gap-2 sm:bottom-8 sm:gap-4">
              <button
                onClick={handlePreviousMonth}
                disabled={isPreviousDisabled}
                className={`px-4 py-2 text-sm text-white shadow-lg transition-all duration-200 sm:px-6 sm:py-3 ${
                  isPreviousDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "hover:scale-105 hover:bg-[#B39154] hover:shadow-xl"
                } bg-[#CBA20E]`}
                style={{
                  fontFamily: "Archivo, sans-serif",
                  textTransform: "uppercase",
                }}
              >
                Previous
              </button>
              <button
                onClick={handleCurrentMonth}
                className="bg-[#CBA20E] px-4 py-2 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#B39154] sm:px-6 sm:py-3"
                style={{
                  fontFamily: "Archivo, sans-serif",
                  textTransform: "uppercase",
                }}
              >
                <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={handleNextMonth}
                disabled={isNextDisabled}
                className={`px-4 py-2 text-sm text-white shadow-lg transition-all duration-200 sm:px-6 sm:py-3 ${
                  isNextDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "hover:scale-105 hover:bg-[#B39154]"
                } bg-[#CBA20E]`}
                style={{
                  fontFamily: "Archivo, sans-serif",
                  textTransform: "uppercase",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentMonth.toISOString()}
            className="w-full p-4 sm:p-8 lg:w-1/3"
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
              <motion.div className="relative h-12 w-32">
                <Image
                  src="/images/subhadina.png"
                  alt="Subhadina Background"
                  fill
                  className="object-contain"
                />
                <motion.h3
                  className="absolute inset-0 flex items-center justify-center font-odia text-lg font-bold text-white sm:text-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  ଛୁଟିଦିନ
                </motion.h3>
              </motion.div>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              >
                {currentMonthHolidays.map((holiday, index) => (
                  <motion.div
                    key={`${holiday.date}-${holiday.festival}`}
                    className="mb-2 flex items-center gap-2"
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
                      className="text-xs text-black sm:text-sm"
                      style={{ color: holiday.color }}
                    >
                      {holiday.date.split("-")[0]}
                    </span>
                    <span
                      className="font-odia text-xs text-black sm:text-sm"
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
              <motion.div className="relative h-12 w-32">
                <Image
                  src="/images/subhadina.png"
                  alt="Subhadina Background"
                  fill
                  className="object-contain"
                />
                <motion.h3
                  className="absolute inset-0 flex items-center justify-center font-odia text-lg font-bold text-white sm:text-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  ଶୁଭଦିନ
                </motion.h3>
              </motion.div>
              <motion.div
                className="space-y-2 sm:space-y-2"
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                <motion.div variants={listItemVariants}>
                  <p className="font-odia text-sm text-base text-khimji-red text-gray-600 sm:text-lg">
                    ବିବାହ: {currentMonthData.subhadina.bibaha.join(", ")}
                  </p>
                </motion.div>
                <motion.div variants={listItemVariants}>
                  <p className="font-odia text-sm text-base text-khimji-red text-gray-600 sm:text-lg">
                    ବ୍ରତଘର: {currentMonthData.subhadina.brataGhara.join(", ")}
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
