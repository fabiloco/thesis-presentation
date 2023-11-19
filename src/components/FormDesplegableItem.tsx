import { FC } from "react";
import { Accordeon, AccordeonProps } from "./Accordeon";

export const FormDesplegableItem: FC<AccordeonProps> = ({
  header,
  children,
}) => {
  return (
    <>
      <div className="bg-blue-700 rounded-lg px-5 py-2">
        <Accordeon header={header}> {children}</Accordeon>
      </div>
    </>
  );
};
