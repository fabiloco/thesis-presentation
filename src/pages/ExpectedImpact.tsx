import { ExpectedImpactItem } from "../components";
import "../index.css";

export const ExpectedImpact = () => {
  const data = [
    {
      items: [
        {
          title: "Area Social",
        },
        {
          title: "Area Economica",
        },
        {
          title: "Area Ambiental",
        },
        {
          title: "Area Academica y Cientifica",
        },
        {
          title: "Area Tecnologica y Cultural",
        },
      ],
    },
  ];
  return (
    <div id="expectedImpact" className=" p-5 sm:p-8 w-full h-screen">
      <div className="columns-1 gap-2 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 lg:gap-10 [&>img:not(:first-child)]:mt-8">
        {data[0].items.map((item) => {
          return <ExpectedImpactItem color={300} title={item.title} />;
        })}
        {/* <div className="masonry">
          <img className="item" src="https://source.unsplash.com/bYuI23mnmDQ" />
          <img className="item" src="https://source.unsplash.com/Nllx4R-2c3o" />
          <img className="item" src="https://source.unsplash.com/lp40q07DIe0" />
          <img className="item" src="https://source.unsplash.com/lp40q07DIe0" />
          <img className="item" src="https://source.unsplash.com/lp40q07DIe0" />
          <img className="item" src="https://source.unsplash.com/lp40q07DIe0" />
          <img src="https://source.unsplash.com/wfalq01jJuU" />
          <img src="https://source.unsplash.com/bYuI23mnmDQ" />
          <img src="https://source.unsplash.com/Nllx4R-2c3o" />
          <img src="https://source.unsplash.com/lp40q07DIe0" />
          <img src="https://source.unsplash.com/wfalq01jJuU" />
          <img src="https://source.unsplash.com/bYuI23mnmDQ" />
          <img src="https://source.unsplash.com/Nllx4R-2c3o" />
          <img src="https://source.unsplash.com/lp40q07DIe0" />
          <img src="https://source.unsplash.com/wfalq01jJuU" />
        </div> */}
      </div>
    </div>
  );
};
