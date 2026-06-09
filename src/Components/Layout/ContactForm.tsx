"use client";

import Button from "../Ui/Button";
import Heading from "../Ui/Heading";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactSchema, ContactFormData } from "@/Validation/ContactForm";

function ContactInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full py-15 px-5 lg:px-18">
      <div className="flex flex-col lg:flex-row items-stretch gap-6">
        {/* Contact Form */}
        <div className="w-full lg:w-[55%] px-6 lg:px-10 py-10 lg:py-15 bg-primary/10 rounded-[20px]">
          <Heading
            heading="Contact Info"
            subHeading="Nibh dis faucibus proin lacus tristique"
            headingSize="text-[28px]"
            subHeadingSize="text-[16px]"
          />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 flex flex-col gap-5"
          >
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName")}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary"
                />

                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName")}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary"
                />

                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                rows={6}
                placeholder="Write your message..."
                {...register("message")}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primary resize-none"
              />

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button bg={true} content="Send Message" width="w-full" />
          </form>
        </div>

        {/* Google Map */}
        <div className="w-full lg:w-[45%]">
          <iframe
            className="w-full h-[350px] sm:h-[450px] lg:h-full min-h-[500px] rounded-[20px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.123732868697!2d67.06660410340575!3d24.861736519664852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fa1dbf4b16d%3A0xdb7523f732a507f4!2sFortune%20Tower!5e0!3m2!1sen!2s!4v1780985126272!5m2!1sen!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;