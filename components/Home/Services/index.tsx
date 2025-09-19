'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const TeamIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);


// --- Data Structure ---
// Mendefinisikan tipe data untuk setiap paket agar lebih aman dengan TypeScript.
type PlanFeature = string;

interface PricingPlan {
  name: string;
  icon: React.ElementType;
  description: string;
  price: string | number;
  priceDetails: string;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  isHighlighted: boolean;
  subtext: string;
  features: PlanFeature[];
}

// Data untuk semua paket. Diubah menjadi 2 untuk demonstrasi.
const plans: PricingPlan[] = [
  {
    name: 'Sewa EA',
    icon: UserIcon,
    description: 'Untuk trader yang menginginkan kontrol penuh',
    price: '7/hari',
    priceDetails: 'per $2000 deposit minimum',
    buttonText: 'Pantau EA dari akun Investor',
    buttonVariant: 'primary',
    isHighlighted: true,
    subtext: 'Biaya Sewa Harian.',
    features: [
      'Biaya Gas Awal : $140',
      'VPS & Instalasa : Terpisah',
      'Rebate : Hak penyedia',
      'Kontrol Akun : Penuh',
    ],
  },
  {
    name: 'Sharing Profit',
    icon: TeamIcon,
    description: 'Untuk kemitraan jangka panjang yang menguntungkan',
    price: '10%',
    priceDetails: 'dari laba bersih bulanan',
    buttonText: 'Pilih Sharing Profit',
    buttonVariant: 'secondary',
    isHighlighted: true,
    subtext: 'Bagi Hasil',
    features: [
      'Biaya Setup : Rp 300.000',
      'Pilihan Broker : Bebas',
      'Penarikan : Bulanan',
      'Risk Management : Terkelola',
    ],
  },
];

interface serviceItem {
    name: string;
    icon: string;
    description: string;
    price: string;
    priceDetails: string;
    buttonText: string;
    buttonVariant: string;
    isHighlighted: boolean;
    subtext: string;
    features: string[];
}

interface servicesProps {
  title: string;
  subtitle: string;
  service: serviceItem[];
}

// --- Main Component ---
const Services: React.FC<servicesProps> = ({ title, subtitle, service }) => {
  const ref = useRef(null)
  const inView = useInView(ref)

  console.log(service)

  return (
    <section className='md:pt-40 pt-9' id='development'>
      <div className='container lg:px-16 px-4'>
        <div className='text-center'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}>
            <div className='flex flex-col gap-4'>
              <p className='text-white font-medium'>
                Our <span className='text-red-500'>best service</span>
              </p>
              <h2 className='bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent sm:text-40 text-30 font-medium lg:w-80% mx-auto'>
                {title}
              </h2>
              <p className='text-[#D9D9D9]  lg:w-80% mx-auto mb-20'>{subtitle}</p>
            </div>
          </motion.div>

         <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* --- PERUBAHAN TATA LETAK DI SINI --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
                {/* Mapping data ke komponen card */}
                {service.map((plan) => {
                  const Icon = plan.icon === 'UserIcon' ? UserIcon : TeamIcon;

                  // Logika untuk styling dinamis berdasarkan properti plan
                  const cardClasses = `
                    flex flex-col rounded-2xl p-8 h-full text-left
                    border border-white/10 relative overflow-hidden transition-all duration-300
                    ${plan.isHighlighted ? 'bg-zinc-900' : 'bg-white/5'}
                  `;

                  const buttonClasses = `
                    w-full text-center py-3 rounded-lg font-semibold transition-colors duration-300
                    ${plan.buttonVariant === 'primary'
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'bg-white/10 text-white hover:bg-white/20'}
                  `;

                  return (
                    <div key={plan.name} className={cardClasses}>
                      {/* --- EFEK KILAU --- */}
                      {plan.isHighlighted && (
                        <div
                          className="absolute -top-1/4 left-0 right-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none"
                          aria-hidden="true"
                        />
                      )}
                      <div className="flex-grow">
                        {/* Card Header */}
                        <div className="flex items-center gap-3">
                          {Icon && <Icon className="h-6 w-6 text-white/60" />}
                          <h3 className="text-xl font-bold">{plan.name}</h3>
                        </div>
                        <p className="mt-4 text-sm text-white/60 h-12">
                          {plan.description}
                        </p>

                        {/* Price Section */}
                        <div className="mt-8 flex items-baseline gap-2 mb-5">
                          <span className="text-5xl font-extrabold tracking-tight">
                            ${plan.price}
                          </span>
                          {plan.priceDetails && (
                            <div className="flex flex-col text-xs text-white/60">
                              <span>{plan.priceDetails}</span>
                            </div>
                          )}
                        </div>

                        {/* Action Button */}
                        <button className={buttonClasses}>{plan.buttonText}</button>
                        <p className="mt-4 text-xs text-center text-white/50">
                          {plan.subtext}
                        </p>

                        {/* Features List */}
                        <ul className="mt-8 space-y-3 text-sm text-white/80">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckIcon className="h-5 w-5 text-white/50 mr-3 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default Services;

