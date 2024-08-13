'use client'

import { useState } from "react";
import { FaSearch, FaBars, FaTimesCircle } from "react-icons/fa"; 
import { GoPerson } from "react-icons/go";
import { LiaShoppingCartSolid } from "react-icons/lia";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import module from "./header.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-white flex items-center justify-between px-6 py-2  mx-auto max-w-screen-xl">
      {/* Logo Section */}
      <div className="flex justify-center items-center">
        <Image alt="logo" className="w-20" src={Logo} width={54} height={43} />
        <span className={module.logo_title}>
          متجـــــر<br />فاست{" "}
        </span>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex w-96 items-center border px-4 rounded-sm">
        <input
          type="text"
          placeholder="ابحث عما تريد"
          className="w-full text-xs py-[11px] outline-none"
        />
        <FaSearch className="text-gray-400 cursor-pointer hover:text-black" />
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full font-semibold bg-gray-light">
            <GoPerson className="w-7 h-7 text-gray-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">مرحبا بك</p>
            <button className="text-sm text-slate-700 pt-2 hover:text-blue-500">
              تسجيل دخول
            </button>
          </div>
        </div>
        <div className="flex items-center text-gray-light gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-semibold bg-gray-light">
            <LiaShoppingCartSolid className="w-7 h-7 text-gray-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">سلة المشتريات</p>
            <button className="text-sm text-slate-700 pt-2 hover:text-blue-500">
              1,200 رس
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FaTimesCircle size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg p-6 z-[1000] w-full md:hidden">
          <div className="flex flex-col items-start gap-4">
            {/* Search Bar */}
            <div className="w-full flex items-center border px-4 rounded-sm">
              <input
                type="text"
                placeholder="ابحث عما تريد"
                className="w-full text-xs py-[11px] outline-none"
              />
              <FaSearch className="text-gray-400 cursor-pointer hover:text-black" />
            </div>

            {/* Menu Items */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full font-semibold bg-gray-light">
                <GoPerson className="w-7 h-7 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">مرحبا بك</p>
                <button className="text-sm text-slate-700 pt-2 hover:text-blue-500">
                  تسجيل دخول
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-semibold bg-gray-light">
                <LiaShoppingCartSolid className="w-7 h-7 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">سلة المشتريات</p>
                <button className="text-sm text-slate-700 pt-2 hover:text-blue-500">
                  1,200 رس
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
