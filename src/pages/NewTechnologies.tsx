import { Card, CardProps } from '../components';

import newTechnologies1 from '../assets/new-technologies1.jpg';
import newTechnologies2 from '../assets/new-technologies2.jpg';
import newTechnologies3 from '../assets/new-technologies3.png';
import newTechnologies4 from '../assets/new-technologies4.png';
import newTechnologies5 from '../assets/new-technologies5.mp4';
import newTechnologies6 from '../assets/new-technologies6.gif';
import newTechnologies7 from '../assets/new-technologies7.gif';

export const NewTechnologies = () => {
  const content: Array<CardProps> = [
    {
      title: 'Arquitectura digital',
      description:
        'La arquitectura digital va más allá de simplemente incorporar las técnicas y tecnologías más recientes de la arquitectura moderna, así como tendencias y disciplinas. “La verdadera esencia de la arquitectura digital radica en la forma en que aborda los problemas y su capacidad para sugerir alternativas factibles, que están dominadas por relaciones no estándar y diseños no repetitivos alejados de su conexión histórica.” (Hadjadji, 2023).',
      imageSrc: newTechnologies1,
      isVideo: false,
    },
    {
      title: 'Modelo BIM',
      description:
        'Un modelo BIM puede, como modelo único inteligente, contener documentación de construcción, visualización, cantidad de stock, estimación de costos y planificación (Bertze, 2016).',
      imageSrc: newTechnologies2,
      isVideo: false,
    },
    {
      title: 'Internet de las cosas',
      description:
        '“Un edificio inteligente, ya sea una oficina, una vivienda, una planta industrial o una zona de ocio, proporciona a sus ocupantes servicios personalizados gracias al conocimiento de los objetos que contiene.“ (Kumar, 2021).',
      imageSrc: newTechnologies3,
      isVideo: false,
    },
    {
      title: 'IA',
      description:
        'La Inteligencia Artificial (IA) es la imitación de los procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos. Dos ramas principales de la IA son el aprendizaje automático (ML) y el aprendizaje profundo (DL), que pueden proporcionar a las empresas una amplia gama de beneficios si se aplican adecuadamente (Hussain, 2021).',
      imageSrc: newTechnologies4,
      isVideo: false,
    },
    {
      title: 'Impresión y fabricación 3d',
      description:
        'Los métodos de diseño mediante impresión 3D permiten, ya en la actualidad, acortar los tiempos de diseño y desarrollo, mejorando la comunicación y la colaboración entre las diferentes partes y ayudando así a la resolución de problemas que se encuentran entre el mundo de la ingeniería y el diseño.',
      imageSrc: newTechnologies5,
      isVideo: true,
    },
    {
      title: 'Drones',

      description:
        'Los drones, o vehículos aéreos no tripulados (UAV), son dispositivos controlados remotamente que han transformado diversas industrias. Su versatilidad y capacidad para transportar cámaras y sensores los hacen valiosos para fotografía aérea, cartografía, agricultura de precisión y vigilancia, entre otras aplicaciones. Su rápida expansión y capacidad para simplificar tareas complejas, así como llegar a lugares de difícil acceso, los posicionan como una tecnología innovadora y transformadora en la actualidad.',
      imageSrc: newTechnologies6,
      isVideo: false,
    },
    {
      title: 'RV',
      description:
        '“Durante las últimas décadas, la tecnología de realidad virtual (RV) ha sido cada vez más reconocida por la industria de la arquitectura, la ingeniería y la construcción (AEC) por su capacidad para proporcionar entornos tridimensionales (3D) multisensoriales que sumergen al usuario en un entorno virtual.” (Zhang, 2020)',
      imageSrc: newTechnologies7,
      isVideo: false,
    },
  ];

  return (
    <section
      style={{
        backgroundImage: 'radial-gradient(#F00 1px, #00000000 1px)',
        backgroundSize: '20px 20px',
        opacity: '0.4',
        height: '100%',
      }}
      id='newTechnologies'
      className='mx-auto max-w-6xl mt-4'
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
          {content.map(({ imageSrc, description, title, isVideo }, index) => (
            <Card
              key={index}
              title={title}
              description={description}
              imageSrc={imageSrc}
              isVideo={isVideo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
