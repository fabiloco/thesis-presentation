import { FC } from 'react';

import { SubStageItem } from './SubStageItem';

export type SubStageItemProps = {
  title: string;
  tools: Array<string>;
  source: string;
  isVideo: boolean;
  showButtom: boolean;
  representations: Array<string>;
};

export type StageItem = {
  stage: string;
  subStages: Array<SubStageItemProps>;
};

interface DesignStageItemProps extends StageItem {
  index: number;
}

export const DesignStageItem: FC<DesignStageItemProps> = ({
  stage,
  subStages,
  index,
}) => {
  if (index === 3) {
    return (
      <div
        className={`flex flex-col w-full h-screen ${
          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        <div className='flex items-center w-full h-1/4 bg-neutral-200 z-30'>
          <h3 className='text-6xl w-auto leading-1 font-bold text-blue-800/80 mx-4 text-center'>
            {stage}
          </h3>
        </div>

        <div className='flex h-3/4 flex-row w-full'>
          {subStages.map(
            (
              { title, tools, source, representations, isVideo, showButtom },
              index,
            ) => (
              <SubStageItem
                showButtom={showButtom}
                isVideo={isVideo}
                key={index}
                tools={tools}
                representations={representations}
                source={source}
                title={title}
              />
            ),
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex w-full h-screen ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className='flex items-center w-full h-full bg-neutral-200 z-30'>
        <h3 className='text-6xl w-auto leading-1 font-bold text-blue-800/80 mx-4 text-center'>
          {stage}
        </h3>
      </div>

      <div className='flex flex-col w-full'>
        {subStages.map(
          (
            { title, tools, source, representations, isVideo, showButtom },
            index,
          ) => (
            <SubStageItem
              showButtom={showButtom}
              isVideo={isVideo}
              key={index}
              tools={tools}
              representations={representations}
              source={source}
              title={title}
            />
          ),
        )}
      </div>
    </div>
  );
};
