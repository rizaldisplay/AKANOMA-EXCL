// components/Faq.js
"use client";
import Image from "next/image";
import React, { useState } from "react"; // Optional: install lucide-react icons

const faqData = [
  {
    question: "Berapa setoran minimum untuk memulai?",
    answer:
      "Setoran minimum yang diperlukan adalah $2.000. Jumlah ini dirancang untuk memastikan EA dapat beroperasi optimal dengan manajemen risiko yang tepat dan memberikan ruang yang cukup untuk strategi trading kami.",
  },
  {
    question: "Seberapa besar risiko yang dikelola oleh EA?",
    answer:
      "EA Akanoma menerapkan tingkat toleransi floating loss maksimal 35% dari total ekuitas. Ini artinya dalam skenario terburuk, akun Anda tidak akan mengalami kerugian lebih dari 35%. Sistem kami dilengkapi dengan multiple safety mechanism untuk melindungi modal Anda.",
  },
  {
    question: "Apakah saya bisa melakukan trading manual di akun yang sama?",
    answer:
      "Tidak, intervensi manual dilarang keras untuk memastikan kinerja optimal EA. Sistem kami dirancang dengan algoritma yang presisi, dan setiap campur tangan manual dapat mengganggu keseimbangan strategi dan mengurangi efektivitas secara keseluruhan.",
  },
  {
    question: "Bagaimana saya bisa memantau kinerja akun saya?",
    answer:
      "Anda akan diberikan akses investor (read-only) untuk memantau kinerja akun secara real-time dan transparan. Melalui akses ini, Anda dapat melihat semua transaksi, profit/loss, dan statistik performa tanpa dapat melakukan intervensi pada trading.",
  },
  {
    question: "Broker apa saja yang bisa saya gunakan?",
    answer:
      "Untuk model Sharing Profit, Anda memiliki kebebasan penuh memilih broker yang Anda percayai. Untuk model Sewa EA, kami akan memberikan rekomendasi broker yang telah teruji kompatibel dengan sistem kami untuk memastikan performa optimal.",
  },
  {
    question: "Bagaimana cara penarikan profit?",
    answer:
      "Untuk model Sharing Profit, penarikan dilakukan secara bulanan setelah perhitungan laba bersih. Untuk model Sewa EA, Anda memiliki kontrol penuh atas akun dan dapat melakukan penarikan kapan saja sesuai kebijakan broker yang dipilih.",
  },
  {
    question: "Apakah ada jaminan profit?",
    answer:
      "Tidak ada sistem trading yang dapat menjamin profit 100%. Namun, EA Akanoma dirancang berdasarkan strategi non-spekulatif dengan track record yang konsisten. Kami fokus pada manajemen risiko yang ketat dan pertumbuhan yang sustainable.",
  },
  {
    question: "Berapa lama kontrak kemitraan?",
    answer:
      "Kontrak dapat disesuaikan dengan kebutuhan Anda. Untuk model Sewa EA, minimum 1 bulan dengan opsi perpanjangan. Untuk Sharing Profit, kami merekomendasikan minimum 3 bulan untuk melihat hasil optimal, dengan fleksibilitas perpanjangan jangka panjang.",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  title: string;
  faq: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ title, faq }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className=" py-16 text-white">
      <div className="container">
        <div className=" mx-auto px-4">
          <div className="text-center mb-10">
            {/* <p className="text-red-500 uppercase text-sm">Popular questions</p> */}
            <p className="text-white font-medium">
              Popular <span className="text-red-500">questions</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              {title}
            </h2>
          </div>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-4 cursor-pointer transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <Image
                    src={"/images/icons/plus-icon.svg"}
                    alt="plus-icon"
                    width={20}
                    height={20}
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  />
                </div>

                <div
                  className={`mt-2 text-gray-400 overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-80 visible" : "max-h-0 hidden"
                  }`}
                >
                  <p className="py-2">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
