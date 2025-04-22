import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import fruitsData from "../Products/Products.json";
import { FaChevronCircleLeft } from "react-icons/fa";

const FruitDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fruit = fruitsData.find((f) => f.id === parseInt(id));

  if (!fruit) {
    return <p className="text-center text-xl mt-20">Fruit not found</p>;
  }

  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    handleScrollToTop();
  });

  return (
    <>
      <div className="min-h-scree">
        {/* Hero Section with BG image */}
        <div
          className={`h-[90vh] flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r to-[#73ef5a] from-white to-90% from-40%`}
        >
          {/* Left: Fruit Image */}
          <div className="lg:w-1/2 w-full h-[50vh] lg:h-full flex items-center justify-center">
            <img
              src={""}
              alt={fruit.name}
              className="lg:max-h-[80%] lg:max-w-[90%] object-contain drop-shadow-2xl"
            />
          </div>
          {/* for laptop screen */}
          <button
            onClick={() => navigate(-1)}
            className="text-lg hover:border-[1px] text-black font-semibold border-white hover:scale-110 duration-200 absolute top-5 left-5 bg-[#ffffffad] px-4 py-1 rounded-md shadow-md z-20 cursor-pointer lg:block hidden"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate(-1)}
            className="text-2xl hover:scale-110 duration-200 absolute top-5 left-5 shadow-md z-20 cursor-pointer lg:hidden"
          >
            <FaChevronCircleLeft />
          </button>

          {/* Right: Text Content */}
          <div className="relative z-10 px-6 py-10 lg:w-1/2 flex flex-col gap-3 lg:gap-10">
            <h1 className="text-5xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#6ae068] via-[#b8e852] to-[#50e782] lg:h-[100px]">
              {fruit.name}
            </h1>

            <p className="text-xl lg:text-2xl text-[#29691f] font-semibold">
              Rich in: {fruit.vitamins || "Vitamin C, A"}
            </p>

            <p className="text-[#29691f] max-w-xl text-lg font-medium">
              {fruit.description ||
                "This delicious fruit is packed with antioxidants and essential nutrients to boost your immune system and energize your day."}
            </p>
          </div>
        </div>

        {/* Juice Types Section */}
        <div className="px-4 py-10 bg-gradient-to-b from-yellow-50 to-orange-100">
          <h2 className=" text-xl lg:text-5xl font-bold text-center text-[#ae1018b9] mb-6">
            Varieties of {fruit.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {fruit.juices.map((juice, index) => (
              <div
                key={index}
                className="bg-[#ffffffaf] px-5 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-around items-center gap-5   lg:h-[240px]"
              >
                <div className="flex items-center justify-between gap-20">
                  <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-[#ae1018]">
                      {juice}
                    </h3>
                    <p className="font-medium text-sm text-gray-800">
                      {fruit.price}
                    </p>
                  </div>

                  <div className="w-[80px] h-[80px]">
                    <img
                      src=""
                      alt={juice}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <Link
                  to={"/juiceDetail"}
                  className="text-sm border-2 rounded-md font-medium px-4 py-1 cursor-pointer hover:scale-105 duration-300 "
                >
                  try it
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FruitDetails;
