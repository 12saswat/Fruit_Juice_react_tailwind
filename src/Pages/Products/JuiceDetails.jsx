import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { CartContext } from "../../context/CartContext";
import RatingStars from "../../components/sections/RatingStars";

const JuiceDetails = () => {
  const { addToCart, addToFavorites } = useContext(CartContext);
  return (
    <>
      <Navbar />
      <div className="bg-lime-50 flex items-center justify-center w-full pt-28">
        <div className="bg-white rounded-2xl shadow-xl max-w-5xl w-full lg:w-[1800px] lg:h-[500px] grid grid-cols-1 md:grid-cols-2">
          {/* Juice Image */}
          <div className="h-60 lg:h-auto">
            <img
              src="https://media.istockphoto.com/id/1167011577/photo/flat-lay-of-organic-fruits-and-berries-and-freshly-blended-fruit-smoothie-on-pink-background.jpg?s=612x612&w=0&k=20&c=Xt_cBPM2NckvYYEmL3iG9NSWBuFsA6R2cCj-lUfcFbA="
              alt="Tropical Juice"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Juice Details */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-green-700 mb-2">
                Tropical Bliss Juice
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-semibold">Made with:</span> Mango,
                Pineapple, Orange, Mint
              </p>
              <p className="text-gray-700 mb-4">
                Packed with vitamins and antioxidants, this juice boosts your
                immune system, hydrates your body, and gives you a natural
                energy kick. Perfect for a refreshing start to your day.
              </p>

              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <RatingStars rating={3} />
                <span className="text-gray-600 text-sm">
                  (4.5/5 based on 120 reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-2xl font-semibold text-green-600 mb-4">
                ₹120
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => {
                  addToCart();
                }}
                className="bg-red-100 hover:bg-red-200 text-red-500 font-medium p-3 rounded-xl transition duration-200 flex justify-center items-center w-[50px] gap-2 cursor-pointer"
              >
                <MdOutlineShoppingCartCheckout />
              </button>
              <button
                onClick={() => addToFavorites(product)}
                className="bg-red-100 hover:bg-red-200 text-red-500 font-medium p-3 rounded-xl transition duration-200 flex justify-center items-center w-[50px] gap-2 cursor-pointer"
              >
                <GrFavorite className="text-xl" />
              </button>
              <button className="border-2 hover:bg-[#93db88] text-[#0b9e1f] hover:border-transparent text-lg font-semibold py-2 px-5 rounded-xl transition duration-200 cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JuiceDetails;
