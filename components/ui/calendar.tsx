"use client";

import * as React from "react";
import { DayPicker, type DayButtonProps } from "react-day-picker";
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

  const parseLunarDay = (text?: string) => {
    if (!text) return undefined;

    const normalized = text.replace(/\s+/g, " ").trim();
    const match = normalized.match(/^([0-9\u0B66-\u0B6F]+)/);

    if (!match) return undefined;

    const numeric = match[1]
      .replace(/[\u0B66-\u0B6F]/g, (digit) =>
        String(digit.charCodeAt(0) - 0x0b66)
      );

    const parsed = Number.parseInt(numeric, 10);
    return Number.isNaN(parsed) ? undefined : parsed;
  };

  const inferMoonType = (details?: DateDetailsType) => {
    if (!details?.significance) return undefined;

    const significance = details.significance.replace(/\s+/g, "");
    const lunarDay = parseLunarDay(details.significance);

    if (significance.includes("ପୂର୍ଣ୍ଣିମା")) {
      return "Purnima" as MoonType;
    }

    if (significance.includes("ଅମାବାସ୍ୟା")) {
      return "Amavasya" as MoonType;
    }

    if (significance.includes("ଏକାଦଶୀ") && lunarDay) {
      return (lunarDay <= 15
        ? "ShuklaPakshaEkadashi"
        : "KrishnaPakshaEkadashi") as MoonType;
    }

    return undefined;
  };

  const renderDateDetails = (date: number, details?: DateDetailsType) => {
    const holiday = currentMonthHolidays.find((h) => h.englishDate === date);
    const detailText = details?.significance ?? holiday?.festival;

    if (!detailText) return null;

    return (
      <div
        className="mt-0.5 line-clamp-2 whitespace-pre-line text-left font-odia text-[8px] leading-tight sm:mt-1 sm:line-clamp-3 sm:text-[10px]"
        style={{ color: holiday?.color || "#4B5563" }}
      >
        {detailText}
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
    const details = day.outside
      ? undefined
      : dateDetails?.find((d) => d.date === dayNumber.toString());
    const moonType = day.outside
      ? undefined
      : ((moonIcons?.[dayNumber] as MoonType) ?? inferMoonType(details));
    const holiday = day.outside
      ? undefined
      : currentMonthHolidays.find((h) => h.englishDate === dayNumber);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
      if (modifiers.focused) {
        buttonRef.current?.focus();
      }
    }, [modifiers.focused]);

    const nativeButtonProps = { ...buttonProps };
    delete nativeButtonProps.children;

    return (
      <button
        ref={buttonRef}
        type="button"
        className={cn(
          dayButtonClassName,
          "block appearance-none border-0 bg-transparent text-left shadow-none outline-none"
        )}
        {...nativeButtonProps}
      >
        <div className="relative flex h-full w-full select-none flex-col items-start overflow-hidden p-1 text-black sm:p-1.5">
          <span
            className="font-archivo text-lg font-semibold text-black sm:text-2xl lg:text-4xl"
            style={{ color: holiday?.color || "#111827" }}
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
      </button>
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
        month_grid: "w-full table-fixed border-collapse",
        weekdays: "",
        weeks: "",
        weekday:
          "h-12 px-2 pb-3 text-left align-top text-sm font-bold text-black sm:h-14 sm:text-base lg:h-16 lg:text-xl",
        week: "",
        day: "relative h-16 p-0 align-top text-xs sm:h-20 sm:text-sm lg:h-28 focus-within:relative focus-within:z-20",
        day_button: cn(
          "h-full w-full rounded-none p-0 text-left font-normal align-top",
          "text-sm text-black hover:bg-gray-100 sm:text-lg lg:text-3xl"
        ),
        selected: "bg-gray-100",
        today: "text-black font-bold",
        outside: "pointer-events-none opacity-0",
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
