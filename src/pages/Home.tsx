import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <section
      id='home'
      className='mx-auto flex flex-col justify-center min-h-screen max-w-4xl'
    >
      <motion.h1
        initial={{ opacity: 0, x: -1000 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ ease: 'easeOut', duration: 2, delay: 1 }}
        className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'
      >
        Uso de herramientas{' '}
        <span className='underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600'>
          tecnológicas
        </span>{' '}
        como apoyo al inicio de los procesos de diseño y construcción
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 1000 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 2, delay: 2 }}
        className='text-3xl mt-4'
      >
        Valentina Paternina Hernandez
      </motion.p>
    </section>
  );
};
