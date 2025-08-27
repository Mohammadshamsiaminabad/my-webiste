// fonts
import { Baloo_Bhaijaan_2 } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./layout-wrapper";
const baloo_Bhaijaan_2 = Baloo_Bhaijaan_2({
  subsets: ['latin'],
  weight: ["400", "800"],
});

export const metadata = {
  title: "محمد شمسی",
  description: "طراحی و ساخت بهترین وبسایت ها",
  keywords: ["nextjs", "tutorial", "project"],
  authors: [{ name: "نام شما", url: "https://mohammad-shamsi-dev.ir" }],
  icons: {
    icon: "/favicon.png",              // برای favicon معمولی
    shortcut: "/favicon.png",    // برای shortcut icon
    apple: "/favicon.png",    // برای دستگاه‌های iOS
  },
  verification: {
    google: "0ZSBF3q8VPlCUwAYLAHlROqoY9BfgXY1KmX3yFl7MWw"  // فقط مقدار content رو بذار
  },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en" className={baloo_Bhaijaan_2.className}>
      <head>
        <link 
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
          integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer" />
        <link rel="apple-touch-icon" href="/me.jpg" />
      </head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
