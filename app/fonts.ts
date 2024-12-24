import localFont from "next/font/local";
import { Noto_Sans_Oriya } from "next/font/google";

export const archivo = localFont({
    src: [
        // Regular styles
        { path: "../public/fonts/Archivo/Archivo-Thin.ttf", weight: "100", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo-ExtraLight.ttf", weight: "200", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo-Light.ttf", weight: "300", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo-Regular.ttf", weight: "400", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo-Medium.ttf", weight: "500", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo-SemiBold.ttf", weight: "600", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo-Bold.ttf", weight: "700", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo-ExtraBold.ttf", weight: "800", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo-Black.ttf", weight: "900", style: "normal" },

        // Italic styles
        { path: "../public/fonts/Archivo/Archivo-ThinItalic.ttf", weight: "100", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo-ExtraLightItalic.ttf", weight: "200", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo-LightItalic.ttf", weight: "300", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo-Italic.ttf", weight: "400", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo-MediumItalic.ttf", weight: "500", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo-SemiBoldItalic.ttf", weight: "600", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo-BoldItalic.ttf", weight: "700", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo-BlackItalic.ttf", weight: "900", style: "italic" },

        // Condensed styles
        { path: "../public/fonts/Archivo/Archivo_Condensed-Regular.ttf", weight: "400", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo_Condensed-Bold.ttf", weight: "700", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo_Condensed-Italic.ttf", weight: "400", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo_Condensed-BoldItalic.ttf", weight: "700", style: "italic" },

        // Expanded styles
        { path: "../public/fonts/Archivo/Archivo_Expanded-Regular.ttf", weight: "400", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo_Expanded-Bold.ttf", weight: "700", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo_Expanded-Italic.ttf", weight: "400", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo_Expanded-BoldItalic.ttf", weight: "700", style: "italic" },
        

        // ExtraCondensed styles
        { path: "../public/fonts/Archivo/Archivo_ExtraCondensed-Regular.ttf", weight: "400", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo_ExtraCondensed-Bold.ttf", weight: "700", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo_ExtraCondensed-Italic.ttf", weight: "400", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo_ExtraCondensed-BoldItalic.ttf", weight: "700", style: "italic" },

        // SemiCondensed styles
        { path: "../public/fonts/Archivo/Archivo_SemiCondensed-Regular.ttf", weight: "400", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo_SemiCondensed-Bold.ttf", weight: "700", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo_SemiCondensed-Italic.ttf", weight: "400", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo_SemiCondensed-BoldItalic.ttf", weight: "700", style: "italic" },

        // SemiExpanded styles
        { path: "../public/fonts/Archivo/Archivo_SemiExpanded-Regular.ttf", weight: "400", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo_SemiExpanded-Bold.ttf", weight: "700", style: "normal" },
        { path: "../public/fonts/Archivo/Archivo_SemiExpanded-Italic.ttf", weight: "400", style: "italic" },
        { path: "../public/fonts/Archivo/Archivo_SemiExpanded-BoldItalic.ttf", weight: "700", style: "italic" },
    ],
    variable: "--font-archivo",
});

export const notoSansOriya = Noto_Sans_Oriya({
    weight: ["400", "700"],
    subsets: ["oriya"],
    variable: "--font-noto-sans-oriya",
});
