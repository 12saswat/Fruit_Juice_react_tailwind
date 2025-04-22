import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../components/navbar/Navbar";

const AboutUs = () => {
  const containerRef = useRef(null);
  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    handleScrollToTop();
  });

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="bg-green-50 min-h-screen p-6 md:p-12 ">
        <div className="text-center mb-10 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            About <span className="text-orange-300">Naturesip</span>
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            We blend nature’s goodness into every sip. Discover who we are and
            what we stand for.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZfC3bfgmDYPObFMATCQ0mqQL0iLtvids-o2yEE3YrLwUJhET-AyxMX94NaID4nCA-wA&usqp=CAU"
              alt="Organic Juice"
              className="rounded-3xl lg:w-[500px] shadow-lg"
            />
          </div>

          <div className="">
            <h2 className="text-3xl font-semibold text-green-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-4">
              At NatureSips, we believe in purity, health, and sustainability.
              Our drinks are made from 100% organic fruits, without
              preservatives, additives, or sugar overload.
            </p>
            <p className="text-gray-700">
              From farm to bottle, we ensure every step honors nature — and your
              well-being.
            </p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 items-center ">
          <div>
            <h2 className="text-3xl font-semibold text-green-800 mb-4">
              Health in Every Sip
            </h2>
            <p className="text-gray-700 mb-4">
              Our drinks are more than just delicious — they’re packed with
              essential vitamins, antioxidants, and natural hydration that
              energize your day and support your immune system.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Boosts immunity naturally with Vitamin C-rich fruits</li>
              <li>Supports digestion with fiber-packed blends</li>
              <li>No added sugars or artificial preservatives</li>
              <li>Promotes hydration and skin glow</li>
            </ul>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/870915532/photo/man-holding-crate-ob-fresh-vegetables.jpg?s=612x612&w=0&k=20&c=k2dXOI-wxUy7lX77Pm90vU6TJXmAAv5VtK60ZZHIyCA="
              alt="Healthy Juice Benefits"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We’re not just another juice brand. We are a lifestyle — one that
            embraces clean nutrition, organic farming, and environmental
            responsibility. Every bottle supports local farmers and delivers
            vibrant flavor straight to your soul 🍊🍓🥭
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
