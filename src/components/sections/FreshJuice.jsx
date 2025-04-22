import React, { useRef } from "react";
import juiceGlass from "../Images/juiceGlass2.png";
import gsap from "gsap";

const FreshJuice = () => {
  const cardRefs = useRef([]);

  const handleMouseEnter = () => {
    gsap.fromTo(
      cardRefs.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(cardRefs.current, {
      x: 50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.in",
    });
  };

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div
      className="bg-cover bg-center relative lg:h-[800px] py-16 flex justify-center items-center px-6 md:px-12"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/black-white-macro-shot-blueberry-background_53876-31911.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-20 justify-around max-w-7xl w-full">
        {/* Info Cards */}
        <div className="flex flex-col gap-6 w-full lg:w-[40%]">
          {[
            {
              title: "100% Organic",
              desc: "Sourced directly from organic farms without any chemicals.",
            },
            {
              title: "Naturally Extracted",
              desc: "No artificial flavors or preservatives used.",
            },
            {
              title: "Rich in Vitamins",
              desc: "Packed with Vitamin A, C, and E to keep you healthy and glowing.",
            },
            {
              title: "Freshly Made",
              desc: "Bottled fresh to retain all the natural goodness of fruits.",
            },
          ].map((card, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="bg-white/90 p-4 md:p-6 rounded-2xl shadow-md transform transition-all duration-300 opacity-0 translate-x-6"
            >
              <h3 className="text-lg md:text-xl font-semibold text-orange-600 mb-1">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-gray-800">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Juice Image */}
        <img
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={juiceGlass}
          alt="Juice Glass"
          className="w-[300px] md:w-[400px] lg:w-[1000px] transition-transform duration-300 hover:scale-105 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FreshJuice;
