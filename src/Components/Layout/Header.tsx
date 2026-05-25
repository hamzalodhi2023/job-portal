import Button from "../Ui/Button";
import HeaderCount from "../Ui/HeaderCount";
import {
  LuSearch,
  LuBriefcaseBusiness,
  LuUsers,
  LuBuilding,
} from "react-icons/lu";
import { HeaderCountProps } from "@/@Types/HeaderCount";
import HeaderBar from "./HeaderBar";

function Header() {
  let headerCountData: HeaderCountProps[] = [
    {
      icon: <LuBriefcaseBusiness />,
      num: "25,850",
      text: "Jobs",
    },
    {
      icon: <LuUsers />,
      num: "10,250",
      text: "Candidates",
    },
    {
      icon: <LuBuilding />,
      num: "18,400",
      text: "Companies",
    },
  ];
  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url('/header.jpg')] h-full w-full bg-no-repeat bg-cover bg-center flex items-center justify-center flex-col">
      <div className="flex items-center hover:text-white justify-center flex-col gap-10 w-[90%] lg:w-225 py-50">
        <div className="flex items-center justify-center flex-col gap-3">
          {/* Heading */}
          <h1 className="text-3xl md:text-7xl font-bold text-white text-center">
            Find Your Dream Job Today!
          </h1>
          <p className="text-[18px] font-extralight text-white/70 text-center">
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>
        </div>
        {/* Search Form Div */}
        <div className="bg-white flex items-center justify-center flex-col rounded-3xl w-87.5 lg:w-full px-5 py-10 lg:py-0 lg:px-0 gap-10 lg:flex-row lg:h-20">
          <div className="flex w-full it ems-center justify-center flex-col gap-5 lg:gap-5 lg:flex-row ">
            <input
              type="text"
              placeholder="Job Title or Company"
              className="w-full border-b border-zinc-600 lg:border-b-0 lg:border-r lg:border-r-[#c7c7c799] lg:px-5 outline-none py-2 text-zinc-500 placeholder:text-zinc-500 lg:w-48.75"
            />
            <select
              name=""
              id=""
              defaultValue="Select Location"
              className="w-full appearance-none border-b lg:border-b-0 lg:border-r lg:border-r-[#c7c7c799] outline-none lg:px-5 py-2 text-zinc-500 lg:w-48.75"
            >
              <option value="Select Location">Select Location</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="China">China</option>
            </select>
            <select
              name=""
              id=""
              defaultValue="Select Category"
              className="w-full appearance-none border-b lg:border-b-0 lg:border-r lg:border-r-[#c7c7c799] outline-none lg:px-5 py-2 text-zinc-500 lg:w-48.75"
            >
              <option value="Select Category">Select Category</option>
              <option value="Graphic Designer">Graphic Designer</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Frontend Developer">Frontend Developer</option>
            </select>
          </div>
          <Button
            icon={<LuSearch className="text-xl" />}
            width="w-full lg:w-fit"
            height="h-fit lg:h-full"
            padding="py-3.5 px-5 lg:px-7"
            rounded="lg:rounded-r-xl lg:rounded-tl-none lg:rounded-bl-none rounded-lg"
            link="/"
            bg={true}
            content="Search Job"
          />
        </div>
        {/* Header Count */}
        <div className="w-full flex items-center justify-evenly">
          {headerCountData.map((item, index) => (
            <HeaderCount
              key={index}
              icon={item.icon}
              num={item.num}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <HeaderBar />
    </div>
  );
}
export default Header;
