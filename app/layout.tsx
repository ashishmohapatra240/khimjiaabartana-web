import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khimji Jewellers - Coming Soon",
  description: "Khimji Jewellers - Established since 1936",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-montserrat">{children}</body>
    </html>
  );
}
