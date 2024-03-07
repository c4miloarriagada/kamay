import { FaMobileScreen } from 'react-icons/fa6';
import { HeroImg } from './_components/HeroImg';

export default function Home() {
  return (
    <section className='min-h-screen w-full  p-4'>
      <div className='flex h-[60rem] w-full flex-col gap-6'>
        <HeroImg />
        <h2 className='text-xl font-bold tracking-wider'>Our Services</h2>
        <section className='flex h-[40rem] w-full gap-4'>
          <div className='flex h-full w-1/4 flex-col rounded-lg border-2 p-4'>
            <div className='flex flex-col justify-evenly gap-2'>
              <FaMobileScreen size={30} />
              <span className='flex flex-col gap-2 '>
                <p> Mobile Apps</p>
                <p>
                  We design and develop iOS and Android apps that are intuitive,
                  engaging, and scalable.
                </p>
              </span>
            </div>
          </div>
          <div className='h-full w-1/4 rounded-lg border-2'></div>
          <div className='h-full w-1/4 rounded-lg border-2'></div>
          <div className='h-full w-1/4 rounded-lg border-2'></div>
        </section>
        <h3 className='text-xl font-bold tracking-wider'>Our Services</h3>
        <section className='flex h-[20rem] w-full gap-4'>
          <div className='h-full w-1/4 rounded-lg border-2'></div>
          <div className='h-full w-1/4 rounded-lg border-2'></div>
          <div className='h-full w-1/4 rounded-lg border-2'></div>
          <div className='h-full w-1/4 rounded-lg border-2'></div>
        </section>
      </div>
    </section>
  );
}
