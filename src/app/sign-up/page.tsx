"use client";

import { useState } from "react";
import Button from "@/Components/Ui/Button";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterFormData } from "@/Validation/Register";

function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    mode: "onSubmit",
  });
  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex">
      {/* LEFT FORM */}
      <div className="lg:w-1/2 w-full h-full flex items-center justify-center lg:bg-none bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/auth.jpg')] bg-cover bg-center">
        <div className="w-[70%] max-w-md flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold text-white lg:text-black">
              Create Account
            </h2>
            <p className="text-sm lg:text-gray-600 flex items-center gap-2 text-white">
              Already have account?
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName")}
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary text-white lg:text-black placeholder:text-gray-500 w-full"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            {/* UserName */}
            <div>
              <input
                type="text"
                placeholder="Username"
                {...register("username")}
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary text-white lg:text-black placeholder:text-gray-500 w-full"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                {...register("email")}
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary text-white lg:text-black placeholder:text-gray-500 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Password */}
            <div>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-primary">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  className="w-full outline-none text-white lg:text-black placeholder:text-gray-500"
                />
                {showPassword ? (
                  <LuEyeOff
                    className="text-gray-500 cursor-pointer text-xl"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <LuEye
                    className="text-gray-500 cursor-pointer text-xl"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Conform Password */}
            <div>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-primary">
                <input
                  type={showConformPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  className="w-full outline-none text-white lg:text-black placeholder:text-gray-500"
                />
                {showConformPassword ? (
                  <LuEyeOff
                    className="text-gray-500 cursor-pointer text-xl"
                    onClick={() => setShowConformPassword(false)}
                  />
                ) : (
                  <LuEye
                    className="text-gray-500 cursor-pointer text-xl"
                    onClick={() => setShowConformPassword(true)}
                  />
                )}
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            {/* Submit */}
            <Button bg={true} content="Create Account" width="w-full" />
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
