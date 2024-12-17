import React from "react";

const LogoSection = () => {
  const logos = [
    { src: "/fashion-live.png", alt: "Fashion Live" },
    { src: "/hand-crafted.png", alt: "Hand Crafted" },
    { src: "/mestonix.png", alt: "Mestonix" },
    { src: "/hello-sunshine.png", alt: "Hello Sunshine" },
    { src: "/pure.png", alt: "Pure" },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto flex justify-center items-center flex-wrap gap-8">
        {logos.map((logo, index) => (
          <div key={index} className="w-28 h-auto opacity-50 hover:opacity-100 transition-opacity duration-300">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;
