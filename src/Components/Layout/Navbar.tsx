"use client";
import { LuBriefcaseBusiness, LuX, LuAlignRight } from "react-icons/lu";
import Button from "../Ui/Button";
import { useState } from "react";
import Link from "next/link";

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
        } transition-all duration-300 ease-in-out
  absolute md:static md:flex-row md:translate-y-0 md:opacity-100
  md:bg-transparent bg-white text-black left-0 top-0
  w-full flex-col flex items-center md:justify-center
  md:gap-8
  md:w-auto text-[15px] md:py-3 pt-10 overflow-hidden`}
      >
        <LuX
          onClick={() => {
            setShowHam(false);
          }}
          className="absolute top-2 right-2 text-2xl md:hidden text-black cursor-pointer"
        />

        <li className="w-full">
          <Link
            href="/"
            className="block w-full text-black py-2 px-4 md:text-white hover:bg-primary hover:text-white md:hover:bg-transparent transition-all duration-200"
          >
            Home
          </Link>
        </li>

        <li className="w-full">
          <Link
            href="/"
            className="block w-full text-black py-2 px-4 md:text-white hover:bg-primary hover:text-white md:hover:bg-transparent transition-all duration-200"
          >
            Jobs
          </Link>
        </li>

        <li className="w-full">
          <Link
            href="/"
            className="block w-full text-black py-2 px-4 md:text-white hover:bg-primary hover:text-white md:hover:bg-transparent transition-all duration-200"
          >
            About
          </Link>
        </li>

        <li className="w-full">
          <Link
            href="/contact"
            className="block w-full text-black py-2 px-4 md:text-white hover:bg-primary hover:text-white md:hover:bg-transparent transition-all duration-200"
          >
            Contact
          </Link>
        </li>
        <li className="w-full md:hidden">
          <Link
            href="/login"
            className="block w-full py-2 px-4 text-black hover:bg-primary hover:text-white transition-all duration-200"
          >
            Login
          </Link>
        </li>

        <li className="w-full md:hidden">
          <Link
            href="/sign-up"
            className="block w-full py-2 px-4 text-black hover:bg-primary hover:text-white transition-all duration-200"
          >
            Register
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex items-center justify-center gap-2">
        <Button link={"/login"} bg={false} content={"Login"} />
        <Button link={"/sign-up"} bg={true} content={"Register"} />
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
