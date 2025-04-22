import React, { useState, useContext } from "react";
import logo from "./images/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const { cartItems } = useContext(CartContext);
  // const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);

  //To Scrool top of screen when a page is relode
  const handleScrollToTop = () => window.scrollTo(0, 0);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`font-montserrat lg:w-full lg:h-[115px] w-full h-[64px] flex justify-between items-center lg:px-20 px-1 fixed z-50 transition-all duration-300 backdrop-blur-[2px] `}
    >
      {/* Logo Section */}
      <div className="flex items-center lg:w-[104px] lg:h-[92px] h-[49.98px] w-[75px] ">
        <img src={logo} alt="Logo" className="w-10 lg:w-16 md:w-16" />
        <p className="text-[11px] md:text-sm lg:text-[17px] text-[#000000] font-bold tracking-widest">
          NatureSip
        </p>
      </div>

      {/* Default Navigation */}
      <div className="hidden md:flex gap-6 items-center font-medium text-lg text-[#000]">
        <div className="mr-16 flex gap-5">
          <div className="hidden md:hidden lg:flex gap-5">
            <Link to={"/"} onClick={handleScrollToTop}>
              <p
                className={`rounded-full px-3 py-2 hover:scale-105 duration-300 cursor-pointer ${
                  location.pathname === "/" ? "border-b-2 border-[#3d3f1e]" : ""
                }`}
              >
                Home
              </p>
            </Link>
            <button>
              <Link
                to={"/aboutUs"}
                className={`rounded-full cursor-pointer px-3 py-2 hover:scale-105 duration-300  ${
                  location.pathname === "/aboutUs"
                    ? "border-b-2 border-[#3d3f1e]"
                    : ""
                } `}
              >
                About us
              </Link>
            </button>

            <button>
              <Link
                to={"/products"}
                className={` rounded-full px-3 py-2 hover:scale-105 duration-300 cursor-pointer  ${
                  location.pathname === "/products"
                    ? "border-b-2 border-[#3d3f1e]"
                    : ""
                } `}
              >
                Products
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="gap-4 lg:flex hidden">
        <>
          <div className="flex gap-4">
            <MdFavoriteBorder className="text-3xl text-[#6c6a6a] hover:text-[#b3e48d] cursor-pointer hover:scale-110 duration-200" />

            <div className="relative">
              <FaShoppingCart className="text-3xl text-[#6c6a6a] hover:text-[#b3e48d] cursor-pointer hover:scale-110 duration-200" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 text-[#000] text-xs font-bold bg-[#949292] px-1.5 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
          <Link
            to={"/register"}
            onClick={handleScrollToTop}
            className="rounded-md px-4 py-1 text-xl font-medium bg-transparent  text-black hover:scale-105 duration-300 "
          >
            Connect with us
          </Link>
        </>
      </div>

      {/* Mobile View */}
      <div className="flex lg:hidden">
        {/* <div className="w-6 pr-12 md:hidden">
          <select className="h-10 bg-transparent hover:shadow-lg rounded-full md:px-3 md:py-2 focus:outline-none">
            <option value="">EN</option>
            <option value="">Hindi</option>
            <option value="">Odia</option>
          </select>
        </div> */}
        <div className="lg:hidden flex gap-2 items-center">
          <div className="flex gap-2 items-center ml-2">
            <div className="flex gap-2">
              <MdFavoriteBorder className="lg:text-3xl text-[#6c6a6a] hover:text-[#b3e48d] cursor-pointer hover:scale-110 duration-200" />

              <div className="relative">
                <FaShoppingCart className="lg:text-3xl text-[#6c6a6a] hover:text-[#b3e48d] cursor-pointer hover:scale-110 duration-200" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 text-[#000] text-xs font-bold bg-[#949292] px-0.5  lg:px-1.5 lg:py-0.5 rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </div>
            <Link
              to={"/register"}
              onClick={handleScrollToTop}
              className="lg:text-xl text-[10px] hover:scale-110 duration-300 font-medium"
            >
              Connect with us
            </Link>
          </div>
          <button onClick={toggle}>
            {isActive ? (
              <div className="bg-[#69656580] p-1 rounded-full">
                <ImCross className="text-xl p-1 text-white" />
              </div>
            ) : (
              <div className="rounded-md w-[42px] h-[36px] p-1 text-center flex items-center justify-center">
                <HiOutlineBars3 className="w-[36px] h-[30px]  text-black" />
              </div>
            )}
          </button>

          {isActive && (
            <div className="nav flex justify-center items-start flex-col gap-1 text-[#ecb0b0] font-semibold absolute top-16 right-0 bg-white bg-opacity-80 w-auto p-2 text-sm rounded-2xl shadow-lg">
              <Link to={"/"}>Home</Link>
              <Link to={"/aboutUs"}>About us</Link>
              <Link to={"/products"}>Products</Link>
              <p>Contact us</p>
              <div className="flex gap-0 text-[#FB8500]">
                {!token ? (
                  <>
                    <Link to={"/SigninPage"}></Link>
                  </>
                ) : (
                  <button onClick={logout}>Logout</button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
