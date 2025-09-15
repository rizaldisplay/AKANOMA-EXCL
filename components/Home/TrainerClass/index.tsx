'use client'

import React from 'react';
import { upgradeData } from '../../../app/api/data'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion';

// --- Icon Components (Inline SVG for simplicity) ---
// Ini adalah praktik yang baik untuk menjaga semuanya dalam satu file tanpa dependensi eksternal.

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


// --- Data Structures ---
type PlanFeature = string;

interface PricingPlan {
  name: string;
  icon: React.ElementType;
  description: string;
  price: number;
  priceDetails: string;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  isHighlighted: boolean;
  subtext: string;
  features: PlanFeature[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Pro',
    icon: UserIcon,
    description: 'For early-stage founders, solopreneurs and indie devs',
    price: 99,
    priceDetails: 'one-time payment',
    buttonText: 'Get all-access',
    buttonVariant: 'primary',
    isHighlighted: true,
    subtext: 'Lifetime access. Free updates. No recurring fees.',
    features: [
      '4 website templates',
      '2 app templates',
      '72 blocks and sections',
      '16 illustrations',
      '14 custom animations',
    ],
  },
  {
    name: 'Pro Team',
    icon: TeamIcon,
    description: 'For teams and agencies working on cool products together',
    price: 499,
    priceDetails: 'one-time payment',
    buttonText: 'Get all-access for your team',
    buttonVariant: 'secondary',
    isHighlighted: false,
    subtext: 'Lifetime access. Free updates. No recurring fees.',
    features: [
      'All the templates, components and sections available for your entire team',
    ],
  },
];

const teamMembers = [
  { id: 1, src: '/images/team/team1.jpeg' },
  { id: 2, src: '/images/team/team2.jpeg' },
  { id: 3, src: '/images/team/team3.jpeg' },
  { id: 4, src: '/images/team/team4.jpeg' },
  { id: 5, src: '/images/team/team5.jpeg' },
  { id: 6, src: '/images/team/team6.jpeg' },
  { id: 7, src: '/images/team/team7.jpeg' },
  { id: 8, src: '/images/team/team8.jpeg' },
  { id: 9, src: '/images/team/team9.jpeg' },
  { id: 10, src: '/images/team/team10.jpeg' },
  { id: 11, src: '/images/team/team11.jpeg' },
  { id: 12, src: '/images/team/team12.jpeg' },
];


// --- Main Component ---
const App = () => {
  return (
    //   <section className='md:py-24 py-16' id='team'>
    //     <div className='container mx-auto lg:px-16 px-4'>
    //         <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
    //             {/* Kolom 1: Teks */}
    //             <motion.div
    //                 initial={{ opacity: 0, x: -50 }}
    //                 whileInView={{ opacity: 1, x: 0 }}
    //                 viewport={{ once: true }}
    //                 transition={{ duration: 0.8 }}
    //             >
    //                 <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A remote focused team growing fast</h2>
    //                 <p className="mt-6 text-white/70">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
    //                 <button className="mt-8 px-6 py-3 border border-white/40 rounded-lg hover:bg-white/10 transition-colors duration-300">Join our team</button>
    //             </motion.div>

    //             {/* Kolom 2: Galeri Foto */}
    //             <motion.div
    //                 initial={{ opacity: 0, scale: 0.9 }}
    //                 whileInView={{ opacity: 1, scale: 1 }}
    //                 viewport={{ once: true }}
    //                 transition={{ duration: 0.8, delay: 0.2 }}
    //             >
    //                 <div className="columns-2 sm:columns-3 gap-4 space-y-4">
    //                     {teamMembers.map((member) => (
    //                        <img 
    //                             key={member.id} 
    //                             src={member.src} 
    //                             alt={`Team member ${member.id}`} 
    //                             className="rounded-xl w-full break-inside-avoid" 
    //                         />
    //                     ))}
    //                 </div>
    //             </motion.div>
    //         </div>
    //     </div>
    //   </section>

    <section className='md:py-24 py-16' id='team'>
      <style>{`
        @keyframes scroll-vertical {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
            animation: scroll-vertical 60s linear infinite;
        }
        .group:hover .animate-scroll-vertical {
            animation-play-state: paused;
        }
      `}</style>
      <div className='container mx-auto lg:px-16 px-4'>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Kolom 1: Teks */}
        <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <header className="max-w-3xl">
          <h2 className="text-balance text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Training Class
            </span>
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-white/70">
            Yaitu, menggunakan <span className="font-semibold text-white">2 akun broker atau lebih</span> dengan bonus
            atau keuntungan tertentu. Sehingga, saat salah satu akun mengalami kerugian, dana akan otomatis masuk ke akun yang profit.
          </p>
        </header>

        {/* Fitur / bullet list */}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {upgradeData.map((item, idx) => (
            <li
              key={idx}
              className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <span className="mt-0.5 rounded-full bg-emerald-400/15 p-1.5 ring-1 ring-emerald-400/30">
                <Icon
                  icon="la:check-circle"
                  width="22"
                  height="22"
                  className="text-emerald-400 transition-transform group-hover:scale-110"
                />
              </span>
              <div>
                <h3 className="text-sm font-medium text-white/90 mt-2">{item.title}</h3>
                {item.desc ? (
                  <p className="mt-1 text-xs text-white/60">{item.desc}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8">
          <button
            type="button"
            className={[
              "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold",
              "border border-white/15 bg-white/10 backdrop-blur",
              "hover:bg-white/20 hover:border-white/25",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-0",
              "transition-colors"
            ].join(" ")}
            aria-label="Join our class"
          >
            Join our class
            <Icon icon="lucide:arrow-right" width="18" height="18" />
          </button>
        </div>
      </motion.div>

          {/* Kolom 2: Galeri Foto Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="group relative h-[550px] max-h-[80vh] w-full overflow-hidden mask-image:[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
              <div className="animate-scroll-vertical absolute top-0 left-0 w-full">
                {/* Render a list of photos */}
                <div className="columns-2 sm:columns-3 gap-4 space-y-4">
                  {teamMembers.map((member) => (
                    <img
                      key={member.id}
                      src={member.src}
                      alt={`Team member ${member.id}`}
                      className="rounded-xl w-full"
                    />
                  ))}
                </div>
                {/* Render the same list again for a seamless loop */}
                <div className="columns-2 sm:columns-3 gap-4 space-y-4 mt-4">
                  {teamMembers.map((member) => (
                    <img
                      key={`${member.id}-duplicate`}
                      src={member.src}
                      alt={`Team member ${member.id}`}
                      className="rounded-xl w-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default App;

