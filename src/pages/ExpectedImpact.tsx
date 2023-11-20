import { ExpectedImpactItem } from '../components';
import '../index.css';

export const ExpectedImpact = () => {
  const data = [
    {
      title: 'Área Social',
      icon: '',
    },
    {
      title: 'Área Económica',
    },
    {
      title: 'Área Ambiental',
    },
    {
      title: 'Área Académica y Científica',
    },
    {
      title: 'Área Tecnológica y Cultural',
    },
  ];
  return (
    <>
      <section id='expectedImpact' className='mx-auto max-w-6xl mt-4'>
        <div className='pt-40 pb-28 flex justify-center items-center flex-col gap-8'>
          <h2 className='text-4xl font-bold underline underline-offset-3 decoration-4 underline-offset-4 decoration-blue-500'>
            Impacto esperado
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
