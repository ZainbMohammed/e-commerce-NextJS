import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { LiaShoppingCartSolid } from "react-icons/lia";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import module from "./header.module.css";
const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-around px-6 py-2 drop-shadow">
      <div className="flex justify-center items-center">
        <Image alt="logo" className="w-20" src={Logo} width={54} height={43} />
        <span className={module.logo_title}>
          متجـــــر<br></br>فاست{" "}
        </span>
      </div>

      <div className="w-96 flex items-center border px-4 rounded-sm">
        <input
          type="text"
          placeholder="ابحث عما تريد"
          className="w-full text-xs  py-[11px] outline-none"
        />
        <FaMagnifyingGlass className="text-gray-400 cursor-pointer hover:text-black" />
      </div>

      <div className="flex items-center justify-between gap-8 ">
        <div className=" flex items-center gap-3 ">
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
            {/* <span className='relative flexCenter w-4 h-4 rounded-full  bg-red-600 text-white -right-11 -top-2'>2</span> */}

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
  );
};

export default Navbar;
