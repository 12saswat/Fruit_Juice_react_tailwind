import React, { useEffect, useRef, useState } from "react";
import Heroimage from "../Images/kiwibottel.png";
import kiwiimage from "../Images/Kiwi.png";
import orange_bottle from "../Images/orangebottel.png";
import orange_slice from "../Images/orange.png";
import apple_bottle from "../Images/applebottel.png";
import apple_slice from "../Images/apple.png";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const Hero = () => {
  const imgRef = useRef(null);
  const slides = [
    {
      name: "KIWI",
      bgColor: "#e9ffb7",
      textColor: "#caf95a",
      textSize: "text-[100px] md:text-[250px] lg:text-[300px]",
      mainImage: Heroimage,
      mImageSize: "w-[250px] md:w-[350px] lg:w-[710px]",
      cornerImage: kiwiimage,
      cornerImageSize: "w-[170px] md:w-[300px] lg:w-[600px]",
    },
    {
      name: "ORANGE",
      bgColor: "#fff1cc",
      textColor: "#ffc04d",
      textSize: "text-[70px] md:text-[250px] lg:text-[200px]",
      mainImage: orange_bottle,
      mImageSize: "w-[180px] md:w-[350px] lg:w-[510px]",
      cornerImage: orange_slice,
      cornerImageSize: "w-[170px] md:w-[300px] lg:w-[460px]",
    },
    {
      name: "APPLE",
      bgColor: "#ffe6e6",
      textColor: "#ff6b6b",
      textSize: "text-[80px] md:text-[250px] lg:text-[250px]",
      mainImage: apple_bottle,
      mImageSize: "w-[160px] md:w-[350px] lg:w-[410px]",
      cornerImage: apple_slice,
      cornerImageSize: "w-[170px] md:w-[300px] lg:w-[500px]",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  gsap.registerPlugin(TextPlugin);
  const {
    name,
    bgColor,
    textColor,
    mainImage,
    cornerImage,
    textSize,
    mImageSize,
    cornerImageSize,
  } = slides[currentSlide];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".typewriter-text", {
      text: name,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    }).fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, [name]);

  return (
    <div>
      <section
        className={`relative flex flex-col items-center justify-center lg:h-screen h-[300px] overflow-hidden `}
        style={{ backgroundColor: bgColor }}
      >
        {/* Background Text */}
        <h1
          className={`absolute  font-extrabold z-0 select-none tracking-wider ${textSize} typewriter-text`}
          style={{ color: textColor }}
        ></h1>

        {/* Main Hero Image */}
        <img
          ref={imgRef}
          src={mainImage}
          alt={`${name} Bottle`}
          className={`relative z-20  drop-shadow-xl ${mImageSize}`}
        />

        {/* Bottom Left Corner Kiwi Image */}
        <img
          src={cornerImage}
          alt={`${name} Slice`}
          className={`absolute lg:bottom-[-120px] lg:left-[-200px] bottom-[-50px] left-[-80px] ${cornerImageSize} `}
        />
        <button
          onClick={nextSlide}
          className={`absolute z-30 border-2 text-sm lg:text-xl px-5 py-1 rounded-2xl border-[#0000005b] lg:bottom-10 bottom-4 cursor-pointer font-semibold`}
          style={{ color: textColor }}
        >
          Tap to slide
        </button>
      </section>
    </div>
  );
};

export default Hero;
