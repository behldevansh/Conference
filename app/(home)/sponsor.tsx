import Image from 'next/image';
import React from 'react';
import { PiArrowRight } from 'react-icons/pi';

const logos = [
  { image: "/svgs/ieeecas.png" },
  { image: "/svgs/ieeecs.svg" },
  { image: "/svgs/ieeeras.svg" },
  { image: "/svgs/ieeecas.png" },
  { image: "/svgs/ieeecs.svg" },
  { image: "/svgs/ieeeras.svg" },
  { image: "/svgs/ieeecas.png" },
  { image: "/svgs/ieeecs.svg" },
  { image: "/svgs/ieeeras.svg" },
  { image: "/svgs/ieeecas.png" },
  { image: "/svgs/ieeecs.svg" },
  { image: "/svgs/ieeeras.svg" },


];

const Sponsor = () => {
  return (
    <div className="pt-16 flex justify-center items-center flex-col">
      <div className="text-4xl w-3/4 text-center xl:text-5xl font-medium">
      SUSTAINABLE ENERGY TECHNOLOGIES
      </div>
      <div className="py-4 xl:w-1/4 text-center px-8">
      3rd International Conference on Signals, Machines and Automation (SIGMA-24)
      </div>

      <div className='grid grid-cols-3  xl:grid-cols-4 items-center justify-center  px-10 md:px-20 lg:px-0 lg:w-1/2 pt-10 gap-10 text-center mx-auto'>
        {logos.map((logo, index) => (
          <div key={index} className="">
            <Image
              src={logo.image}
              alt="logo"
              width={500}
              height={500}
              className=''
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsor;