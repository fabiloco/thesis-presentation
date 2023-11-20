import { FormDesplegableItem } from '../components/FormDesplegableItem';

import { Image } from '@nextui-org/image';

import image1 from '../assets/thesisForm/image1.png';
import image2 from '../assets/thesisForm/image2.png';
import image3 from '../assets/thesisForm/image3.png';
import image4 from '../assets/thesisForm/image4.png';
import image5 from '../assets/thesisForm/image5.png';
import image6 from '../assets/thesisForm/image6.png';

export const ThesisForm = () => {
  const data = [
    {
      q: '¿Has oído hablar de tecnologías utilizadas en arquitectura y construcción, como software de diseño, impresión 3D, drones, realidad virtual, inteligencia artificial (IA) u otras?',
      image: image1,
    },
    {
      q: '¿Conoces las utilidades de estas herramientas tecnológicas al inicio de los procesos de diseño y construcción?',
      image: image2,
    },
    {
      q: '¿Has utilizado nuevas tecnologías, como BIM, drones, RV, IA, impresión 3D?',
      image: image3,
    },
    {
      q: '¿Te sentirías más interesado en un proyecto arquitectónico si supieras que se utilizan tecnologías avanzadas, incluyendo la inteligencia artificial y drones, para su diseño y construcción?',
      image: image4,
    },
    {
      q: '¿Cuánto conocimiento tienes acerca del uso de estas herramientas tecnológicas como apoyo al inicio de los proyectos de diseño y construcción?',
      image: image5,
    },
    {
      q: '¿Te sientes inseguro al considerar la posibilidad de que las tecnologías avanzadas, como la impresión 3D en construcción, puedan cambiar la forma en que se construyen edificios?',
      image: image6,
    },
  ];
  return (
    <section id='survey' className='w-full mt-4'>
      <div className='py-40 flex justify-center items-center flex-col gap-8 bg-white z-30'>
        <h2 className='text-4xl font-bold underline underline-offset-3 decoration-4 underline-offset-4 decoration-blue-500'>
          Encuestas
        </h2>
      </div>
      <div className='flex justify-center items-center w-full bg-white z-30'>
        <div className='flex gap-4 flex-col w-full max-w-7xl'>
          {data.map(({ q, image }) => (
            <FormDesplegableItem header={q} textColor='white'>
              <div className='flex justify-center items-center'>
                <Image className='w-4/5' src={image} alt='' />
              </div>
            </FormDesplegableItem>
          ))}
        </div>
      </div>
    </section>
  );
};
