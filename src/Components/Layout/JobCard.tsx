import {
  LuBookmarkPlus,
  LuBriefcaseBusiness,
  LuClock4,
  LuWallet,
  LuMapPin,
} from "react-icons/lu";
import Button from "../Ui/Button";
import { JobDataProps, JobCardProps } from "@/@Types/Job";

function JobCard({ data }: JobCardProps) {
  return (
    <div className="py-10 lg:px-10 px-5 w-full flex items-center justify-center flex-col gap-10 shadow-[0_3px_8px_0_rgba(48,150,137,0.08)]">
      {/* time and save */}
      <div className=" flex items-center justify-between w-full">
        <p className="text-primary p-2 bg-[#3096891a] rounded-lg text-[16px] font-normal]">
          {data.postTime}
        </p>
        <LuBookmarkPlus className="text-3xl text-[#6C757D]" />
      </div>
      {/* content */}
      <div className="flex w-full items-start justify-center flex-col gap-5">
        {data.svg}

        <h2 className="text-[28px] font-semibold text-black">{data.heading}</h2>
        <p className="text-black">{data.subText}</p>
      </div>
      {/* Points Details and Job Details Button */}
      <div className="w-full flex items-start justify-center flex-col gap-10 lg:items-end lg:flex-row">
        {/* Point details */}
        <ul className="w-full flex items-start justify-center gap-6 flex-col lg:flex-row">
          <li className="w-full flex items-center justify-start gap-3">
            <LuBriefcaseBusiness className="text-primary text-3xl" />
            <span className="text-[#6C757D] text-[16px] font-semibold">
              {data.job}
            </span>
          </li>
          <li className="w-full flex items-center justify-start gap-3">
            <LuClock4 className="text-primary text-3xl" />
            <span className="text-[#6C757D] text-[16px] font-semibold">
              {data.timing}
            </span>
          </li>
          <li className="w-full flex items-center justify-start gap-3">
            <LuWallet className="text-primary text-3xl" />
            <span className="text-[#6C757D] text-[16px] font-semibold">
              {data.salary}
            </span>
          </li>
          <li className="w-full flex items-center justify-start gap-3">
            <LuMapPin className="text-primary text-3xl" />
            <span className="text-[#6C757D] text-[16px] font-semibold">
              {data.location}
            </span>
          </li>
        </ul>
        {/* Job Details Buttons*/}
        <Button
          bg={true}
          width="w-full lg:w-fit"
          content="Job Details"
          link="/"
        />
      </div>
    </div>
  );
}
export default JobCard;
