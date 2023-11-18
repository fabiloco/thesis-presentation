import "../index.css";

interface MasonryItemProps {
  title: string;
  color: number;
}

export const ExpectedImpactItem = (props: MasonryItemProps) => {
  return (
    <div
      className={`bg-blue-500 ${props.color} h-36 m-4 w-42 font-bold text-lg hover:underline underline-offset-2 decoration-2
       decoration-blue-500 transition-all flex justify-center items-center`}
    >
      {props.title}
    </div>
  );
};
