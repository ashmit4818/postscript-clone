import React from 'react';
import smsmarketing from '../assets/SMS-Marketing-Card.svg';
import smssales from '../assets/SMS-Sales-Card.svg';
import smscashback from '../assets/SMS-Cashback-Card.svg';



function PromotionSection() {
  return (
    <section style={{ backgroundColor: 'black' }} className="py-16">
      {/* Container */}
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 text-white">
          When You're Ready for Best-in-Class SMS
        </h1>
        <p className="text-lg text-white mb-12">
          Our products make it easy to send smarter and drive 15% more revenue than all-in-one solutions.
        </p>

        {/* Flex container for cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 - SMS Marketing */}
          <div
            style={{
              
              border: '1px solid #8A4FFF',
              width: '350px',
            }}
            className="flex flex-col items-start p-0 shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3"
          >
            {/* Image Section */}
            <div
              style={{
                backgroundImage: 'url(/src/assets/SMS-Marketing-Card.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: "120px",
                width: '100%',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
              }}
            />
            {/* Content Section */}
            <div className="p-6 text-left">
              <div className="text-white mb-4">
                <h3 className="text-2xl font-bold flex ">
                  SMS Marketing <span style={{backgroundColor:'white'}} className="my-auto ml-2 px-2 py-1 text-xs font-semibold text-black rounded">Powered by AI</span>
                </h3>
              </div>
              <p className="text-white mb-6">
                Grow your list, build your messaging strategy, deliver excellent customer service, drive purchases, and get 34x ROI on spend — all in one place.
              </p>
              <a href="#" className="text-blue-400 text-sm hover:underline">More about Marketing &rarr;</a>
            </div>
          </div>

          {/* Card 2 - SMS Sales */}
          <div
            style={{
              
              border: '1px solid #00C853',
              width: '350px',
            }}
            className="flex flex-col items-start p-0 shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3"
          >
            {/* Image Section */}
            <div
              style={{
                backgroundImage: 'url(/src/assets/SMS-Sales-Card.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '120px',
                width: '100%',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
              }}
            />
            {/* Content Section */}
            <div className="p-6 text-left">
              <div className="text-white mb-4">
                <h3 className="text-2xl font-bold flex items-center">
                  SMS Sales <span style={{backgroundColor:'white'}} className="ml-2 px-2 py-1 text-xs font-semibold  text-black rounded">Powered by AI</span>
                </h3>
              </div>
              <p className="text-white mb-6">
                Pair our team of expertly-trained sales associates and purpose-built SMS Sales software to proactively engage your subscribers and drive more revenue.
              </p>
              <a href="#" className="text-blue-400 text-sm hover:underline">More about Sales &rarr;</a>
            </div>
          </div>

          {/* Card 3 - CashBack */}
          <div
            style={{
             
              border: '1px solid #FFB300',
              width: '350px',
            }}
            className="flex flex-col items-start p-0 shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3"
          >
            {/* Image Section */}
            <div
              style={{
                backgroundImage: 'url(/src/assets/SMS-Cashback-Card.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '120px',
                width: '100%',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
              }}
            />
            {/* Content Section */}
            <div className="p-6 text-left">
              <div className="text-white mb-4">
                <h3 className="text-2xl font-bold">
                  CashBack
                </h3>
              </div>
              <p className="text-white mb-6">
                Boost your contribution margin and drive retention by making simple swaps to replace traditional coupons for more profitable CashBack offers.
              </p>
              <a href="#" className="text-blue-400 text-sm hover:underline">More about Cashback &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionSection;
