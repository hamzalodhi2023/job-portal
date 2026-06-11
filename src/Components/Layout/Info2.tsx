import Heading from "../Ui/Heading";
import { LuCrown, LuFileUser } from "react-icons/lu";

function Info2() {
  return (
    <div className="w-full py-15 px-5 lg:px-18 flex lg:flex-row items-center justify-center flex-col gap-16">
      <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 h-auto lg:h-125">
        {/* Left Image */}
        <div className="lg:row-span-2 h-60 lg:h-auto">
          <img
            src="/info1.png"
            alt=""
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        {/* Top Right Image */}
        <div className="h-60 lg:h-auto">
          <img
            src="/info2.png"
            alt=""
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        {/* Bottom Right Image */}
        <div className="h-60 lg:h-auto">
          <img
            src="/info3.png"
            alt=""
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center flex-col gap-10">
        {/* Heading */}
        <Heading
          heading="We’re Only Working With The Best"
          subHeading="Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit."
          align="lg:text-left text-center"
        />
        {/* icon cards */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-start gap-10">
          {/* left div */}
          <div className="flex items-center justify-center flex-col gap-8">
            <div className="w-full flex-col lg:flex-row flex items-center justify-start gap-4 px-7.75 py-5.75 text-center">
              <LuCrown className="text-primary text-2xl" />
              <p> Quality Job</p>
            </div>
            <div className="w-full flex-col lg:flex-row flex items-center justify-start gap-4 px-7.75 py-5.75 text-center">
              <LuCrown className="text-primary text-2xl" />
              <p> Top Companies</p>
            </div>
          </div>
          {/* Right div */}
          <div className="flex items-center justify-center flex-col gap-8">
            <div className="w-full flex-col lg:flex-row flex items-center justify-start gap-4 px-7.75 py-5.75 text-center">
              <LuFileUser className="text-primary text-2xl" />
              <p>Resume builder</p>
            </div>
            <div className="w-full flex-col lg:flex-row flex items-center justify-start gap-4 px-7.75 py-5.75 text-center">
              <LuCrown className="text-primary text-2xl" />
              <p>Top Talents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info2;
