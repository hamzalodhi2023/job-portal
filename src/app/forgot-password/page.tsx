"use client";

import Button from "@/Components/Ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ForgotPasswordSchema,
  ForgotPasswordFormData,
} from "@/Validation/Forgot-password";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(ForgotPasswordSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = (data) => {
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
              Forgot Password
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div>
              <input
                type="email"
                placeholder="Email address"
                {...register("email")}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary text-white lg:text-black placeholder:text-gray-500"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Button bg={true} content="Send Reset Link" width="w-full" />
          </form>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 hidden h-full bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/auth.jpg')] bg-cover bg-center lg:flex items-center justify-center px-10">
        <h1 className="text-white font-semibold text-4xl leading-tight text-center">
          Over 1,75,324 candidates
          <br />
          waiting for good employees.
        </h1>
      </div>
    </div>
  );
}

export default Page;
