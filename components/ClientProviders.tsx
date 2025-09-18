// components/ClientProviders.tsx

"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

// Sesuaikan path import ini dengan struktur proyek Anda
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import StickyFooter from "./Layout/StickyFooter";
import ScrollToTop from "./ScrollToTop";
import Aoscompo from "../utils/aos";
import LoadingScreen from "./LoadingScreen";
import { useTranslations } from "next-intl";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const t = useTranslations("Footer");

  console.log("t" + t("quotes"));

// Efek ini sekarang hanya mengelola class pada body
  useEffect(() => {
    if (loading) {
      document.body.classList.add('loading-active');
    } else {
      document.body.classList.remove('loading-active');
    }

    // Fungsi cleanup untuk memastikan class dihilangkan jika komponen unmount
    return () => {
      document.body.classList.remove('loading-active');
    };
  }, [loading]);
  
  const handleLoadingFinished = (): void => {
    setLoading(false);
  };

  // Selama loading, kita hanya merender LoadingScreen.
  // Ini mencegah "flash" konten di belakang loading screen.
  if (loading) {
    return <LoadingScreen onFinished={handleLoadingFinished} />;
  }

  // Setelah loading selesai, render layout aplikasi yang sebenarnya.
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
    >
      <Aoscompo>
        <Header />
        {children}
        <Footer />
        <StickyFooter quotes={t("quotes")} />
      </Aoscompo>
      <ScrollToTop />
    </ThemeProvider>
  );
}