import { ExpectedImpactItem } from "../components";
import "../index.css";

export const ExpectedImpact = () => {
  const data = [
    {
      title: "Area Social",
      icon: "",
    },
    {
      title: "Area Economica",
    },
    {
      title: "Area Ambiental",
    },
    {
      title: "Area Academica y Cientifica",
    },
    {
      title: "Area Tecnologica y Cultural",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center my-5">
        <h2 className="mb-10 text-4xl font-bold underline underline-offset-3 decoration-4 underline-offset-4 decoration-blue-500">
          Impacto Esperado
        </h2>

        <div className="flex flex-row w-full justify-center items-center">
          {data.map(({ title }) => (
            <ExpectedImpactItem title={title} />
          ))}
        </div>
      </div>{" "}
    </>
  );
};
