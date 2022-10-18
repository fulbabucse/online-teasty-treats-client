import { useState } from "react";
import { NavLink } from "react-router-dom";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-amber-500 shadow z-10 block">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <NavLink className="text-3xl font-bold text-slate-800" to="/">
              Tasty Treats
            </NavLink>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <XMarkIcon className="w-6 h-6 text-white"></XMarkIcon>
                ) : (
                  <Bars3BottomRightIcon className="w-6 h-6 text-white"></Bars3BottomRightIcon>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 w-full md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center gap-4 text-lg font-semibold text-gray-800 justify-center  md:flex md:space-y-0">
              <li className="nav-items">
                <NavLink to="/home">Home</NavLink>
              </li>

              <li className="nav-items">
                <NavLink to="/shop">Shop</NavLink>
              </li>

              <li className="nav-items">
                <NavLink to="/Orders">Orders</NavLink>
              </li>

              <li className="nav-items">
                <NavLink to="/about">About</NavLink>
              </li>

              <li className="nav-items">
                <NavLink to="/contact">Contact</NavLink>
              </li>

              <li className="nav-items">
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
