import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import social1 from "../assets/svgexport-32.svg"
import social2 from "../assets/svgexport-33.svg"
import social3 from "../assets/svgexport-34.svg"
import social4 from "../assets/svgexport-35.svg"
import social5 from "../assets/svgexport-36.svg"

const Footer = () => {
  // State for handling the collapsible footer menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="bg-black text-white py-10">
      {/* Footer Content */}
      <div className="container mx-auto px-4">
        {/* Desktop Footer: 6 Columns */}
        <div className="ml-12 hidden px-20 text-left sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {/* SMS Marketing */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul>
              <li><a href="#sms-marketing" className="hover:underline">SMS Marketing</a></li>
              <li><a href="#postscript-ai" className="hover:underline">Postscript AI</a></li>
              <li><a href="#cashback" className="hover:underline">CashBack</a></li>
              <li><a href="#sms-sales" className="hover:underline">SMS Sales</a></li>
              <li><a href="#postscript-plus" className="hover:underline">Postscript Plus</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#compliance" className="hover:underline">Compliance</a></li>
              <li><a href="#sms-revenue-platform" className="hover:underline">SMS Revenue Platform</a></li>
              <li><a href="#customer-service" className="hover:underline">Customer Service</a></li>
              <li><a href="#deliverability" className="hover:underline">Deliverability</a></li>
              <li><a href="#onsite-opt-in" className="hover:underline">Onsite Opt-in</a></li>
              <li><a href="#integrations" className="hover:underline">Integrations</a></li>
              <li><a href="#by-use-case" className="hover:underline">By Use Case</a></li>
            </ul>
          </div>

          {/* Proof */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Proof</h3>
            <ul>
              <li><a href="#case-studies" className="hover:underline">Case Studies</a></li>
              <li><a href="#compare" className="hover:underline">Compare</a></li>
              <li><a href="#reviews" className="hover:underline">Reviews & Testimonials</a></li>
              <li><a href="#subscriber-ltv" className="hover:underline">Subscriber LTV</a></li>
              <li><a href="#conversational-commerce" className="hover:underline">Conversational Commerce</a></li>
              <li><a href="#by-industry" className="hover:underline">By Industry</a></li>
            </ul>
          </div>

          {/* By Industry */}
          <div>
            <h3 className="font-semibold text-lg mb-4">By Industry</h3>
            <ul>
              <li><a href="#fashion-apparel" className="hover:underline">Fashion & Apparel</a></li>
              <li><a href="#lifestyle-home" className="hover:underline">Lifestyle & Home</a></li>
              <li><a href="#beauty-cosmetics" className="hover:underline">Beauty & Cosmetics</a></li>
              <li><a href="#food-beverage" className="hover:underline">Food & Beverage</a></li>
              <li><a href="#health-wellness" className="hover:underline">Health & Wellness</a></li>
              <li><a href="#fitness-outdoor" className="hover:underline">Fitness & Outdoor</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#webinars-events" className="hover:underline">Webinars & Events</a></li>
              <li><a href="#learning-center" className="hover:underline">Learning Center</a></li>
              <li><a href="#sms-calendar" className="hover:underline">SMS Calendar</a></li>
              <li><a href="#help-center" className="hover:underline">Help Center</a></li>
              <li><a href="#sms-benchmarks" className="hover:underline">SMS Benchmarks</a></li>
              <li><a href="#between-two-phones" className="hover:underline">Between Two Phones</a></li>
              <li><a href="#sms-masterminds" className="hover:underline">SMS Masterminds</a></li>
              <li><a href="#sms-marketing-certification" className="hover:underline">SMS Marketing Certification</a></li>
              <li><a href="#fantastic-texts" className="hover:underline">Fantastic Texts</a></li>
              <li><a href="#partners" className="hover:underline">Partners</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul>
              <li><a href="#about-us" className="hover:underline">About Us</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#terms-of-service" className="hover:underline">Terms of Service</a></li>
              <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#third-party-software" className="hover:underline">Third-Party Software</a></li>
              <li><a href="#spam-policy" className="hover:underline">Spam Policy</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Footer: Collapsible Dropdown */}
        <div className="sm:hidden">
          <button onClick={toggleDropdown} className="w-full text-center text-left py-4 text-2xl font-bold"
          aria-expanded={isOpen}
          aria-controls="footer-links">
            Links
          </button>
          {isOpen && (
            <div className="space-y-6">
              {/* SMS Marketing */}
              <div>
                <h3 className="font-semibold text-lg">Solutions</h3>
                <ul>
                  <li><a href="#sms-marketing" className="hover:underline">SMS Marketing</a></li>
                  <li><a href="#postscript-ai" className="hover:underline">Postscript AI</a></li>
                  <li><a href="#cashback" className="hover:underline">CashBack</a></li>
                  <li><a href="#sms-sales" className="hover:underline">SMS Sales</a></li>
                  <li><a href="#postscript-plus" className="hover:underline">Postscript Plus</a></li>
                </ul>
              </div>

              {/* Platform */}
              <div>
                <h3 className="font-semibold text-lg">Platform</h3>
                <ul>
                  <li><a href="#features" className="hover:underline">Features</a></li>
                  <li><a href="#compliance" className="hover:underline">Compliance</a></li>
                  <li><a href="#sms-revenue-platform" className="hover:underline">SMS Revenue Platform</a></li>
                  <li><a href="#customer-service" className="hover:underline">Customer Service</a></li>
                  <li><a href="#deliverability" className="hover:underline">Deliverability</a></li>
                  <li><a href="#onsite-opt-in" className="hover:underline">Onsite Opt-in</a></li>
                  <li><a href="#integrations" className="hover:underline">Integrations</a></li>
                  <li><a href="#by-use-case" className="hover:underline">By Use Case</a></li>
                </ul>
              </div>

              {/* Proof */}
              <div>
                <h3 className="font-semibold text-lg">Proof</h3>
                <ul>
                  <li><a href="#case-studies" className="hover:underline">Case Studies</a></li>
                  <li><a href="#compare" className="hover:underline">Compare</a></li>
                  <li><a href="#reviews" className="hover:underline">Reviews & Testimonials</a></li>
                  <li><a href="#subscriber-ltv" className="hover:underline">Subscriber LTV</a></li>
                  <li><a href="#conversational-commerce" className="hover:underline">Conversational Commerce</a></li>
                  <li><a href="#by-industry" className="hover:underline">By Industry</a></li>
                </ul>
              </div>

              {/* By Industry */}
              <div>
                <h3 className="font-semibold text-lg">By Industry</h3>
                <ul>
                  <li><a href="#fashion-apparel" className="hover:underline">Fashion & Apparel</a></li>
                  <li><a href="#lifestyle-home" className="hover:underline">Lifestyle & Home</a></li>
                  <li><a href="#beauty-cosmetics" className="hover:underline">Beauty & Cosmetics</a></li>
                  <li><a href="#food-beverage" className="hover:underline">Food & Beverage</a></li>
                  <li><a href="#health-wellness" className="hover:underline">Health & Wellness</a></li>
                  <li><a href="#fitness-outdoor" className="hover:underline">Fitness & Outdoor</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold text-lg">Resources</h3>
                <ul>
                  <li><a href="#blog" className="hover:underline">Blog</a></li>
                  <li><a href="#webinars-events" className="hover:underline">Webinars & Events</a></li>
                  <li><a href="#learning-center" className="hover:underline">Learning Center</a></li>
                  <li><a href="#sms-calendar" className="hover:underline">SMS Calendar</a></li>
                  <li><a href="#help-center" className="hover:underline">Help Center</a></li>
                  <li><a href="#sms-benchmarks" className="hover:underline">SMS Benchmarks</a></li>
                  <li><a href="#between-two-phones" className="hover:underline">Between Two Phones</a></li>
                  <li><a href="#sms-masterminds" className="hover:underline">SMS Masterminds</a></li>
                  <li><a href="#sms-marketing-certification" className="hover:underline">SMS Marketing Certification</a></li>
                  <li><a href="#fantastic-texts" className="hover:underline">Fantastic Texts</a></li>
                  <li><a href="#partners" className="hover:underline">Partners</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold text-lg">Company</h3>
                <ul>
                  <li><a href="#about-us" className="hover:underline">About Us</a></li>
                  <li><a href="#careers" className="hover:underline">Careers</a></li>
                  <li><a href="#terms-of-service" className="hover:underline">Terms of Service</a></li>
                  <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="#third-party-software" className="hover:underline">Third-Party Software</a></li>
                  <li><a href="#spam-policy" className="hover:underline">Spam Policy</a></li>
                  <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr width='88%' className='mt-10 mx-auto' />
      <div className='mt-7 flex md:flex-row flex-col mx-12 px-12'>
        <div className='mr-auto max-md:mx-auto'>
            <img src={Logo} alt="" />
        </div>
        <div className='flex max-md:mx-auto max-md:mt-4'>
            <a href=""> <img src={social1} alt="" /></a>
            <a href=""> <img src={social2} alt="" /></a>
            <a href=""> <img src={social3} alt="" /></a>
            <a href=""> <img src={social4} alt="" /></a>
            <a href=""> <img src={social5} alt="" /></a>
         
        </div>

      </div>
      <p className='text-md  text-white max-md:text-center text-left mx-12 px-12 mt-4'> © Copyright 2024 Postscript. All rights reserved.</p>
      

    </footer>
  );
};

export default Footer;
