import { ObjectiveCard } from '../components/ObjectiveCard';

import objetive1 from '../assets/objetive1.jpg';
import objetive2 from '../assets/objetive2.png';
import objetive3 from '../assets/objetive3.png';

export const Objectives = () => {
  const data = {
    general: {
      title:
        'Analizar las nuevas herramientas tecnológicas como apoyo en las etapas iniciales de un proyecto de diseño arquitectónico.',
      img: objetive1,
    },
    especificos: [
      {
        title:
          ' Identificar las herramientas tecnológicas actuales disponibles para apoyar el inicio de proyectos de diseño arquitectónico, a través de una exhaustiva consulta de referentes en la industria.',
        img: objetive2,
      },
      {
        title:
          'Evaluar de manera sistemática las posibles aplicaciones e intervenciones de estas herramientas en las distintas fases del proceso de diseño arquitectónico, representando la información mediante un cuadro que muestre las herramientas pertinentes para cada fase.',
        img: objetive3,
      },
    ],
  };

  return (
    <>
      <div
        id='objectives'
        style={{
          height: 'calc(100vh - 72px)',
        }}
        className='w-full grid grid-cols-2 grid-rows-2 gap-4 mt-10 px-12'
      >
        <ObjectiveCard
          isGeneral
          text={data.general.title}
          img={data.general.img}
        />

        {data.especificos.map((item, index) => (
          <ObjectiveCard
            key={index}
            isGeneral={false}
            text={item.title}
            img={item.img}
          />
        ))}

        {/* <div className="row-span-2 bg-red-500 "></div>
        <div className="bg-red-500">2</div>
        <div className="col-start-2 bg-red-500">3</div> */}
      </div>
    </>
  );
};
