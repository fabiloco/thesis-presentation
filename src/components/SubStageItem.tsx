import { FC, useState } from 'react';

import { IoMdAdd } from 'react-icons/io';

import { SubStageItemProps } from '.';

export const SubStageItem: FC<SubStageItemProps> = ({
  tools,
  title,
  source,
  isVideo,
  showButtom,
  representations,
}) => {
  const [open, isOpen] = useState(false);

  const toggleOpen = () => isOpen((preveState) => !preveState);

  return (
    <div className={`w-full h-full flex relative overflow: hidden;`}>
      {isVideo ? (
        <video
          style={{ aspectRatio: '1' }}
          className='absolute w-full h-full object-cover left-0 z-10'
          autoPlay
          muted
          src={source}
        />
      ) : (
        <img
          className='absolute w-full h-full object-cover left-0'
          src={source}
        />
      )}

      <div className='bg-neutral-950 bg-opacity-50 z-20 w-full h-full px-8 flex flex-col justify-center'>
        <h4 className='font-bold text-2xl mb-6  text-white'>{title}</h4>
        {tools.map((tool, index) => (
          <div key={index}>
            <p className='font-mono text-white text-lg'>{tool}</p>
          </div>
        ))}
        <div className='flex items-center'>
          {showButtom && (
            <div
              className='bg-blue-600 w-12 h-12 flex justify-center items-center mt-12 cursor-pointer'
              onClick={toggleOpen}
            >
              <IoMdAdd size='2em' color='#fff' />
            </div>
          )}

          {open && (
            <div className='flex'>
              {representations.map((representation) => (
                <img src={representation} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
