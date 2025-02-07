
import Image from "next/image";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaSearchPlus } from "react-icons/fa";

const  Trend = () => {
  const products = [
    {
      name: "Cantilever chair",
     
      price: "$26.00",
      Price: "$49.00 line through",
      Image: "/trend1.png",
    },
    {
      name: "Cantilever chair",
      price: "$26.00",
      Image: "/trend2.png",
    },
    {
      name: "Cantilever chair",
      price: "$26.00",
      Image: "/trend0.png",
    },
    {
      name: "Cantilever chair",
      price: "$26.00",
      Image: "/trend4.png",
    },
  ];

  return (
    <section className=" wraper py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold sm-text-md md:text-3xl lg:text-3xl text-center text-gray-800 mb-8">
        Trending Products
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
              {/* Image Wrapper */}
              <div className="w-full h-[270px] flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={product.Image}
                  alt={product.name}
                  width={360}
                  height={270}
                  className="object-contain w-full h-full"
                />
              </div>
       
              {/* Product Details */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#151875]">
                  {product.name}
                </h3> 
                </div>
          
               <div className="flex">
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price} </p>
                <p className="text-sm line-through text-[#1518754D]">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trend ;
