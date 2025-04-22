import React from "react";

const Unique = () => {
  return (
    <div className="relative lg:h-auto h-[1100px]">
      <div className="bg-[url('https://media.istockphoto.com/id/948172176/vector/vector-seed-background-on-a-white-background.jpg?s=612x612&w=0&k=20&c=jZ677m1qJ-JK-W7_KPT6XI_eQBqW6J6Fwnr3qhPAm0I=')] h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center bg-opacity-10">
        <div className="absolute inset-0 bg-white/90"></div>
        <h1 className="text-2xl lg:text-5xl font-bold lg:font-extrabold tracking-widest absolute top-10 lg:top-20">
          What makes us diffrent
        </h1>
        <p className="absolute lg:top-36 lg:text-3xl lg:font-normal text-xl font-light top-20">
          we serve your faith
        </p>
        <div className="flex flex-col lg:flex-row gap-2 absolute lg:top-48 lg:gap-10 lg:px-16 top-32  px-5">
          <div className="lg:w-[350px] h-[300px] lg:h-[480px] backdrop-blur-xs bg-transparent px-2 py-2 text-black flex flex-col justify-center items-center gap-4 lg:gap-7 rounded-lg shadow-xl">
            <img
              src="https://wallpapers.com/images/hd/organic-farming-1162-x-700-wallpaper-snmzav3nv42lgclu.jpg"
              alt=""
              className="lg:w-[150px] w-[100px] h-[100px] lg:h-[150px] rounded-full "
            />
            <h1 className="lg:text-2xl text-xl font-bold lg:font-extrabold text-center">
              Organic
            </h1>
            <p className="text-center lg:text-lg text-sm font-medium text-[#4a4848fd]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              delectus aliquid praesentium eligendi quaerat voluptatem eveniet
              laboriosam nemo atque assumenda.
            </p>
          </div>
          <div className="lg:w-[350px] h-[300px] lg:h-[480px] backdrop-blur-xs bg-transparent px-2 py-2 text-black flex flex-col justify-center items-center gap-4 lg:gap-7 rounded-lg shadow-xl">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/049/858/303/small/in-this-serene-landscape-a-solitary-tree-stands-tall-against-a-vibrant-sunset-of-golden-hues-evoking-calmness-in-the-tranquil-rural-setting-that-embraces-natures-exquisite-beauty-photo.jpg"
              className="lg:w-[150px] w-[100px] h-[100px] lg:h-[150px] rounded-full"
              alt=""
            />
            <h1 className="lg:text-2xl text-xl font-bold lg:font-extrabold text-center">
              Natural
            </h1>
            <p className="text-center lg:text-lg text-sm font-medium text-[#595858fd]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              delectus aliquid praesentium eligendi quaerat voluptatem eveniet
              laboriosam nemo atque assumenda.
            </p>
          </div>
          <div className="lg:w-[350px] h-[300px] lg:h-[480px] backdrop-blur-xs bg-transparent px-2 py-2 text-black flex flex-col justify-center items-center gap-4 lg:gap-7 rounded-lg shadow-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdagCf5Rt1TZND6-F83lLawnwXGJQ8N-amxA&s"
              alt=""
              className="lg:w-[150px] w-[100px] h-[100px] lg:h-[150px] rounded-full "
            />
            <h1 className="lg:text-2xl text-xl font-bold lg:font-extrabold text-center">
              Healthy
            </h1>
            <p className="text-center lg:text-lg text-sm font-medium text-[#595858fd]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              delectus aliquid praesentium eligendi quaerat voluptatem eveniet
              laboriosam nemo atque assumenda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
