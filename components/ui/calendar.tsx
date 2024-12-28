"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { DateDetailsType } from "@/types/calendar";
import Image from "next/image";
import { moonData, MoonType } from "@/data/moon";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  dateDetails?: Record<number, DateDetailsType>;
  holidays?: { date: number; color: string }[];
  moonIcons?: Record<number, string>;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  dateDetails,
  // holidays = [],
  moonIcons,
  ...props
}: CalendarProps) {
  const renderDateDetails = (date: number, details?: DateDetailsType) => {
    if (!details) return null;

    return (
      <div className="text-[12px] leading-tight mt-1 text-black">
        <div>{details.details}</div>
      </div>
    );
  };

  const formatDay = (date: Date) => {
    const dayNumber = date.getDate();
    const details = dateDetails?.[dayNumber];
    const moonType = moonIcons?.[dayNumber] as MoonType;

    return (
      <div className="relative flex flex-col items-start p-1">
        <span className="text-4xl">{dayNumber}</span>
        {moonType && (
          <div className="absolute top-2 right-16">
            <Image
              src={moonData[moonType].icon}
              alt={moonType}
              width={12}
              height={12}
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
      className={cn("p-6", className)}
      classNames={{
        months: "flex flex-col space-y-4",
        month: "space-y-4",
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
          "text-black w-[14.28%] text-xl font-bold text-center uppercase",
        row: "flex w-full mt-2",
        cell: "relative w-[14.28%] text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
        day: "h-24 w-full p-1 font-normal text-3xl hover:bg-gray-100 rounded-none text-black",
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
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
