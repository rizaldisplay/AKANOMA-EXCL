import Image from 'next/image'
import Link from 'next/link'

interface quotesProps {
  quotes: string;
}

const Quotes: React.FC<quotesProps> = ({ quotes }) => {
  return (
    <section className='md:pt-44 sm:pt-24 pt-12 relative z-1'>
      <div className='container px-4'>
        <div className="bg-section/10 px-16 py-14 rounded-3xl border-2 border-section/20 grid grid-cols-12 items-center before:content-[''] before:absolute relative before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-6 overflow-hidden lg:before:right-0 before:-z-1 before:opacity-10 ">
          <div className='lg:col-span-8 col-span-12'>
            <h2 className='text-white sm:text-40 text-30 mb-6'>
              <blockquote className='border-l-4 border-primary pl-6 italic'>
                {quotes}
              </blockquote>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quotes
