// app/[locale]/layout.tsx

import { DM_Sans } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import ClientProviders from "../components/ClientProviders"; // <- Komponen baru

const font = DM_Sans({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages(); // Diperlukan untuk NextIntlClientProvider

  console.log("Current locale:", locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${font.className} bg-darkmode`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Semua logika client-side, termasuk loading screen, 
            sekarang ditangani oleh komponen ClientProviders.
          */}
          <ClientProviders>{children}</ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}