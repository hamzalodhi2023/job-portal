import { HeaderCountProps } from "@/@Types/HeaderCount";
import {
  LuSearch,
  LuBriefcaseBusiness,
  LuUsers,
  LuBuilding,
} from "react-icons/lu";

function HeaderCount({ icon, num, text }: HeaderCountProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {/* text-white bg-primary w-10 h-10 rounded-full flex items-center justify-center p-2 */}
      <div className="lg:w-15 lg:h-15 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-2xl lg:text-4xl text-white">
        {icon}
      </div>
      <div className="flex items-start justify-center flex-col">
        <p className="text-[16px] font-bold text-white">{num}</p>
        <p className="text-[12px] font-normal text-white/80">{text}</p>
      </div>
    </div>
  );
}
export default HeaderCount;
