'use client'
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="flex flex-col md:flex-row w-full  justify-center items-center">
            
            <div className="flex flex-col  md:mb-0 md:mr-8">
              <span className="text-sm mb-2">Menol Boutiques</span>
              <Link href="/book-an-appointment" className="border border-black text-black py-3 px-6 hover:bg-black hover:text-white w-full md:w-auto text-center justify-center">
                <span className="text-center">Book an Appointment</span>
              </Link>
            </div>

            <div className="flex flex-col mt-6   items-center  md:mb-0 md:mr-8">
              <Link href="/store-locator"  className="border border-black text-black py-3 px-6 hover:bg-black hover:text-white w-full md:w-auto text-center justify-center">
                <span className="text-center">Store Locator</span>
              </Link>
            </div>

            <div className="flex flex-col items-start py-1  md:w-auto">
              <span className="text-sm ">Subscribe to our Newsletter</span>
              <div className="flex flex-col md:flex-row items-start ">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className=" md:w-auto py-3 px-4 border border-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent mb-2 md:mb-0 md:mr-4"
                />
                <Link href="/subscribe "  className="flex items-start border border-black text-black py-3 px-6 hover:bg-black hover:text-white  md:w-auto">
                  <span className="text-center">Next</span>
                </Link>
              </div>
            </div>

            <div className="mr-2 px-4 md:mt-5 flex flex-col md:flex-row items-center  ">
            <select className="py-3 px-4 border border-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent mb-2 md:mb-0 md:mr-4 w-full md:w-auto">
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
            </select>
            <select className="py-3 px-4 border border-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-full md:w-auto">
              <option value="">Select Language</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
          </div>
          </div>
          
          
        </div>
        
        <div className="flex flex-wrap justify-between border-t border-gray-300 pt-8">
          <div className="w-full md:w-1/3 xl:w-1/4 p-4">
            <h3 className="text-lg font-bold mb-4">CLIENT SERVICES</h3>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <Link href="/contact-us" className="text-gray-600 hover:text-gray-900">
                Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/book-an-appointment" className="text-gray-600 hover:text-gray-900">
                  Book an Appointment
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/faqs" className="text-gray-600 hover:text-gray-900">
                  FAQs
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/fendi-services" className="text-gray-600 hover:text-gray-900">
                  Menol Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3 xl:w-1/4 p-4">
            <h3 className="text-lg font-bold mb-4">CORPORATE</h3>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <Link href="/store-locator" className="text-gray-600 hover:text-gray-900">
                Store Locator
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/careers" className="text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/sustainability" className="text-gray-600 hover:text-gray-900">
                  Sustainability
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/fendi-casa" className="text-gray-600 hover:text-gray-900">
                Menol Casa
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3 xl:w-1/4 p-4">
            <h3 className="text-lg font-bold mb-4">LEGAL & PRIVACY</h3>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <Link href="/privacy-policies" className="text-gray-600 hover:text-gray-900">
                  Privacy Policies
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/cookie-policy" className="text-gray-600 hover:text-gray-900">
                  Cookie Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/responsible-disclosure-policy" className="text-gray-600 hover:text-gray-900">
                  Responsible Disclosure Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/website-terms-of-use" className="text-gray-600 hover:text-gray-900">
                  Website Terms of Use
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/code-of-conduct" className="text-gray-600 hover:text-gray-900">
                Code of Conduct
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/model-231-supervisory-body-and-whistleblowing" className="text-gray-600 hover:text-gray-900">
                  Model 231, Supervisory Body and Whistleblowing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;