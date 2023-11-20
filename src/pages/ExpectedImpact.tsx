import { ExpectedImpactItem } from '../components';
import '../index.css';

export const ExpectedImpact = () => {
  const data = [
    {
      title: 'Area Social',
      icon: '',
    },
    {
      title: 'Area Economica',
    },
    {
      title: 'Area Ambiental',
    },
    {
      title: 'Area Academica y Cientifica',
    },
    {
      title: 'Area Tecnologica y Cultural',
    },
  ];
  return (
    <>
      <section id='newTechnologies' className='mx-auto max-w-6xl mt-4'>
        <div className='pt-40 pb-28 flex justify-center items-center flex-col gap-8'>
          <h2 className='text-4xl font-bold underline underline-offset-3 decoration-4 underline-offset-4 decoration-blue-500'>
            Nuevas tecnologías
          </h2>
        </div>

        <div className='flex flex-row w-full justify-center items-center'>
          {data.map(({ title }) => (
            <ExpectedImpactItem title={title} />
          ))}
        </div>
      </section>{' '}
    </>
  );
};
