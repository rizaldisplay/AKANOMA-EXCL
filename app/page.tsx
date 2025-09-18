import React from 'react'
import Hero from '../components/Home/Hero'
import Work from '../components/Home/work'
import TimeLine from '../components/Home/timeline'
import Platform from '../components/Home/platform'
import Portfolio from '../components/Home/portfolio'
import Upgrade from '../components/Home/upgrade'
import Services from '../components/Home/Services'
import Team from '../components/Home/TrainerClass'
import Perks from '../components/Home/perks'
import { Metadata } from 'next'
import GlobalReach from '../components/Home/GlobalReach'
import Faq from '../components/Home/Faq'

import { useTranslations } from "next-intl";

// Ganti URL dasar dengan domain website Anda yang sebenarnya
const metadataBase = new URL('https://akanomaexc.id');

export const metadata: Metadata = {
  // URL dasar untuk semua URL relatif dalam metadata
  metadataBase,

  // Judul utama, sangat penting untuk SEO
  title: 'Akanoma Exclusive | EA Trading Korelasi Tanpa Spekulasi untuk Profit Konsisten',

  // Deskripsi singkat, muncul di bawah judul pada hasil pencarian
  description: 'Akanoma Exclusive adalah penyedia Expert Advisor (EA) trading terdepan dengan strategi korelasi non-spekulatif. Raih pertumbuhan modal konsisten dan minimalkan risiko dengan sistem trading otomatis yang disiplin. Tersedia layanan sewa EA dan sharing profit.',

  // Keywords untuk membantu mesin pencari memahami konten halaman
  keywords: [
    'Akanoma Exclusive',
    'Expert Advisor',
    'EA Trading',
    'Robot Trading',
    'Trading Otomatis',
    'EA Korelasi',
    'Trading Non-Spekulatif',
    'Manajemen Risiko Trading',
    'Sewa EA',
    'Sharing Profit Trading',
    'Konsistensi Profit',
    'Algoritma Bellman-Ford',
    'Trading Tanpa Emosi',
    'Jasa EA Trading',
    'Forex',
  ],

  // Informasi untuk crawler mesin pencari
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Metadata untuk Open Graph (Facebook, LinkedIn, dll.)
  openGraph: {
    title: 'Akanoma Exclusive | EA Trading Korelasi Tanpa Spekulasi',
    description: 'Raih pertumbuhan modal konsisten dan minimalkan risiko dengan sistem trading otomatis yang disiplin berbasis korelasi.',
    url: 'https://akanomaexc.id', // URL halaman landing page
    siteName: 'Akanoma Exclusive',
    // Ganti dengan URL gambar banner atau logo Anda
    images: [
      {
        url: 'https://akanomaexc.id/og-image.png', // Contoh URL gambar
        width: 1200,
        height: 630,
        alt: 'Akanoma Exclusive - Expert Advisor Trading',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  // Metadata untuk Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Akanoma Exclusive | EA Trading Korelasi Tanpa Spekulasi',
    description: 'Raih pertumbuhan modal konsisten dan minimalkan risiko dengan sistem trading otomatis yang disiplin berbasis korelasi.',
    // Ganti dengan URL gambar banner atau logo Anda
    images: ['https://akanomaexc.id/twitter-image.png'], // Contoh URL gambar
  },

  // Informasi kontak dan lokasi dari dokumen
  verification: {
    // Anda bisa menambahkan kode verifikasi Google Search Console di sini
    // google: 'kode_verifikasi_anda',
  },
  
  // Menentukan URL kanonis untuk menghindari duplikasi konten
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const tServices = useTranslations("Services");
  const tFeatures = useTranslations("Features");
  const tQuotes = useTranslations("Quotes");
  const tGrowing = useTranslations("Growing");
  const tTraidingBalance = useTranslations("TradingBalance");
  const tFooter = useTranslations("FAQ");

  return (
    <main>
      <Hero />
      <Work />
      <GlobalReach/>
      {/* <Portfolio /> */}
      {/* <Perks /> */}
      <Services />
      <TimeLine title={tFeatures("title")} desc={tFeatures("desc")} featureList={tFeatures.raw("featureData")} />
      <Platform quotes={tQuotes("title")} />
      <Upgrade title={tGrowing("title")} desc={tGrowing("desc")} growingList={tGrowing.raw("growingData")} />
      <Team title={tTraidingBalance("title")} desc={tTraidingBalance("desc")} classList={tTraidingBalance.raw("classData")} detail={tTraidingBalance("detail")} />
      <Faq title={tFooter("title")} faq={tFooter.raw("faqData")}/>
    </main>
  )
}
