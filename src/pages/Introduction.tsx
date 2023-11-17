import { ImageAccordionGridItem, ImageAccordionGrid } from '../components';

export const Introduction = () => {
  const introductionContent: ImageAccordionGridItem[] = [
    {
      title: 'Introducción',
      accordeonTitle: 'Ver más',
      imageSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg',
      itemContent: (
        <>
          <p>
            En la industria de la construcción y el diseño, los métodos
            tradicionales a menudo resultan intensivos en tiempo, recursos y
            mano de obra, generando retrasos y aumentos de costos. La era actual
            de tecnología y transformación digital ha introducido la
            automatización respaldada por inteligencia artificial, ofreciendo
            oportunidades para mejorar procesos y eficiencia en el uso de
            recursos. Aunque estas innovaciones prometen mejorar el diseño
            arquitectónico, la diversidad y evolución de las herramientas
            dificultan su selección adecuada. La implementación de estas
            tecnologías puede revolucionar la planificación, diseño,
            construcción y control de proyectos, ofreciendo beneficios como la
            optimización de procesos, toma de decisiones informadas, eficiencia
            en la gestión de recursos, y mejora de la calidad y eficiencia de
            los proyectos, así como una mayor colaboración y transparencia en la
            gestión de proyectos.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ImageAccordionGrid id='introduccion' content={introductionContent} />
    </>
  );
};
