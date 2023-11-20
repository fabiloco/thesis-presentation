import { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

export type CardWithIconProps = {
  title: string;
  icon: ReactNode;
};

interface CardWithIconPropsInterface extends CardWithIconProps {
  index: number;
}

export const CardWithIcon: FC<CardWithIconPropsInterface> = ({
  title,
  icon,
  index,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 'all' }}
      transition={{ delay: index * 0.1 }}
      className='flex flex-col relative w-[352px] h-72 group cursor-pointer'
    >
      <div className='z-20 bg-blue-600 w-full h-full flex flex-col justify-around text-center items-center px-8 py-10 text-white gap-6'>
        <h4 className='font-bold text-3xl mb-4'>{title}</h4>
        {icon}
      </div>
    </motion.article>
  );
};
