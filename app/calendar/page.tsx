import { redirect } from "next/navigation";

export default function CalendarPage() {
  // The full calendar implementation is preserved in `page.disabled.tsx`
  // so we can restore it quickly when the 2026-27 experience is ready.
  redirect("/");
}
