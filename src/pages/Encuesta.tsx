import { PieChart, FormDesplegableItem, PieChartProps } from '../components';

type ThesisFormData = [
  {
    q: string;
    chart: PieChartProps;
  },
];
export const ThesisForm = () => {
  const data: ThesisFormData = [
    {
      q: '¿Has oído hablar de tecnologías utilizadas en arquitectura y construcción, como software de diseño, impresión 3D, drones, realidad virtual, inteligencia artificial (IA) u otras?',
      chart: {
        data: [
          ['Opción', 'Votantes'],
          ['Sí', 83.3],
          ['No', 16.7],
        ],
      },
    },
    {
      q: '¿Conoces las utilidades de estas herramientas tecnológicas al inicio de los procesos de diseño y construcción?',
      chart: {
        data: [
          ['Opción', 'Votantes'],
          ['Sí, he oído hablar de algunas de ellas', 88.9],
          ['No, estas tecnologías me son desconocidas', 11.1],
        ],
      },
    },
    {
      q: '¿Has utilizado nuevas tecnologías, como BIM, drones, RV, IA, impresión 3D?',
      chart: {
        data: [
          ['Opción', 'Votantes'],
          ['Sí', 66.7],
          ['No', 33.3],
        ],
      },
    },
    {
      q: '¿Te sentirías más interesado en un proyecto arquitectónico si supieras que se utilizan tecnologías avanzadas, incluyendo la inteligencia artificial y drones, para su diseño y construcción?',
      chart: {
        data: [
          ['Opción', 'Votantes'],
          ['Sí', 38.9],
          ['No', 61.1],
        ],
      },
    },
    {
      q: '¿Cuánto conocimiento tienes acerca del uso de estas herramientas tecnológicas como apoyo al inicio de los proyectos de diseño y construcción?',
      chart: {
        data: [
          ['Opción', 'Votantes'],
          ['Experto en el tema', 1],
          ['Conozco los conceptos básicos', 11.1],
          ['Tengo algo de conocimiento', 55.6],
          ['No tengo conocimiento', 33.3],
        ],
      },
    },
    {
      q: '¿Te sientes inseguro al considerar la posibilidad de que las tecnologías avanzadas, como la impresión 3D en construcción, puedan cambiar la forma en que se construyen edificios?',
      chart: {
        data: [
          ['Opción', 'Votantes'],
          ['Sí, me sentiría más interesado', 88.9],
          ['No, no influiría en mi interés', 11.1],
        ],
      },
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
          {data.map(({ q, chart }) => (
            <FormDesplegableItem header={q} textColor='white'>
              <div className='flex justify-center items-center'>
                <PieChart data={chart.data} />
                {/*
                <LazyLoadImage
                  loading='eager'
                  className='w-4/5'
                  width={'100%'}
                  src={image}
                  alt=''
                />
                */}
              </div>
            </FormDesplegableItem>
          ))}
        </div>
      </div>
    </section>
  );
};
