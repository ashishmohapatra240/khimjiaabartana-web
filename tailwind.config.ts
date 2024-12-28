import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
