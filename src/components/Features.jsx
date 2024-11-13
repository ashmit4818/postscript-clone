import React from 'react';
import feature1 from '../assets/svgexport-28.svg';
import feature2 from '../assets/svgexport-29.svg';
import feature3 from '../assets/conversations-light.svg';

function FeatureSection() {
  return (
    <section style={{ backgroundColor: 'black' }} className="py-16">
      {/* Container */}
      <div className="container mx-auto px-12 md:px-12 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 text-white">
          Finally—AI that Unlocks Incremental Revenue
        </h1>

        {/* Paragraph */}
        <p className="text-lg text-gray-400 mb-12">
          Powerful AI features that are constantly working to put more money in your pocket.
        </p>

        {/* Feature Columns */}
        <div className="flex flex-col mx-11 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Text Section */}
            <div className="flex-1 text-left">
              <p className="text-pink-500 text-sm font-semibold mb-2">BRAND CENTER</p>
              <h2 className="text-3xl text-white font-bold mb-4">Train AI on your brand voice</h2>
              <p className="text-white">
              Train the AI model on your unique brand voice, with multiple checkpoints to review AI-generated copy and provide feedback before texts are sent.
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-1">
              <img
                src={feature1}
                alt="Feature 1"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Feature 2 - Image on Left for md and above */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            {/* Text Section */}
            <div className="flex-1 text-left">
              <p className="text-pink-500 text-sm font-semibold mb-2">AI INFINITY TESTING</p>
              <h2 className="text-3xl text-white font-bold mb-4">Optimize, infinitely.</h2>
              <p className="text-white">
                Get detailed analytics to understand customer behavior, so you can make data-driven decisions that maximize revenue.
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-1">
              <img
                src={feature2}
                alt="Feature 2"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Text Section */}
            <div className="flex-1 text-left">
              <p className="text-pink-500 text-sm font-semibold mb-2">CONVERSATION INTELLIGENCE</p>
              <h2 className="text-3xl text-white font-bold mb-4">Uncover Customer Insights</h2>
              <p className="text-white">
              Quickly analyze trends and uncover insights within thousands of in-depth SMS Sales conversations with your subscribers.
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-1">
              <img
                src={feature3}
                alt="Feature 3"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className='mx-auto md:w-1/3 '>
        <h1 className="text-4xl mx-auto font-bold mb-4 pt-16 text-white">
        Revenue-driving, insights-revealing AI
        </h1>

        {/* Paragraph */}
        <p className="text-lg mx-auto text-gray-400 mb-12">
        The AI solution that ecom marketers have been waiting for.
        </p>
        </div>

      </div>
    </section>
  );
}

export default FeatureSection;
