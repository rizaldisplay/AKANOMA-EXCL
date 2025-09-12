"use client";

import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "../components/ScrollToTop";
import Aoscompo from "../utils/aos";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Mengembalikan kemampuan scroll setelah loading screen hilang
    if (!loading) {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  const handleLoadingFinished = (): void => {
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingScreen onFinished={handleLoadingFinished} />}
      <html lang="en" suppressHydrationWarning>
        <body className={`${font.className}`}>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="system"
          >
            <Aoscompo>
              <Header />
              {children}
              <Footer />
            </Aoscompo>
            <ScrollToTop />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
