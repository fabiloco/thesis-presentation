import { FC, ReactNode, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { FaChevronDown } from 'react-icons/fa';

export type AccordeonProps = {
  header: string;
  children: ReactNode;
  textColor: 'white' | 'black';
};

export const Accordeon: FC<AccordeonProps> = ({
  header,
  textColor = 'white',
  children,
}) => {
  const [open, onOpen] = useState(false);

  const toggleOpen = () => onOpen((prevState) => !prevState);

  const buttonIconClass = open ? 'rotate-180' : 'rotate-0';

  const color = textColor === 'white' ? 'text-white' : 'text-black';

  return (
    <>
      <div
        className='flex justify-between items-center w-full border-2 border-transparent border-b-white cursor-pointer'
        onClick={toggleOpen}
      >
        <h4 className={`font-semibold text-2xl ${color}`}>{header}</h4>

        <div className={`${buttonIconClass} transition-all`}>
          <FaChevronDown color={textColor === 'white' ? '#fff' : '#000'} />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -100 }}
            animate={{ height: 'fit-content', opacity: 100, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -100 }}
            className={`w-full text-md mt-6 ${color}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
