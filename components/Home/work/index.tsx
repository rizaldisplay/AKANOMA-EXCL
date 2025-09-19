'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


interface workProps {
  title: string;
  subtitle: string;
  desc: string;
  desc2: string;
}

const Work: React.FC<workProps> = ({ title, subtitle, desc, desc2 }) => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const bottomAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const services = [
    {
      icon: '/images/chooseus/chooseus-icon-1.svg',
      text: 'Designed for crypto trading platforms',
    },
    {
      icon: '/images/chooseus/chooseus-icon-2.svg',
      text: 'Kickstart your crypto website today',
    },
    {
      icon: '/images/chooseus/chooseus-icon-3.svg',
      text: 'Launch your blockchain platform today',
    },
  ]

  return (
    <section className='' id='work'>
      <div className='container px-4 mx-auto lg:max-w-(--breakpoint-xl)'>
        <div ref={ref} className='grid grid-cols-12 items-center'>
          {/* Diubah dari lg:col-span-7 menjadi lg:col-span-12 */}
          <motion.div
            {...bottomAnimation}
            className='lg:col-span-12 col-span-12'> 
            <div className='flex flex-col gap-3'>
              <p className="text-white font-medium">
                Why choose <span className='text-red-500'>Akanoma</span>
              </p>
              <h1 className='sm:text-40 text-[30px] bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent lg:w-full md:w-70% font-medium'>
                {title}<br />
                <span className='bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent'>{subtitle}</span>
              </h1>
            </div>
            <div>
              {/* Lebar paragraf juga diubah agar mengisi kontainer baru */}
              <p className='text-white/70 mt-6 lg:w-full'>
                {desc}
              </p> <br />
              <p className='text-white/70 lg:w-full'>
                {desc2}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
