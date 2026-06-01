"use client";

import { useState } from "react";
import Button from "@/Components/Ui/Button";
import { LuEye, LuEyeOff } from "react-icons/lu";

function Page() {
  return (
    <div className="w-full h-screen flex">
      {/* LEFT FORM */}
      <div className="lg:w-1/2 w-full h-full flex items-center justify-center lg:bg-none bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/auth.jpg')] bg-cover bg-center">
        <div className="w-[70%] max-w-md flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold text-white lg:text-black">
              Sign in
            </h2>
            <p className="text-sm lg:text-gray-600 flex items-center gap-2 text-white">
              Go back to
              <Button
                bg={false}
                content="Login"
                color="text-primary"
                underline="underline"
                link="/login"
                padding="p-0"
              />
            </p>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-4">
            {/* Email */}
            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary text-white lg:text-black placeholder:text-gray-500"
            />
            {/* Submit */}
            <Button
              bg={true}
              content="Forgot Password"
              link="/reset-password"
              width="w-full"
            />
          </form>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 hidden h-full bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/auth.jpg')] bg-cover bg-center lg:flex items-center justify-center px-10">
        <h1 className="text-white font-semibold text-4xl leading-tight text-center">
          Over 1,75,324 candidates <br /> waiting for good employees.
        </h1>
      </div>
    </div>
  );
}

export default Page;
