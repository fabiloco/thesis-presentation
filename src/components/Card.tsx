import { FC } from 'react';

export type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

export const Card: FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className='flex flex-col relative  bg-red-100 w-[512px] h-96 group cursor-pointer'>
      <img
        src={imageSrc}
        className='absolute top-0 w-full h-full object-cover z-10'
      />
      <div className='z-20 bg-neutral-950 bg-opacity-50 w-full h-full flex flex-col justify-end px-8 py-10 text-white '>
        <h4 className='font-bold text-3xl mb-4 group-hover:-translate-y-9 transition-all'>
          {title}
        </h4>
        <p className='group-hover:-translate-y-9 transition-all'>
          {description}
        </p>
      </div>
    </div>
  );
};
