import { type ReactNode } from 'react';

type Props = { icon: ReactNode; title: string; data: string };

export const Card = ({ icon, title, data }: Props) => {
  return (
    <div className='flex h-full w-1/4 flex-col rounded-lg  border-2 p-4 max-md:w-full'>
      <div className='flex h-full flex-col  justify-evenly gap-2 '>
        {icon}

        <span>
          {' '}
          <p className='text-xl font-bold tracking-wider'>{title}</p>{' '}
        </span>
        <span>
          <p>{data}</p>
        </span>
      </div>
    </div>
  );
};
