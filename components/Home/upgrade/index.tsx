import { upgradeData } from '../../../app/api/data'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Upgrade = () => {
  return (
    <section className='py-20' id='upgrade'>
      <div className='container px-4'>
        <div className='grid lg:grid-cols-2 gap-10 items-center'>
          <div>
            <p className='text-white font-medium'>Strategy <span className='text-red-500'>growing</span></p>
            <h2 className='bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent sm:text-40 text-30  font-medium mb-5'>
              Pertumbuhan Stabil, Bukan Keberuntungan Sesaat
            </h2>
            <p className='text-muted/60 text-18 mb-7'>
              Grafik kinerja EA Akanoma menunjukkan pertumbuhan ekuitas yang konsisten dari waktu ke waktu— bukti nyata dari strategi non-spekulatif yang kami terapkan.
            </p>
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className='ml-0 lg:ml-7'>
              <Image
                src='/images/upgrade/img-upgrade.png'
                alt='image'
                width={625}
                height={580}
                className='-mr-5'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Upgrade
