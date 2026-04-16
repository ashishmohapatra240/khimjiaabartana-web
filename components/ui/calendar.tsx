"use client";

import * as React from "react";
import { DayButton, DayPicker, type DayButtonProps } from "react-day-picker";
import { cn, formatDateWithLeadingZero } from "@/lib/utils";
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
  const currentMonth = React.useMemo(
    () => props.month ?? props.defaultMonth ?? new Date(),
    [props.defaultMonth, props.month]
  );

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

  const CalendarDayButton = ({
    day,
    modifiers,
    className: dayButtonClassName,
    ...buttonProps
  }: DayButtonProps) => {
    const dayNumber = day.date.getDate();
    const details = dateDetails?.find((d) => d.date === dayNumber.toString());
    const moonType = moonIcons?.[dayNumber] as MoonType;
    const holiday = holidays?.find((h) => h.englishDate === dayNumber);

    return (
      <DayButton
        day={day}
        modifiers={modifiers}
        className={cn(dayButtonClassName)}
        {...buttonProps}
      >
        <div className="relative flex h-full flex-col items-start p-0.5 sm:p-1">
          <span
            className="text-lg sm:text-2xl lg:text-4xl font-odia-bold"
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
      </DayButton>
    );
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      hideNavigation
      className={cn("p-2 sm:p-4 lg:p-6", className)}
      classNames={{
        months: "flex flex-col space-y-2 sm:space-y-4",
        month: "space-y-2 sm:space-y-4",
        month_caption: "hidden",
        caption_label: "hidden",
        month_grid: "w-full border-collapse",
        weekdays: "flex w-full",
        weekday:
          "text-black w-[14.28%] text-sm sm:text-base lg:text-xl font-bold font-odia text-left pl-2",
        week: "flex w-full mt-1 sm:mt-2",
        day: "relative w-[14.28%] text-center text-xs sm:text-sm p-0 align-top focus-within:relative focus-within:z-20",
        day_button: cn(
          "h-12 sm:h-16 lg:h-24 w-full p-0 font-normal",
          "text-sm sm:text-lg lg:text-3xl hover:bg-gray-100 rounded-none text-black"
        ),
        selected: "bg-gray-100",
        today: "text-black font-bold",
        outside: "hidden",
        disabled: "text-gray-400",
        ...classNames,
      }}
      components={{
        DayButton: CalendarDayButton,
      }}
      formatters={{
        formatWeekdayName: (day: Date) => {
          return day.toLocaleDateString("en-US", { weekday: "narrow" });
        },
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
