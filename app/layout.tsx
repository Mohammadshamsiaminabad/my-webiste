"use client";
// fonts
import { Baloo_Bhaijaan_2 } from "next/font/google";
// main stylesheet
import "./globals.css";
// layout components
import HeaderLayout from "./layout-h";
import FooterLayout from "./layout-f";

const baloo_Bhaijaan_2 = Baloo_Bhaijaan_2({
  subsets: ['latin'],
  weight: ["400", "800"],
});

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
        
      </head>
      <body>
        <HeaderLayout />
        {children}
        <FooterLayout />
      </body>
    </html>
  );
}
