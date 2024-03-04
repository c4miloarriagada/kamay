'use client';
import Image from 'next/image';
import whiteName from './../../../public/white_name.png';
import Logo from './../../../public/favicon.svg';

export const Header = () => {
  return (
    <header className='sticky top-0 flex h-16 w-full items-center justify-between  bg-white/10  shadow-md backdrop-blur '>
      <div className='  text-white '>
        <span className='ml-10 flex  h-full items-center  gap-3  '>
          <Logo height={50} width={50} />
          {/* <Image height={40} src={whiteName} alt='logo' /> */}
          <h1 className='h-full whitespace-nowrap font-semibold tracking-wider text-neutral-800 '>
            Kamay Labs
          </h1>
        </span>
      </div>
      <span></span>
    </header>
  );
};
