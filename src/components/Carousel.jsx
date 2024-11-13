import React from 'react';
import Marquee from 'react-fast-marquee';
import logoblume from '../assets/Blume-Small-Logo-White.svg';
import logobrightland from '../assets/Brightland-Small-Logo-White.svg';
import logobrook from '../assets/Brooklinen-Small-Logo-White.svg';
import kopari from '../assets/kopari.svg';
import drsqau from '../assets/Dr-Squatch-Small-Logo-White.svg';
import flybyjing from '../assets/Fly-By-Jing-Small-Logo-White.svg';
import native from '../assets/Native-Small-Logo-White.svg';
import olipop from '../assets/Olipop-Small-Logo-White.svg';
import death from '../assets/death.svg';

const logos = [
  { src: logoblume, alt: 'Blume' },
  { src: logobrightland, alt: 'Brightland' },
  { src: logobrook, alt: 'Brooklinen' },
  { src: drsqau, alt: 'Dr. Squatch' },
  { src: kopari, alt: 'Kopari' },
  { src: native, alt: 'Native' },
  { src: olipop, alt: 'Olipop' },
  { src: flybyjing, alt: 'Fly By Jing' },
  { src: death, alt: 'Death' },
];

function Carousel() {
  return (
    <div className="w-full py-7 flex justify-center items-center bg-[#000]">
      <div className="carousel-container w-full flex flex-col">
        <Marquee gradient={false} speed={100} pauseOnHover>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-[#000] m-1 rounded-xl flex space-x-5 p-4 text-sky-400 cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="carousel-logo w-[120px] h-auto md:w-[150px] lg:w-[180px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Carousel;
