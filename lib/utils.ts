import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDateWithLeadingZero = (date: number): string => {
  return date < 10 ? `0${date}` : `${date}`;
};
