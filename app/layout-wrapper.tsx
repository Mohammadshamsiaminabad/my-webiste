"use client";
import { usePathname } from "next/navigation";
import { MainContextProvider } from "./mainContext";
import FooterLayout from "./layout-f";
import HeaderLayout from "./layout-h";
import Providers from "./providers";
import { useEffect } from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, []);
  const MainCondition = (pathname !== "/register-authorization" && !pathname.startsWith("/projects/example"));
  return (
    <Providers>
      <MainContextProvider>
        {MainCondition ?  (
          <>
            <HeaderLayout />
              {children}
            <FooterLayout />
          </>
        ) : (
          <>
            {children}
          </>
        )}
      </MainContextProvider>
    </Providers>

  )
}