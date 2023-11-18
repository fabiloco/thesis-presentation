import { ObjectiveCard } from "../components/ObjectiveCard";

export const Objectives = () => {
  const data = {
    general:
      "Analizar las nuevas herramientas tecnológicas como apoyo en las etapas iniciales de un proyecto de diseño arquitectónico.",
    especificos: [
      " Identificar las herramientas tecnológicas actuales disponibles para apoyar el inicio de proyectos de diseño arquitectónico, a través de una exhaustiva consulta de referentes en la industria.",

      "Evaluar de manera sistemática las posibles aplicaciones e intervenciones de estas herramientas en las distintas fases del proceso de diseño arquitectónico, representando la información mediante un cuadro que muestre las herramientas pertinentes para cada fase.",
    ],
  };

  return (
    <>
      <div
        style={{
          height: "calc(100vh - 72px)",
        }}
        className="w-full grid grid-cols-2 grid-rows-2 gap-4 mt-10 px-12"
      >
        <ObjectiveCard isGeneral text={data.general} />

        {data.especificos.map((item) => (
          <ObjectiveCard isGeneral={false} text={item} />
        ))}

        {/* <div className="row-span-2 bg-red-500 "></div>
        <div className="bg-red-500">2</div>
        <div className="col-start-2 bg-red-500">3</div> */}
      </div>
    </>
  );
};
