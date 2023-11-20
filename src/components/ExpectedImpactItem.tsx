import "../index.css";

interface ExpectedItemProps {
  title: string;
}

export const ExpectedImpactItem = (props: ExpectedItemProps) => {
  return (
    <>
      <div className="mx-5 my-2 px-5 w-full h-40 border-blue-600 rounded border-2 text-center flex justify-center items-center">
        <h4 className={`font-semibold text-xl text-black`}>{props.title}</h4>
      </div>
    </>
  );
};
