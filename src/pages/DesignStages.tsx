import designStages1 from '../assets/designState1.webp';
import designStages2 from '../assets/designState2.gif';
import designStages3 from '../assets/designState3.webp';
import designStages4 from '../assets/designState4.mp4';
import designStages5 from '../assets/designState5.mp4';
import designStages6 from '../assets/designState6.mp4';
import designStages7 from '../assets/designState7.mp4';
import designStages8 from '../assets/designState8.mp4';

import representation1 from '../assets/representation1.jpeg';
import { StageItem, DesignStageItem } from '../components';

export const DesignStages = () => {
  const content: Array<StageItem> = [
    {
      stage: '1. Conceptualización y Definición del Proyecto',
      subStages: [
        {
          title: '1.1 Análisis del sitio y su contexto.',
          tools: [
            '1.1.1. Agisoft Metashape',
            '1.1.2. FARO Focus Laser Scanner',
          ],
          source: designStages1,
          isVideo: false,
          showButtom: true,
          representations: [representation1],
        },
        {
          title: '1.2. Planificacion y gestion ',
          tools: ['1.2.1. Notion', '1.2.2. Clickup'],
          source: designStages2,
          isVideo: false,
          showButtom: true,
          representations: [''],
        },
      ],
    },
    {
      stage: '2. Diseño Preliminar – concepto',
      subStages: [
        {
          title: '2.1. Desarrollo de ideas y conceptos iniciales.',
          tools: [
            '1. Midjourney',
            '2. Dall-e',
            '3. Runway ML',
            '4. Artbreeder.',
          ],
          source: designStages3,
          isVideo: false,
          showButtom: true,
          representations: [''],
        },
        {
          title: '2. Evaluación de la viabilidad de las ideas.',
          tools: ['1. Impresión 3D', '2. Kaedim'],
          source: designStages4,
          isVideo: true,
          showButtom: true,
          representations: [''],
        },
        {
          title: '3. Discusión y revisión con el cliente.',
          tools: ['1. VR (Realidad virtual)'],
          source: designStages5,
          isVideo: true,
          showButtom: true,
          representations: [''],
        },
      ],
    },
    {
      stage: '3. Diseño Esquemático',
      subStages: [
        {
          title: '3.1.1. OpenBuildings Designer',
          tools: [],
          source: designStages6,
          isVideo: true,
          showButtom: false,
          representations: [''],
        },
        {
          title: '3.1.2 BricsCAD BIM',
          tools: [],
          source: designStages7,
          isVideo: true,
          showButtom: false,
          representations: [''],
        },
        {
          title: '3.1.3 Autodesk Reviti',
          tools: [],
          source: designStages8,
          isVideo: true,
          showButtom: false,
          representations: [''],
        },
      ],
    },
    {
      stage: '4. Construcción',
      subStages: [
        {
          title:
            '4.1. Proceso automatizado de fabricación de elementos de construcción o estructuras enteras mediante una impresora 3D',
          tools: ['4.1.1 Hadrian-x', '4.1.2. Apis car', '4.1.3. Be more 3D'],
          source: designStages6,
          isVideo: true,
          showButtom: false,
          representations: [''],
        },
      ],
    },
  ];

  return (
    <section id='designStages' className='w-full mt-4'>
      <div className='py-40 flex justify-center items-center flex-col gap-8 bg-white z-30'>
        <h2 className='text-4xl font-bold underline underline-offset-3 decoration-4 underline-offset-4 decoration-blue-500'>
          Etapas de diseño
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
      <div className='flex justify-center items-center w-full bg-white z-30'>
        <div className='flex flex-col w-full'>
          {content.map(({ stage, subStages }, index) => (
            <DesignStageItem
              index={index}
              subStages={subStages}
              stage={stage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
