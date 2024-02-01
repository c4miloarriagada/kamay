import Image from 'next/image';
import white_logo from './../../../public/white_logo.png';
export const Header = () => {
  return (
    <header className='sticky top-0 flex h-20 items-center justify-between bg-white/10 px-4 backdrop-blur'>
      <span>
        <Image height={60} src={white_logo} alt='logo' />
      </span>
      <span>
        <p className='text-6xl font-bold text-white'>Kamay Labs</p>
      </span>
    </header>
  );
};
