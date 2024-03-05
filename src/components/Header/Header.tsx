'use client';
import Link from 'next/link';
import Logo from './../../../public/favicon.svg';
import { Button } from '../Button/Button';

export const Header = () => {
  return (
    <header className='sticky top-0  flex h-16 w-full items-center justify-between bg-white/10 px-10  text-white  shadow-md backdrop-blur '>
      <div className='  flex  h-full items-center  gap-3  '>
        <span>
          <Logo height={42} width={42} />
        </span>
        <h1 className='flex h-full items-center whitespace-nowrap text-4xl font-semibold tracking-wider text-neutral-800'>
          Kamay Labs
        </h1>
      </div>
      <div className=' flex h-full w-full items-end justify-center py-3'>
        <span className='flex h-full w-full items-center justify-end gap-9 font-medium  text-neutral-800'>
          <Link href='/services'>Services</Link>
          <Link href='/about'>About Us</Link>
          <Link href='/contact'>Contact</Link>
          <Button disabled={false} label='Get Started' onClick={() => {}} />
        </span>
      </div>
    </header>
  );
};
