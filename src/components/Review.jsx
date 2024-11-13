import React from 'react';
import ruggableLogo from '../assets/ruggable-loves-postscript.jpg';
import deathWishLogo from '../assets/death-wish-coffee-co-loves-postscript.jpg';
import trueClassicLogo from '../assets/true-classic-loves-postscript.jpg';
import Ruggable_Logo_Small from '../assets/Ruggable_Logo_Small.svg';
import Death_Wish_Coffee_Co_Logo_Small from '../assets/Death_Wish_Coffee_Logo_Small.svg';
import trueclassic from '../assets/True_Classic.svg';

function ReviewSection() {
  return (
    <section className="py-16 bg-white">
      {/* Container */}
      <div className="container mx-auto px-8 md:px-12 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Brands like us. They<span className="italic"> really </span>like us.
        </h1>

        {/* Review Columns */}
        <div className="flex flex-col gap-16 mx-12">
          {/* Review 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-xl text-gray-800 mb-4">
                “Postscript is helping us to increase SMS revenue contribution to the business, which is incremental to our other CRM channels. They’re also helping solve bandwidth issues. They feel like a true extension of our team — we trust that they are really tackling SMS as if our company were their own.”
              </p>
              <p className="text-2xl font-bold text-black">
                Danae Young, Associate Director, Retention
              </p>
              <img className="mt-4 max-md:mx-auto" src={Ruggable_Logo_Small} alt="Ruggable Logo" />
            </div>
            {/* Logo Section */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={ruggableLogo}
                alt="Ruggable Review"
                className="mx-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-xl text-gray-800 mb-4">
                “We have seen really strong results with Postscript, and just as a side note—your teams, customer service, and Customer Success Managers are top of the line. They’re incredible.”
              </p>
              <p className="text-2xl font-bold text-black">
                Kelly Spencer, Marketing Manager
              </p>
              <img className="mt-4 max-md:mx-auto" src={Death_Wish_Coffee_Co_Logo_Small} alt="Death Wish Coffee Co Logo" />
            </div>
            {/* Logo Section */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={deathWishLogo}
                alt="Death Wish Coffee Review"
                className="mx-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Review 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-xl text-gray-800 mb-4">
                “Postscript is able to innovate at a speed faster than any of the competitors in the industry. This is very important for our business and we see the impact of it in our numbers.”
              </p>
              <p className="text-2xl font-bold text-black">
                Adam Hutton, Associate Director of Owned Media
              </p>
              <img className="mt-4 max-md:mx-auto" src={trueclassic} width={150} alt="True Classic Logo" />
            </div>
            {/* Logo Section */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={trueClassicLogo}
                alt="True Classic Review"
                className="mx-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
