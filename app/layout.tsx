import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khimji Abartana",
  description:
    "ଜାନିଜାତ, ବାର ମାସରେ ତେର ପର୍ବ ହେଉଛି ଆମ ଓଡ଼ିଆ ସଂସ୍କୃତି ଏବଂ ଓଡ଼ିଆତ୍ୱର ମାନକ । ଏହି ତିଥି ବାରର ବାହକ ଆମ ଓଡ଼ିଆ ପଞ୍ଜିକା ବା ପାଞ୍ଜି । ସମୟର ଚିତ୍ରପଟରେ ଆମ ତିଥି ବାରର ମହତ୍ୟର ରଙ୍ଗ ଧିରେ ଧିରେ ଲିଭି ଯାଉଥିବା ସମୟରେ, ଓଡ଼ିଆ ପଞ୍ଜିକାକୁ ଏକ ଆଧୁନିକ ରୂପ ଦେଇ, ନୂତନ ପିଢ଼ିଙ୍କ୭ ଅବଗତ କରାଇବା ଏବଂ ଆମ ଗୌରବମୟ ପରମ୍ପରାକୁ ବଞ୍ଚାଇ ରଖିବା ପାଇଁ 'ଖିମଜୀ' ପରିବାର ତରଫରୁ ଏକ କ୍ଷୁଦ୍ର ପ୍ର୭ାସ ହେଉଛି 'ଆବର୍ତ୍ତନ' ।",
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
