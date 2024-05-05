'use client';
import Link from 'next/link';
import Logo from './../../../public/favicon.svg';
import { Button } from '../Button/Button';

export const Header = () => {
  return (
    <header className='sticky top-0  flex h-20 w-full items-center justify-between gap-4 bg-white/10 px-10 text-white  shadow-md  backdrop-blur max-md:px-2 '>
      <div className='  flex  h-full items-center  gap-3  '>
        <span>
          <Logo fill='#2d2e5c' height={60} width={60} />
        </span>
      </div>
      <div className=' flex h-full w-full items-end justify-center py-3'>
        <span className='flex h-full w-full items-center justify-end gap-9 font-medium text-neutral-800  max-md:gap-3'>
          <Link className=' whitespace-nowrap' href='/services'>
            Services
          </Link>
          <Link className='whitespace-nowrap' href='/about'>
            About Us
          </Link>
          <Link className='whitespace-nowrap' href='/contact'>
            Contact
          </Link>
        </span>
      </div>
    </header>
  );
};
