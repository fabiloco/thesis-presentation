import designStages1 from '../assets/designState1.webp';
import designStages2 from '../assets/designState2.gif';
import designStages3 from '../assets/designState3.webp';
import designStages4 from '../assets/designState4.mp4';
import designStages5 from '../assets/designState5.mp4';
import designStages6 from '../assets/designState6.mp4';
import designStages7 from '../assets/designState7.mp4';
import designStages8 from '../assets/designState8.mp4';
import designStages9 from '../assets/designState9.gif';

import representation1 from '../assets/representation1.jpeg';
import representation2 from '../assets/representation2.jpeg';
import representation3 from '../assets/representation3.jpeg';

import representation4 from '../assets/representation4.png';
import representation5 from '../assets/representation5.jpeg';

import representation6 from '../assets/representation6.webp';
import representation7 from '../assets/representation7.webp';
import representation8 from '../assets/representation8.png';
import representation9 from '../assets/representation9.webp';

import representation10 from '../assets/representation10.jpeg';
import representation11 from '../assets/representation11.jpeg';

import representation12 from '../assets/representation12.jpeg';

import representation13 from '../assets/representation13.png';
import representation14 from '../assets/representation14.png';
import representation15 from '../assets/representation15.png';

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
          representations: [representation1, representation2, representation3],
        },
        {
          title: '1.2. Planificacion y gestion ',
          tools: ['1.2.1. Notion', '1.2.2. Clickup'],
          source: designStages2,
          isVideo: false,
          showButtom: true,
          representations: [representation4, representation5],
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
          representations: [
            representation6,
            representation7,
            representation8,
            representation9,
          ],
        },
        {
          title: '2. Evaluación de la viabilidad de las ideas.',
          tools: ['1. Impresión 3D', '2. Kaedim'],
          source: designStages4,
          isVideo: true,
          showButtom: true,
          representations: [representation10, representation11],
        },
        {
          title: '3. Discusión y revisión con el cliente.',
          tools: ['1. VR (Realidad virtual)'],
          source: designStages5,
          isVideo: true,
          showButtom: true,
          representations: [representation12],
        },
      ],
    },
    {
      stage: '3. Diseño Esquemático',
      subStages: [
        {
          title:
            '3.1 Modelación de concepto espacial orientado a la estructura. ',
          tools: [
            '3.1.1. OpenBuildings Designer',
            '3.1.2. BricsCAD BIM',
            '3.1.3. Autodesk Revit',
          ],
          source: designStages9,
          isVideo: false,
          showButtom: true,
          representations: [
            representation13,
            representation14,
            representation15,
          ],
        },
      ],
    },
    {
      stage: '4. Construcción',
      subStages: [
        {
          title: '4.1.1 Hadrian-x',
          tools: [],
          source: designStages8,
          isVideo: true,
          showButtom: false,
          representations: [''],
        },
        {
          title: '4.1.2. Apis cor',
          tools: [],
          source: designStages6,
          isVideo: true,
          showButtom: false,
          representations: [''],
        },
        {
          title: '4.1.3. Be more 3D',
          tools: [],
          source: designStages7,
          isVideo: true,
          showButtom: false,
          representations: [''],
        },
      ],
    },
  ];

  return (
    <section id='designStates' className='w-full mt-4'>
      <div className='py-40 flex justify-center items-center flex-col gap-8 bg-white z-30'>
        <h2 className='text-4xl font-bold underline underline-offset-3 decoration-4 underline-offset-4 decoration-blue-500'>
          Etapas del diseño y construcción
        </h2>
        <p className='w-[512px] text-center text-lg'>
          Este segmento establece una conexión entre las nuevas tecnologías y
          las etapas del diseño arquitectónico, presentando una serie de
          herramientas que contribuyen de manera significativa a los procesos de
          diseño y construcción.
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
