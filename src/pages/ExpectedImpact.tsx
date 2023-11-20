import {
  FaPersonCircleCheck,
  FaMoneyBillTrendUp,
  FaTree,
  FaEarthAmericas,
  FaComputer,
} from 'react-icons/fa6';

import { CardWithIcon } from '../components';
import '../index.css';

export const ExpectedImpact = () => {
  const data = [
    {
      title: 'Área Social',
      icon: <FaPersonCircleCheck size='5em' />,
    },
    {
      title: 'Área Económica',
      icon: <FaMoneyBillTrendUp size='5em' />,
    },
    {
      title: 'Área Ambiental',
      icon: <FaTree size='5em' />,
    },
    {
      title: 'Área Académica y Científica',
      icon: <FaEarthAmericas size='10em' />,
    },
    {
      title: 'Área Tecnológica y Cultural',
      icon: <FaComputer size='5em' />,
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

        <div className='flex flex-row w-full justify-center items-center gap-3'>
          {data.map(({ title, icon }, index) => (
            /*  <ExpectedImpactItem title={title} /> */
            <CardWithIcon icon={icon} index={index} title={title} />
          ))}
        </div>
      </section>{' '}
    </>
  );
};
