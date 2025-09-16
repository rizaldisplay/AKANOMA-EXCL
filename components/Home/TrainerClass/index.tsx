'use client'

import React from 'react';
import { classData } from '../../../app/api/data'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion';

const teamMembers = [
  { id: 1, src: '/images/team/team1.webp' },
  { id: 2, src: '/images/team/team2.webp' },
  { id: 3, src: '/images/team/team3.webp' },
  { id: 4, src: '/images/team/team4.webp' },
  { id: 5, src: '/images/team/team5.webp' },
  { id: 6, src: '/images/team/team6.webp' },
  { id: 7, src: '/images/team/team7.webp' },
  { id: 8, src: '/images/team/team8.webp' },
  { id: 9, src: '/images/team/team9.webp' },
  { id: 10, src: '/images/team/team10.webp' },
  { id: 11, src: '/images/team/team11.webp' },
  { id: 12, src: '/images/team/team12.webp' },
];


// --- Main Component ---
const App = () => {
  return (
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
              Traiding Balance
            </span>
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-white/70">
            Manfaatkan <span className="font-semibold text-white">2 akun broker atau lebih</span> dengan bonus
            atau keuntungan tertentu. Sehingga, saat salah satu akun mengalami kerugian, dana akan otomatis masuk ke akun yang profit.
          </p>
        </header>

        {/* Fitur / bullet list */}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {classData.map((item, idx) => (
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
              </div>
            </li>
          ))}
        </ul>

        <p className='mt-6 text-pretty text-white/70'>
          * Datang ke kantor kami, free trial 1 hari
        </p>

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

