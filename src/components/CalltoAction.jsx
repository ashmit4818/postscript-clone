import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container px-12 md:w-1/2 mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          You made it this far—now let us make SMS your #1 revenue channel.
        </h2>
        
        {/* Paragraph */}
        <p className="text-md mb-6">
          Install now to start your 30-day free trial, or connect with our team to get a personalized demo of Postscript.
        </p>
        
        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          {/* Free Trial Button */}
          <a
          style={{backgroundColor: 'white', color: 'black'}}
          href="#"
          className="flex-none ml-4 rounded-full bg-gray-900 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Start Free Trial 
        </a>
          
          {/* Book a Demo Button */}
          <a href="#" className="text-indigo-400 my-auto font-semibold hover:text-indigo-300">
              Book a Demo 
            </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
