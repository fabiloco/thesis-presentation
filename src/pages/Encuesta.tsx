import { FormDesplegableItem } from "../components/FormDesplegableItem";

import image1 from "../assets/thesisForm/image1.png";
import image2 from "../assets/thesisForm/image2.png";
import image3 from "../assets/thesisForm/image3.png";
import image4 from "../assets/thesisForm/image4.png";
import image5 from "../assets/thesisForm/image5.png";
import image6 from "../assets/thesisForm/image6.png";

export const ThesisForm = () => {
  const data = [
    {
      q: "¿Has oído hablar de tecnologías utilizadas en arquitectura y construcción, como software de diseño, impresión 3D, drones, realidad virtual, inteligencia artificial (IA) u otras?",
      image: image1,
    },
    {
      q: "¿Conoces las utilidades de estas herramientas tecnológicas al inicio de los procesos de diseño y construcción?",
      image: image2,
    },
    {
      q: "¿Has utilizado nuevas tecnologías, como BIM, drones, RV, IA, impresión 3D?",
      image: image3,
    },
    {
      q: "¿Te sentirías más interesado en un proyecto arquitectónico si supieras que se utilizan tecnologías avanzadas, incluyendo la inteligencia artificial y drones, para su diseño y construcción?",
      image: image4,
    },
    {
      q: "¿Cuánto conocimiento tienes acerca del uso de estas herramientas tecnológicas como apoyo al inicio de los proyectos de diseño y construcción?",
      image: image5,
    },
    {
      q: "¿Te sientes inseguro al considerar la posibilidad de que las tecnologías avanzadas, como la impresión 3D en construcción, puedan cambiar la forma en que se construyen edificios?",
      image: image6,
    },
  ];
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center mt-10">
        <h3 className="z-20 mb-10 text-3xl font-bold">Encuestas</h3>
        <div className=" flex flex-col gap-3 px-12">
          {data.map(({ q, image }) => (
            <FormDesplegableItem header={q}>
              <div className="flex justify-center items-center">
                <img className="w-4/5" src={image} alt="" />
              </div>
            </FormDesplegableItem>
          ))}
        </div>
      </div>
    </>
  );
};
