import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'khimji-red': '#BF1E2D',
        'khimji-gold': '#D4AF37',
      },
      fontFamily: {
        archivo: "var(--font-archivo)", // Default Archivo
        archivoThin: "var(--font-archivo)", // Thin
        archivoExtraLight: "var(--font-archivo)", // ExtraLight
        archivoLight: "var(--font-archivo)", // Light
        archivoRegular: "var(--font-archivo)", // Regular
        archivoMedium: "var(--font-archivo)", // Medium
        archivoSemiBold: "var(--font-archivo)", // SemiBold
        archivoBold: "var(--font-archivo)", // Bold
        archivoExtraBold: "var(--font-archivo)", // ExtraBold
        archivoBlack: "var(--font-archivo)", // Black
        archivoItalic: "var(--font-archivo)", // Italic
        archivoCondensed: "var(--font-archivo)", // Condensed
        archivoCondensedBold: "var(--font-archivo)", // Condensed Bold
        archivoExpanded: "var(--font-archivo)", // Expanded
        archivoExtraCondensed: "var(--font-archivo)", // ExtraCondensed
        archivoSemiCondensed: "var(--font-archivo)", // SemiCondensed
        archivoSemiExpanded: "var(--font-archivo)", // SemiExpanded
        'noto-sans-oriya': ['var(--font-noto-sans-oriya)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
