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
  description: "ارائه خدمات تخصصی توسط محمد شمسی در زمینه توسعه وبسایت با Next.js و React، و ساخت اپلیکیشن‌های اندروید و iOS با کیفیت بالا.",
  authors: [{ name: "محمد شمسی", url: "https://mohammad-shamsi-dev.ir" }],
  keywords: ["محمد شمسی", "توسعه وب", "Next.js", "React", "توسعه اپلیکیشن اندروید", "iOS"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "0ZSBF3q8VPlCUwAYLAHlROqoY9BfgXY1KmX3yFl7MWw"
  },

  openGraph: {
    title: "محمد شمسی | توسعه وب و اپلیکیشن موبایل",
    description: "خدمات تخصصی توسعه وبسایت با Next.js و React و ساخت اپلیکیشن‌های اندروید و iOS.",
    url: "https://mohammad-shamsi-dev.ir",
    siteName: "محمد شمسی",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "محمد شمسی - توسعه دهنده وب و موبایل",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },

  alternates: {
    canonical: "https://mohammad-shamsi-dev.ir",
  }
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
