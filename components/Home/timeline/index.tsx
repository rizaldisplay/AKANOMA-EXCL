'use client'
import Image from 'next/image'
import { timelineData } from '../../../app/api/data'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TimeLine = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  return (
    <section className='md:pt-40 pt-9' id='development'>
      <div className='container lg:px-16 px-4'>
        <div className='text-center'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <div className='flex flex-col gap-4'>
              <p className='text-white font-medium'>
                We deliver <span className='text-red-500'>best solution</span>
              </p>
              <h2 className='bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent sm:text-40 text-30 font-medium lg:w-80% mx-auto'>
                Bukan Spekulasi Ini Sains Keseimbangan Pasar
              </h2>
              <p className='text-[#D9D9D9] lg:w-80% mx-auto mb-20'>
                EA Akanoma menggunakan pendekatan Non-Speculative Trading Action— kami tidak menebak arah pasar, melainkan memanfaatkan ketidakseimbangan harga yang terjadi secara alamiah.

                Hasil? Profit yang stabil dan terukur, tanpa bergantung pada prediksi arah pasar atau analisis fundamental yang subjektif. Ini adalah trading berdasarkan matematika, bukan emosi.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <div className='md:block hidden relative'>
              <div>
                <Image
                  src='/images/timeline/img-timeline.webp'
                  alt='image'
                  width={1220}
                  height={1000}
                  className='w-80% mx-auto'
                />
              </div>
              <div className='absolute lg::top-40 top-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
                <div className='text-right'>
                  <h5 className='text-muted text-28 mb-3'>Profit dari Equilibrium</h5>
                  <p className='text-18 text-muted/60'>
                    Untung konsisten dalam kondisi sideways
                  </p>
                </div>
                <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
                  <Image
                    src='/images/solution/solution-icon-1.svg'
                    alt='Planning'
                    width={44}
                    height={44}
                    className='w-16 h-16 '
                  />
                </div>
              </div>
              <div className='absolute lg:top-40 top-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
                <div className='bg-light_grey/45 backdrop-blur-xs p-6 h-fit rounded-full'>
                  <Image
                    src='/images/solution/solution-icon-2.svg'
                    alt='Refinement'
                    width={44}
                    height={44}
                  />
                </div>
                <div className='text-left'>
                  <h5 className='text-muted text-28 mb-3'>Scale and Konsistensi Matematis</h5>
                  <p className='text-18 text-muted/60'>
                    Berdasarkan perhitungan ilmiah, bukan spekulasi atau analisis subjektif.
                  </p>
                </div>
              </div>
              <div className='absolute lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
                <div className='text-right'>
                  <h5 className='text-muted text-28 mb-3'>Zero Emosi</h5>
                  <p className='text-18 text-muted/60'>
                    Keputusan trading murni logika, tanpa emosi
                  </p>
                </div>
                <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
                  <Image
                    src='/images/solution/solution-icon-3.svg'
                    alt='Prototype'
                    width={44}
                    height={44}
                    className='w-16 h-16 '
                  />
                </div>
              </div>
              <div className='absolute lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
                <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
                  <Image
                    src='/images/solution/solution-icon-4.svg'
                    alt='Scale and support'
                    width={44}
                    height={44}
                    className='w-16 h-16'
                  />
                </div>
                <div className='text-left'>
                  <h5 className='text-muted text-nowrap text-28 mb-3'>
                    Eksekusi Milidetik
                  </h5>
                  <p className='text-18 text-muted/60'>
                    Algoritma canggih eksekusi peluang lebih cepat dari trader manual
                  </p>
                </div>
              </div>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 md:hidden'>
              {timelineData.map((item, index) => (
                <div key={index} className='flex items-center gap-6'>
                  <div className='bg-light_grey/45 p-6 rounded-full'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className='text-start'>
                    <h4 className='text-28 text-muted mb-2'>{item.title}</h4>
                    <p className='text-muted/60 text-18'>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine
