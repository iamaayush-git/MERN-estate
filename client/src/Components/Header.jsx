import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">My</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            className="w-24 sm:w-64  bg-transparent border-none outline-none"
            type="text"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="hidden sm:flex items-center gap-4">
          <Link to={"/"}>
            <li className="font-semibold text-slate-700 text-lg hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="font-semibold text-slate-700 text-lg hover:underline cursor-pointer">
              About
            </li>
          </Link>
        </ul>
        <Link to={"/sign-in"}>
          <button className="bg-slate-900 px-3 py-2 rounded-md text-white font-semibold text-sm sm:text-lg cursor-pointer">
            Sign In
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
