import { FC } from "react";

interface ObjectiveCardProps {
  text: string;
  isGeneral: boolean;
}

export const ObjectiveCard: FC<ObjectiveCardProps> = ({ text, isGeneral }) => {
  const generalObjective = (
    <div className="w-full h-full relative row-span-2 text-neutral-50 bg-opacity-20 bg-neutral-950 flex flex-col justify-center items-center ">
      <img
        src="https://picsum.photos/1000/1000/?blur=4"
        className="absolute top-0 w-full h-full object-cover z-10"
      />
      <div className="z-20 bg-black bg-opacity-50 w-full h-full flex flex-col justify-center text-white p-20 ">
        <h3 className="z-20 mb-12 text-3xl font-bold">Objetivo General</h3>
        <p className="z-20 font-semibold text-2xl group-hover:-translate-y-9 transition-all">
          {text}
        </p>
      </div>
    </div>
  );

  const specificObjective = (
    <div className="h-full w-full relative col-start-2 text-neutral-50 bg-opacity-50 bg-neutral-950 flex flex-col justify-center items-center">
      <img
        src="https://picsum.photos/1000/1000/?blur=2"
        className="absolute top-0 w-full h-full object-cover z-0"
      />
      <div className="z-20 bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white p-20   ">
        <h3 className="z-20 mb-12 text-2xl font-bold">Objetivo especifico</h3>
        <p className="z-20 text-xl group-hover:-translate-y-9 transition-all">
          {text}
        </p>
      </div>
    </div>
  );

  return isGeneral ? generalObjective : specificObjective;
};
