

import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const DiscountSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between ml-28 px-6 md:px-12 lg:px-24 py-12 bg-white">
      {/* Left Text Section */}
      <div className="flex-1 max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D59] leading-tight">
          20% Discount Of All Products
        </h2>
        <p className="text-[#FB2E86] text-xl font-medium mt-4">
          Eams Sofa Compact
        </p>
        <p className="text-[#B7BACB] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
          <li className="flex items-center gap-2">
            <FaCheck className="text-[#B8B8DC]" />
            <span className="text-[#B8B8DC]">Material expose like metals</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="text-[#B8B8DC]" />
            <span className="text-[#B8B8DC]">Clear lines and geometric figures</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="text-[#B8B8DC]" />
            <span className="text-[#B8B8DC]">Simple neutral colours</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheck className="text-[#B8B8DC]" />
            <span className="text-[#B8B8DC]">Material expose like metals</span>
          </li>
        </ul>

        <button className="mt-6 px-6 py-3 bg-[#FB2E86] text-white rounded-lg hover:bg-[#e02275]">
          Shop Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/3 flex justify-center items-center relative">
             <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
               <Image
                 src="/discount.png"
                 alt="Furniture Chair"
                 width={706}
                 height={689}
                 className="object-contain w-[699] h-[597]"
               />
                 
                  </div>

           
     
             </div>
     
    </section>
  );
};

export default DiscountSection;



