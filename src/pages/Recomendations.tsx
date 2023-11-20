import { CardWithIcon, CardWithIconProps } from '../components';

import { FaBookReader, FaPencilAlt, FaCity } from 'react-icons/fa';
import { IoHardwareChipSharp, IoMegaphone } from 'react-icons/io5';

export const Recomendations = () => {
  const content: Array<CardWithIconProps> = [
    {
      title: 'Capacitación continua',
      icon: <FaBookReader size='10em' />,
    },
    {
      title: 'Inversión en software y hardware',
      icon: <IoHardwareChipSharp size='12em' />,
    },
    {
      title: 'Educación del cliente, Evaluación de ROI',
      icon: <FaPencilAlt size='10em' />,
    },
    {
      title: 'Sensibilización y divulgación',
      icon: <IoMegaphone size='10em' />,
    },
    {
      title: 'Promoción de la sostenibilidad',
      icon: <FaCity size='10em' />,
    },
  ];
  return (
    <section id='recomendations' className='w-full mt-4'>
      <div className='pt-40 pb-28 flex justify-center items-center flex-col gap-8 bg-white z-30'>
        <h2 className='text-4xl font-bold underline underline-offset-3 decoration-4 underline-offset-4 decoration-blue-500'>
          Recomendaciones
        </h2>
      </div>
      <div className='flex justify-center items-center w-full'>
        <div className='grid grid-cols-3 gap-4'>
          {content.map(({ title, icon }, index) => (
            <CardWithIcon key={index} index={index} title={title} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
