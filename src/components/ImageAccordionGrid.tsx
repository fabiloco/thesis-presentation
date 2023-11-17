import React, { FC, ReactNode } from 'react';
import { Accordeon } from './Accordeon';

export type ImageAccordionGridItem = {
  title: string;
  accordeonTitle: string;
  itemContent: ReactNode;
  imageSrc: string;
};

type ImageAccordionGrid = {
  id: string;
  content: Array<ImageAccordionGridItem>;
};

export const ImageAccordionGrid: FC<ImageAccordionGrid> = ({ id, content }) => {
  return (
    <div id={id} className='w-full grid grid-cols-2 min-h-[480px] bg-blue-700 '>
      {content.map(
        ({ title, accordeonTitle, itemContent, imageSrc }, index) => {
          if (index % 2 === 0) {
            return (
              <>
                <div className='h-full'>
                  <img
                    className='object-cover w-full min-h-[480px]'
                    src={imageSrc}
                  />
                </div>
                <div className='w-full h-full flex flex-col justify-center px-24 py-24'>
                  <h2 className='text-white text-5xl font-bold mb-4'>
                    {title}
                  </h2>
                  <Accordeon header={accordeonTitle}>{itemContent}</Accordeon>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className='w-full h-full flex flex-col justify-center px-24 py-24'>
                  <h2 className='text-white text-5xl font-bold mb-4'>
                    {title}
                  </h2>
                  <Accordeon header={accordeonTitle}>{itemContent}</Accordeon>
                </div>
                <div className='h-full'>
                  <img
                    className='object-cover w-full min-h-[480px]'
                    src={imageSrc}
                  />
                </div>
              </>
            );
          }
        },
      )}
    </div>
  );
};
