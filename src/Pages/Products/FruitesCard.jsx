import React, { useEffect } from "react";
import RatingStars from "../../components/sections/RatingStars";
import { Link, useNavigate } from "react-router-dom";

const FruitCard = ({ fruit }) => {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate(`/fruitdetails/${fruit.id}`);
  };
  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    handleScrollToTop();
  });
  return (
    <div
      onClick={handelClick}
      className="bg-cover bg-center rounded-2xl shadow-lg p-4 text-white flex flex-col justify-end lg:h-60 h-[120px] relative lg:w-full w-[110px] cursor-pointer hover:scale-110 duration-300"
      style={{ backgroundImage: `url(${fruit.image})` }}
    >
      <p className="text-sm mt-1 z-0 top-0 absolute right-4 text-[#7a930b] hidden">
        <RatingStars rating={fruit.rating} />
      </p>
      <p className="text-[13px] mt-1 z-0 top-0 absolute right-4 text-[#000000]">
        {fruit.rating}
      </p>
      <div className="text-[#1f1c1cf0] bg-opacity-50 rounded-xl">
        <h2 className="lg:text-xl text-[13px] font-bold">{fruit.name}</h2>
      </div>
    </div>
  );
};

export default FruitCard;
