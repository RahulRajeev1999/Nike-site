import Button from "../Components/Button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe2 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe2);

  return (
    <section
      id="home"
      className="w-full flex
    x1:flex-row flex-col
    justify-center min-h-screen
    gap-10 max-container"
    >
      <div
        className="relative 
      x1:w-2/5 flex flex-col
      justify-center items-start
      w-full max-x1:padding-x pt-28"
      >
        <p
          className="text-xl font-montserrat
        text-coral-red"
        >
          Summer Must Haves
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl
        max-sm:text-[72px] max-sm:leading-[82]
        font-bold"
        >
          <span
            className="xl:bg-white 
          xl:whitespace-nowrap relative 
          z-10 pr-10"
          >
            The New Arrivals
          </span>
          <br />
          <span
            className="text-coral-red
          inline-block mt-3"
          >
            Nike
          </span>
          .Just Do It
        </h1>
        <p
          className="font-montserrat text-slate-gray
        text-lg-8 mt-6 mb-14 sm:max-w-sm"
        >
          Possibilities are in the air - inspiring you to make the most of the
          sunshine.Brave the heat in these effortlessly cool fits
        </p>
        <Button
          label="Shop now"
          iconURL={arrowRight}
          className="hover:opacity-90"
        />
        <div
          className="flex justify-starts items-start
        flex-wrap w--full mt-20 gap-16"
        >
          {statistics.map((stat,index) => (
            <div key={index}>
              <p
                className="text-4xl font-palanquin
              font-bold"
              >
                {stat.value}
              </p>
              <p
                className="leading-7 font-montserrat
              text-slate-gray"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1
      flex justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero
      bg-cover bg-center"
      >
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={502}
          className="object-contain 
        relative z-10"
        />

        <div
          className="flex sm:gap-6 gap-4 absolute
        -bottom-[5%] sm:left-[10%] max-sm:px-6"
        >
          {shoes.map((image,index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                ChangeBigShoeImage={(Shoe) => setBigShoeImg(Shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
