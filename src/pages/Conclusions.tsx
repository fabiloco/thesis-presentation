import { Carousel } from "flowbite-react";
import ScrollCarousel from "scroll-carousel-react";

type CarouselItemType = {
  title: string;
};

const CarouselItem = ({ title }: CarouselItemType) => {
  return (
    <>
      <div className="bg-blue-700 rounded h-36 w-48 flex justify-center items-center p-5">
        <h3 className="z-20 text-white text-xl font-bold">{title}</h3>
      </div>
    </>
  );
};

export const ConclusionsCarousel = () => {
  const data = [
    "Capacitación continua",
    "Inversión en software y hardware",
    "Educación del cliente",
    "Evaluación de ROI",
    "Sensibilización y divulgación",
    "Promoción de la sostenibilidad",
  ];
  return (
    <>
      <div className="mt-10">
        <ScrollCarousel onReady={() => console.log("I am ready")}>
          {/*   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <div
            key={item}
            className="bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48"
          >
            {item}
          </div>
        ))} */}

          {data.map((item) => (
            <CarouselItem title={item} />
          ))}
        </ScrollCarousel>
      </div>
    </>
  );
};
