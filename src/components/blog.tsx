

import Image from "next/image";
import React from "react";

const LatestBlog = () => {
  const blogs = [
    {
      title: "Top essential Trends in 2021",
      code: ["SaberAli" ,  "21 August, 2020"],
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/Frame-3.png",

    },
    {
      title: "Top essential Trends in 2021",
      code: ["Surfauxion", "21 August, 2020"],
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/fram2.png",
    },
    {
      title: "Top essential Trends in 202",
      code:["SaberAli" , "21 August, 2020"],
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mightly",
      image: "/frame-4.png",
    },
  ];

  return (
    <section className="py-10 px-6">
      <div id="LatestBlog" className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Latest Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative border rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Image Section */}
              <div className="w-full h-60 flex items-center justify-center overflow-hidden rounded-t-xl bg-gray-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={370} // Adjusted width
                  height={225} // Adjusted height
                  className="object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#151875]">
                  {blog.title}
                </h3>
                <p className="text-sm text-[#151875] mt-1">{blog.code}</p>
                <p className="text-sm text-[#72718F] mt-2">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;


