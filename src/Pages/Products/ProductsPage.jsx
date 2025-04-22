import React, { useEffect, useState } from "react";
import fruits from "../Products/Products.json";
import FruitCard from "./FruitesCard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/sections/Footer";

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    handleScrollToTop();
  });
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white via-orange-200 to-green-100 py-10 px-4 pt-20 lg:pt-32">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#ae1018]">
          Fruit Juice Varieties
        </h1>

        {/* Search Input */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search for a fruit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-orange-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredFruits.length > 0 ? (
            filteredFruits.map((fruit) => (
              <FruitCard key={fruit.id} fruit={fruit} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-lg font-semibold">
              Oops, Sorry there is no {searchTerm}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
