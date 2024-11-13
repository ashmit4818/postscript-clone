import React from 'react'
import videohero from '../assets/ai-launch-hero-video.mp4'

function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video 
        src={videohero}
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div style={{padding: '16% 3%' }} className="  absolute inset-0 bg-black bg-opacity-50 flex items-start justify-start p-6 lg:p-12">
        <div style={{margin: '5% 3%'}} className="w-1/2 max-md:w-full space-y-6 text-left">
          {/* Tagline */}
          <h1 style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)'}} className="text-7xl max-md:text-center md:text-6xl font-bold text-white">
            Sell more with SMS
          </h1>

          {/* Description */}
          <p style={{color: 'white' , textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)'}} className="max-md:text-center text-md md:text-md ">
            Grow your audience, create personalized messaging at scale, and make SMS your #1 revenue channel with Postscript.
          </p>

          {/* Button and Link */}
          <div className="flex max-md:justify-center items-start gap-4">
          <a
          style={{backgroundColor: 'white', color: 'black'}}
          href="#"
          className="flex-none mr-4 rounded-full bg-gray-900 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Start Free Trial 
        </a>
            <a href="#" className="text-indigo-400 my-auto font-semibold hover:text-indigo-300">
              Book a Demo 
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
