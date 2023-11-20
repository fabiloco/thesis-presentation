import { FC } from "react";
import { Accordeon, AccordeonProps } from "./Accordeon";

export const FormDesplegableItem: FC<AccordeonProps> = ({
  header,
  children,
}) => {
  return (
    <>
      <div className="text-black px-8 py-6 border border-blue-500/50 rounded">
        <Accordeon header={header} textColor="black">
          {children}
        </Accordeon>
      </div>
    </>
  );
};
