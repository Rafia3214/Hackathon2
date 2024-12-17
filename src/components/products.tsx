import Image from "next/image";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaSearchPlus } from "react-icons/fa";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      Image: "/wChair.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      Image: "/image-1.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      Image: "/blue.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      Image: "/image-3.png",
    },
  ];

  return (
    <section className=" wraper py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold sm-text-md md:text-3xl lg:text-3xl text-center text-gray-800 mb-8">
          Featured Products
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
                <IoCartOutline />
                <IoMdHeartEmpty />
                <FaSearchPlus />


              </div>
       
              {/* Product Details */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#FB2E86]">
                  {product.name}
                </h3>
                <div className="flex justify-center items-center gap-2 mb-2">
          <span className="h-1 w-4 bg-teal-400"></span>
          <span className="h-1 w-4 bg-pink-400"></span>
          <span className="h-1 w-4 bg-red-400"></span>
        </div>
                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;



