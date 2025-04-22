import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import juice1 from "../Images/juice1.png";
import juice2 from "../Images/juice2.png";
import juice3 from "../Images/juice3.png";
import smoothey1 from "../Images/smoothey1.png";
import smoothey2 from "../Images/smoothey2.png";
import smoothey3 from "../Images/smoothey3.png";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Juices = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

    const scrollTween = gsap.to(el, {
      scrollLeft: el.scrollWidth - el.clientWidth,
      duration: 8,
      ease: "none",
      repeat: -1,
      paused: true,
    });

    // Set the initial scroll position to the end
    // el.scrollLeft = el.scrollWidth - el.clientWidth;

    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      end: "bottom top",
      onEnter: () => scrollTween.play(),
      onLeave: () => scrollTween.pause(),
      onEnterBack: () => scrollTween.play(),
      onLeaveBack: () => scrollTween.pause(),
    });

    // ⛳ Hover Events for all Try-it Buttons
    const buttons = document.querySelectorAll(".try-it-btn");

    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => scrollTween.pause());
      btn.addEventListener("mouseleave", () => scrollTween.play());
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      buttons.forEach((btn) => {
        btn.removeEventListener("mouseenter", () => scrollTween.pause());
        btn.removeEventListener("mouseleave", () => scrollTween.play());
      });
    };
  }, []);

  return (
    <div className="bg-[#F9F9F9] lg:h-[900px] flex flex-col lg:justify-center lg:items-center gap-5 pt-10 h-[400px]">
      {" "}
      <h1 className="text-2xl lg:text-5xl font-bold lg:font-extrabold text-center lg:pt-[80px] leading-3 tracking-wider ">
        Juices & smoothies
      </h1>
      <p className="text-sm lg:text-lg font-light tracking-wider text-center">
        What's new
      </p>
      <div
        ref={scrollRef}
        className="flex lg:flex-col lg:gap-2 gap-2 lg:overflow-visible overflow-scroll justify-start items-start pl-5 "
      >
        <div className="flex flex-row gap-2 lg:top-48 lg:gap-20 lg:px-16 top-32">
          <div className="lg:w-[250px] w-[120px] h-[200px] lg:h-[280px] bg-[#fcdfdf7f] px-6 lg:px-2 py-2 text-black flex flex-col justify-center items-center rounded-lg hover:scale-105 cursor-pointer duration-300">
            <img
              src={juice1}
              alt=""
              className="lg:w-[150px] w-[70px] h-[70px] lg:h-[180px] "
            />
            <h1 className="lg:text-xl text-sm font-bold lg:font-bold text-center">
              musky aroma
            </h1>
            <Link
              to={"/juiceDetail"}
              className="try-it-btn text-sm lg:text-xl border-0 lg:px-7 px-5 py-1 hover:scale-105 transition-all duration-300 cursor-pointer pt-5 hover:border-b"
            >
              Try it
            </Link>
          </div>
          <div className="lg:w-[250px] w-[120px] h-[200px] lg:h-[280px] bg-[#fcdfdf7f] px-6 lg:px-2 py-2 text-black flex flex-col justify-center items-center rounded-lg hover:scale-105 cursor-pointer duration-300">
            <img
              src={juice2}
              className="lg:w-[150px] w-[70px] h-[70px] lg:h-[180px] rounded-full"
              alt=""
            />
            <h1 className="lg:text-xl text-xl font-bold lg:font-bold text-center">
              Natalie's Orange
            </h1>

            <Link
              to={"/juiceDetail"}
              className="try-it-btn text-sm lg:text-xl border-0 lg:px-7 px-5 py-1 hover:scale-105 transition-all duration-300 cursor-pointer pt-5 hover:border-b"
            >
              Try it
            </Link>
          </div>
          <div className="lg:w-[250px] w-[120px] h-[200px] lg:h-[280px] bg-[#fcdfdf7f] px-6 lg:px-2 py-2 text-black flex flex-col justify-center items-center rounded-lg hover:scale-105 cursor-pointer duration-300">
            <img
              src={juice3}
              alt=""
              className="lg:w-[150px] w-[70px] h-[70px] lg:h-[200px] "
            />
            <h1 className="lg:text-xl text-xl font-bold lg:font-bold text-center">
              maceration
            </h1>

            <Link
              to={"/juiceDetail"}
              className="try-it-btn text-sm lg:text-xl border-0 lg:px-7 px-5 py-1 hover:scale-105 transition-all duration-300 cursor-pointer pt-5 hover:border-b"
            >
              Try it
            </Link>
          </div>
        </div>
        {/* Second div */}
        <div className="flex flex-row gap-2 lg:top-48 lg:gap-20 lg:px-16 top-32 ">
          <div className="lg:w-[250px] w-[120px] h-[200px] lg:h-[280px] bg-[#fcdfdf7f] px-6 lg:px-2 py-2 text-black flex flex-col justify-center items-center rounded-lg hover:scale-105 cursor-pointer duration-300">
            <img
              src={smoothey1}
              alt=""
              className="lg:w-[150px] w-[70px] h-[70px] lg:h-[200px]"
            />
            <h1 className="lg:text-xl text-xl font-bold lg:font-bold text-center">
              blended drink
            </h1>
            <Link
              to={"/juiceDetail"}
              className="try-it-btn text-sm lg:text-xl border-0 lg:px-7 px-5 py-1 hover:scale-105 transition-all duration-300 cursor-pointer pt-5 hover:border-b"
            >
              Try it
            </Link>
          </div>
          <div className="lg:w-[250px] w-[120px] h-[200px] lg:h-[280px] bg-[#fcdfdf7f] px-6 lg:px-2 py-2 text-black flex flex-col justify-center items-center ounded-lg hover:scale-105 cursor-pointer duration-300">
            <img
              src={smoothey2}
              className="lg:w-[150px] w-[70px] h-[70px] lg:h-[200px]"
              alt=""
            />
            <h1 className="lg:text-xl text-xl font-bold lg:font-bold text-center">
              Paradise Smoothie
            </h1>
            <Link
              to={"/juiceDetail"}
              className="try-it-btn text-sm lg:text-xl border-0 lg:px-7 px-5 py-1 hover:scale-105 transition-all duration-300 cursor-pointer pt-5 hover:border-b"
            >
              Try it
            </Link>
          </div>
          <div className="lg:w-[250px] w-[120px] h-[200px] lg:h-[280px] bg-[#fcdfdf7f] px-6 lg:px-2 py-2 text-black flex flex-col justify-center items-center rounded-lg hover:scale-105 cursor-pointer duration-300">
            <img
              src={smoothey3}
              alt=""
              className="lg:w-[150px] w-[70px] h-[70px] lg:h-[200px]"
            />
            <h1 className="lg:text-xl text-xl font-bold lg:font-bold text-center">
              Apple Shake
            </h1>

            <Link
              to={"/juiceDetail"}
              className="try-it-btn text-sm lg:text-xl border-0 lg:px-7 px-5 py-1 hover:scale-105 transition-all duration-300 cursor-pointer pt-5 hover:border-b"
            >
              Try it
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Juices;
