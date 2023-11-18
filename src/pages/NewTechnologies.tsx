import { Card, CardProps } from '../components';

import newTechnologies1 from '../assets/new-technologies1.jpg';
import newTechnologies2 from '../assets/new-technologies2.jpg';
import newTechnologies3 from '../assets/new-technologies3.png';
import newTechnologies4 from '../assets/new-technologies4.png';

export const NewTechnologies = () => {
  const content: Array<CardProps> = [
    {
      title: 'Arquitectura digital',
      description:
        'La arquitectura digital va más allá de simplemente incorporar las técnicas y tecnologías más recientes de la arquitectura moderna, así como tendencias y disciplinas. “La verdadera esencia de la arquitectura digital radica en la forma en que aborda los problemas y su capacidad para sugerir alternativas factibles, que están dominadas por relaciones no estándar y diseños no repetitivos alejados de su conexión histórica.” (Hadjadji, 2023).',
      imageSrc: newTechnologies1,
    },
    {
      title: 'Modelo BIM',
      description:
        'Un modelo BIM puede, como modelo único inteligente, contener documentación de construcción, visualización, cantidad de stock, estimación de costos y planificación (Bertze, 2016).',
      imageSrc: newTechnologies2,
    },
    {
      title: 'Internet de las cosas',
      description:
        '“Un edificio inteligente, ya sea una oficina, una vivienda, una planta industrial o una zona de ocio, proporciona a sus ocupantes servicios personalizados gracias al conocimiento de los objetos que contiene.“ (Kumar, 2021).',
      imageSrc: newTechnologies3,
    },
    {
      title: 'IA',
      description:
        'La Inteligencia Artificial (IA) es la imitación de los procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos. Dos ramas principales de la IA son el aprendizaje automático (ML) y el aprendizaje profundo (DL), que pueden proporcionar a las empresas una amplia gama de beneficios si se aplican adecuadamente (Hussain, 2021).',
      imageSrc: newTechnologies4,
    },
    {
      title: 'Impresión y fabricación 3d',
      description:
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit.',
      imageSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg',
    },
    {
      title: 'Drones',

      description:
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit.',
      imageSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg',
    },
    {
      title: 'RV',
      description:
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit.',
      imageSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg',
    },
  ];
  return (
    <section
      id='newTechnologies'
      className='mx-auto max-w-6xl mt-4'
      style={{
        backgroundImage: 'radial-gradient(#F00 1px, #00000000 1px)',
        backgroundSize: '20px 20px',
        opacity: '0.4',
        height: '100%',
      }}
    >
      <div className='py-40 flex justify-center items-center flex-col gap-8'>
        <h2 className='text-4xl font-bold underline underline-offset-3 decoration-4 underline-offset-4 decoration-blue-500'>
          Nuevas tecnologías
        </h2>
        <p className='w-[512px] text-center text-lg'>
          En un mundo impulsado por la revolución digital del siglo XX, la
          integración de tecnología digital ha transformado la arquitectura. La
          convergencia de lo dinámico y lo digital ha potenciado la creatividad,
          cambiando la forma en que los arquitectos conciben proyectos. El
          rápido desarrollo de herramientas digitales ha sido fundamental en
          este cambio.
        </p>
      </div>
      <div className='flex justify-center items-center w-full'>
        <div className='grid grid-cols-2 gap-4'>
          {content.map(({ imageSrc, description, title }) => (
            <Card title={title} description={description} imageSrc={imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};
