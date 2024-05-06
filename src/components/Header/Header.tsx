import Link from 'next/link'
import { DarkMode } from '../DarkMode/DarkMode'
import Logo from './../../../public/favicon.svg'

export const Header = () => {
  return (
    <header className='sticky top-0 flex h-20  w-full items-center justify-between gap-4 bg-white/10 px-10 shadow-md backdrop-blur  max-md:h-16 max-md:px-2 '>
      <div className='  flex  h-full items-center  gap-3  '>
        <Link href='/home' className='text-white max-md:scale-75'>
          <Logo fill='#99A3AF' height={60} width={60} />
        </Link>
      </div>
      <div className=' flex h-full w-full items-end justify-center py-3'>
        <span className='flex h-full w-full items-center justify-end gap-9 font-medium text-neutral-800  max-md:gap-3'>
          <Link
            className=' whitespace-nowrap dark:text-gray-400'
            href='/services'
          >
            Services
          </Link>
          <Link className='whitespace-nowrap dark:text-gray-400' href='/about'>
            About Us
          </Link>
          <Link
            className='whitespace-nowrap dark:text-gray-400'
            href='/contact'
          >
            Contact
          </Link>
          <DarkMode />
        </span>
      </div>
    </header>
  )
}
