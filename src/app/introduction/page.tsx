import { Navbar } from '@/components';

export default function Introduction() {
  return (
    <>
      <Navbar />
      <section className='mx-auto flex flex-col justify-center min-h-screen max-w-4xl'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'>
          Introducción
        </h1>
      </section>
    </>
  );
}
