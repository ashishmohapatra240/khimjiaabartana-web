"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn, formatDateWithLeadingZero } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { DateDetailsType, HolidayType } from "@/types/calendar";
import Image from "next/image";
import { moonData, MoonType } from "@/data/moon";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  dateDetails?: DateDetailsType[];
  holidays?: HolidayType[];
  moonIcons?: Record<number, string>;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  dateDetails,
  holidays = [],
  moonIcons,
  ...props
}: CalendarProps) {
  const currentMonth = props.month as Date;

  const currentMonthHolidays = React.useMemo(() => {
    if (!currentMonth || !holidays) return [];
    return holidays.filter((holiday) => {
      const holidayDate = new Date(holiday.isoDate);
      return (
        holidayDate.getMonth() === currentMonth.getMonth() &&
        holidayDate.getFullYear() === currentMonth.getFullYear()
      );
    });
  }, [currentMonth, holidays]);

  const renderDateDetails = (date: number, details?: DateDetailsType) => {
    if (!details) return null;

    const holiday = currentMonthHolidays.find((h) => h.englishDate === date);

    return (
      <div
        className="text-[8px] sm:text-[10px] leading-tight mt-0.5 sm:mt-1 font-odia text-left line-clamp-2 sm:line-clamp-3"
        style={{ color: holiday?.color || "#4B5563" }}
      >
        {details.significance}
      </div>
    );
  };

  const formatDay = (date: Date) => {
    const dayNumber = date.getDate();
    const details = dateDetails?.find((d) => d.date === dayNumber.toString());
    const moonType = moonIcons?.[dayNumber] as MoonType;
    const holiday = holidays?.find((h) => h.englishDate === dayNumber);

    return (
      <div className="relative flex flex-col items-start p-0.5 sm:p-1 h-full">
        <span
          className="text-lg sm:text-2xl lg:text-4xl"
          style={{ color: holiday?.color || "inherit" }}
        >
          {formatDateWithLeadingZero(dayNumber)}
        </span>
        {moonType && moonData[moonType]?.icon && (
          <div className="absolute top-[10%] right-[45%] sm:top-[5%] sm:right-[30%] md:top-[5%] md:right-[40%]">
            <Image
              src={moonData[moonType].icon}
              alt={moonType}
              width={8}
              height={8}
              className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4"
            />
          </div>
        )}
        {renderDateDetails(dayNumber, details)}
      </div>
    );
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-2 sm:p-4 lg:p-6", className)}
      classNames={{
        months: "flex flex-col space-y-2 sm:space-y-4",
        month: "space-y-2 sm:space-y-4",
        caption: "hidden",
        caption_label: "hidden",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 opacity-50 hover:opacity-100"
        ),
        table: "w-full border-collapse",
        head_row: "flex w-full",
        head_cell:
          "text-black w-[14.28%] text-sm sm:text-base lg:text-xl font-bold text-left pl-2",
        row: "flex w-full mt-1 sm:mt-2",
        cell: "relative w-[14.28%] text-center text-xs sm:text-sm p-0 relative focus-within:relative focus-within:z-20",
        day: cn(
          "h-12 sm:h-16 lg:h-24 w-full p-0.5 sm:p-1 font-normal",
          "text-sm sm:text-lg lg:text-3xl hover:bg-gray-100 rounded-none text-black"
        ),
        day_selected: "bg-gray-100",
        day_today: "text-black font-bold",
        day_outside: "hidden",
        day_disabled: "text-gray-400",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="h-4 w-4" {...props} />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="h-4 w-4" {...props} />
        ),
      }}
      formatters={{
        formatDay,
        formatWeekdayName: (day: Date) => {
          return day.toLocaleDateString('en-US', { weekday: 'narrow' });
        },
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
