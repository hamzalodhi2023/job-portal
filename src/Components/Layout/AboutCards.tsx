import { LuCircleUserRound } from "react-icons/lu";
import Heading from "../Ui/Heading";

function AboutCards() {
  return (
    <div className="flex w-76.5 h-h-70 flex-col justify-center items-center gap-6 rounded-[20px] bg-white shadow-[0_3px_8px_0_rgba(48,150,137,0.08)] px-8.25">
      <LuCircleUserRound className="text-primary text-4xl" />
      <div>
        <Heading
          heading="Create Account"
          subHeading="Nunc sed a nisl purus. Nibh dis faucibus proin lacus "
          headingSize="text-[20px]"
          subHeadingSize="text-[16px]"
        />
      </div>
    </div>
  );
}

export default AboutCards;
