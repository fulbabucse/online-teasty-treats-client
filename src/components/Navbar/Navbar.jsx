import { useState } from "react";
import { NavLink } from "react-router-dom";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import UserThumb from "../../assets/user_thumbnail.jpg";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
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

              {/* <li className="nav-items">
                <NavLink to="/about">About</NavLink>
              </li>

              <li className="nav-items">
                <NavLink to="/contact">Contact</NavLink>
              </li> */}

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user?.photoURL || UserThumb}
                      alt={user?.displayName}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="flex flex-col gap-3 items-center mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 w-52"
                >
                  <li>
                    {user?.uid && (
                      <NavLink to="/profile">
                        Welcome, {user?.email || user?.displayName}
                      </NavLink>
                    )}
                  </li>
                  <li className="text-center">
                    {user?.uid || user?.email ? (
                      <button
                        onClick={signOutUser}
                        className="btn btn-sm text-white"
                      >
                        Sign Out
                      </button>
                    ) : (
                      <NavLink
                        to="/signin"
                        className="text-center bg-amber-300"
                      >
                        <button className="text-black">Sign In</button>
                      </NavLink>
                    )}
                  </li>
                </ul>
              </div>

              {/* <li className="nav-items">
                {user?.uid && (
                  <NavLink to="/profile">Welcome, {user?.email}</NavLink>
                )}
              </li>

              <li className="nav-items">
                {user?.uid || user?.email ? (
                  <button onClick={signOutUser} className="btn btn-sm">
                    Sign Out
                  </button>
                ) : (
                  <button className="btn btn-sm">
                    <NavLink to="/signin">Sign In</NavLink>
                  </button>
                )}
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
