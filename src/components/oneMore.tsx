

  // // Array of images, titles, and descriptions
  // const offers = [
  //   {
  //     image: "/shopex1.png",
  //     title: "24/7 Support",
  //     description:
  //       "We provide round-the-clock support to ensure customer satisfaction.",
  //   },
  //   {
  //     image: "/shopex2.png",
  //     title: "Free Shipping",
  //     description: "Enjoy free shipping on all orders above $50.",
  //   },
  //   {
  //     image: "/shopex3.png",
  //     title: "Secure Payment",
  //     description: "Your transactions are safe and secure with us.",
  //   },
  //   {
  //     image: "/shopex4.png",
  //     title: "Best Quality",
  //     description: "We guarantee the best quality products at affordable prices.",
    
    // Add more items here
  // ];
  // import React from "react";
  // import Image from "next/image";
  
  // const OneMore: React.FC = () => {
  //   return (
  //     <div className="bg-white min-h-screen">
  //       {/* Upper Section */}
  //       <section className="text-center py-16">
  //         <h2 className="text-3xl font-bold text-purple-700 mb-10">
  //           What Shopex Offer!
  //         </h2>
  //         <div className="flex flex-wrap justify-center gap-8">
  //           {Array(4)
  //             .fill("")
  //             .map((_, index) => (
  //               <div
  //                 key={index}
  //                 className="bg-white shadow-lg p-6 rounded-md max-w-xs text-center"
  //               >
  //                 <div className="mb-4">
  //                   {/* Replace with an icon/image */}
  //                   <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-lg text-orange-600 font-bold">
  //                     <Image
  //                                                     src="/shopex1.png"
  //                                                     alt="van"
  //                                                     layout="responsive"
  //                                                     width={50}
  //                                                     height={50}
  //                                                     objectFit="cover"
  //                                                     quality={100}
  //                                                     className="rounded-t-lg mb-4"
  //                                                   />
  //                     {index + 1}
  //                   </div>
  //                 </div>
  //                 <h3 className="text-lg font-semibold text-gray-800">
  //                   24/7 Support
  //                 </h3>
  //                 <p className="text-gray-500 text-sm mt-2">
  //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
  //                   purus gravida.
  //                 </p>
  //               </div>
  //             ))}
  //         </div>


import Image from "next/image";

const OneMore: React.FC = () => {
  // Array of images
  const images = [
    "/shopex1.png",
    "/shopex2.png",
    "/shopex3.png",
    "/shopex4.png",
  ];

  return (
    <div className= "wraper bg-white min-h-screen">
      {/* Upper Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-[#151875] mb-10">
          What Shopex Offer!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-md max-w-xs text-center"
            >
              <div className="mb-4">
                {/* Image */}
                <div className="w-14 h-16 mx-auto relative  overflow-hidden">
                  <Image
                    src={image} 
                    alt={`Shopex Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {index === 0
                  ? "24/7 Support"
                  : index === 1
                  ? "24/7 Support"
                  : index === 2
                  ? "24/7 Support"
                  : "24/7 Support"}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OneMore;
