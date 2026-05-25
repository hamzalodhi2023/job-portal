"use client";
import { LuBriefcaseBusiness, LuX, LuAlignRight } from "react-icons/lu";
import Button from "../Ui/Button";
import { useState } from "react";

function Navbar() {
  const [showHam, setShowHam] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-6">
      <div className="flex items-center justify-center w-32.75 gap-2">
        <LuBriefcaseBusiness className="text-white font-bold text-3xl" />
        <h1 className="text-xl text-white">Job Portal</h1>
      </div>
      <ul
        className={`${
          showHam ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }   transition-all duration-300 ease-in-out
  absolute md:static md:flex-row md:translate-y-0 md:opacity-100
  md:bg-transparent bg-white text-black left-0 top-0
  w-full flex-col flex items-center justify-evenly
  md:w-[50%] text-[15px] md:py-3 pt-10 overflow-hidden`}
      >
        <LuX
          onClick={() => {
            setShowHam(false);
          }}
          className="absolute top-2 right-2 text-2xl md:hidden text-black cursor-pointer"
        />

        <li className="text-black py-2 w-full text-left md:text-white px-4 cursor-pointer transition-all duration-200 hover:translate-x-2 hover:bg-primary hover:text-white md:hover:translate-x-0 md:hover:bg-transparent">
          Home
        </li>
        <li className="text-black py-2 w-full text-left md:text-white px-4 cursor-pointer transition-all duration-200 hover:translate-x-2 hover:bg-primary hover:text-white md:hover:translate-x-0 md:hover:bg-transparent">
          Jobs
        </li>
        <li className="text-black py-2 w-full text-left md:text-white px-4 cursor-pointer transition-all duration-200 hover:translate-x-2 hover:bg-primary hover:text-white md:hover:translate-x-0 md:hover:bg-transparent">
          About
        </li>
        <li className="text-black py-2 w-full text-left md:text-white px-4 cursor-pointer transition-all duration-200 hover:translate-x-2 hover:bg-primary hover:text-white md:hover:translate-x-0 md:hover:bg-transparent">
          Contact
        </li>
        <li className="text-black py-2 w-full md:hidden text-left md:text-white px-4 cursor-pointer transition-all duration-200 hover:translate-x-2 hover:bg-primary hover:text-white md:hover:translate-x-0 md:hover:bg-transparent">
          Login
        </li>
        <li className="text-black py-2 w-full md:hidden text-left md:text-white px-4 cursor-pointer transition-all duration-200 hover:translate-x-2 hover:bg-primary hover:text-white md:hover:translate-x-0 md:hover:bg-transparent">
          Register
        </li>
      </ul>
      <div className="hidden md:flex items-center justify-center gap-2">
        <Button link={"/"} bg={false} content={"Login"} />
        <Button link={"/"} bg={true} content={"Register"} />
      </div>
      <LuAlignRight
        onClick={() => {
          setShowHam(true);
        }}
        className="text-white text-3xl md:hidden cursor-pointer"
      />
    </div>
  );
}

export default Navbar;
