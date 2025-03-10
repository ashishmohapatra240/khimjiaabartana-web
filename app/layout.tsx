import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khimji Aabartana",
  description:
    "ଜାନିଜାତ, ବାର ମାସରେ ତେର ପର୍ବ ହେଉଛି ଆମ ଓଡ଼ିଆ ସଂସ୍କୃତି ଏବଂ ଓଡ଼ିଆତ୍ୱର ମାନକ । ଏହି ତିଥି ବାରର ବାହକ ଆମ ଓଡ଼ିଆ ପଞ୍ଜିକା ବା ପାଞ୍ଜି । ସମୟର ଚିତ୍ରପଟରେ ଆମ ତିଥି ବାରର ମହତ୍ୟର ରଙ୍ଗ ଧିରେ ଧିରେ ଲିଭି ଯାଉଥିବା ସମୟରେ, ଓଡ଼ିଆ ପଞ୍ଜିକାକୁ ଏକ ଆଧୁନିକ ରୂପ ଦେଇ, ନୂତନ ପିଢ଼ିଙ୍କ୭ ଅବଗତ କରାଇବା ଏବଂ ଆମ ଗୌରବମୟ ପରମ୍ପରାକୁ ବଞ୍ଚାଇ ରଖିବା ପାଇଁ 'ଖିମଜୀ' ପରିବାର ତରଫରୁ ଏକ କ୍ଷୁଦ୍ର ପ୍ର୭ାସ ହେଉଛି 'ଆବର୍ତ୍ତନ' ।",
  openGraph: {
    title: "Khimji Aabartana",
    description: "Digital Odia Calendar by Khimji",
    url: "https://khimjiaabartana.com",
    siteName: "Khimji Aabartana",
    images: [
      {
        url: "https://raw.githubusercontent.com/ashishmohapatra240/khimjiaabartana-web/refs/heads/main/public/images/og.png",
        width: 1200,
        height: 630,
        alt: "Khimji Abartana OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khimji Aabartana",
    description: "Digital Odia Calendar by Khimji",
    images: [
      "https://raw.githubusercontent.com/ashishmohapatra240/khimjiaabartana-web/refs/heads/main/public/images/og.png",
    ],
  },
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
