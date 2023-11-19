import { FaChevronDown } from 'react-icons/fa';

import { FC, ReactNode, useState } from 'react';

type AccordeonProps = {
  header: string;
  children: ReactNode;
};

export const Accordeon: FC<AccordeonProps> = ({ header, children }) => {
  const [open, onOpen] = useState(false);

  const toggleOpen = () => onOpen((prevState) => !prevState);

  const buttonIconClass = open ? 'rotate-180' : 'rotate-0';

  return (
    <>
      <div
        className='flex justify-between w-full pb-2 border-2 border-transparent border-b-neutral-50 cursor-pointer'
        onClick={toggleOpen}
      >
        <h4 className='font-semibold text-2xl text-white'>{header}</h4>

        <div className={`${buttonIconClass} transition-all`}>
          <FaChevronDown color='#fff' />
        </div>
      </div>

      {open && <div className='w-full text-white text-md mt-6'>{children}</div>}
    </>
  );
};
