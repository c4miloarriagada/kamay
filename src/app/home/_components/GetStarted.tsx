import { Button } from '@/components/Button/Button';

export const GetStarted = () => {
  return (
    <div className='flex h-[20rem] w-full flex-col items-center justify-center gap-6'>
      <span className='text-3xl font-bold tracking-wider max-md:text-2xl'>
        Ready to build your app?
      </span>
      <Button disabled label='Get Started' />
    </div>
  );
};
