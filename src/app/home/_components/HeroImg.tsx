import { Button } from '@/components/Button/Button';

export const HeroImg = () => {
  return (
    <div className='flex h-full w-full flex-col justify-end gap-2  rounded-xl  bg-hero-image  object-cover object-center p-4 text-white'>
      <h1 className=' text-5xl font-extrabold tracking-wide max-md:text-3xl'>
        We build beautiful apps
      </h1>
      <p className='text-pretty'>
        We are a software consultancy that works with startups and enterprises
        to create delightful apps for their customers and employees.
      </p>
      <span>
        <Button label='Get started' />
      </span>
    </div>
  );
};
