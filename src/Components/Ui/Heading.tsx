import { HeadingProps } from "@/@Types/Heading";
function Heading({
  heading,
  subHeading,
  align,
  headingSize,
  subHeadingSize,
  headingWeight,
  subHeadingWeight,
  headingColor,
  subHeadingColor
}: HeadingProps) {
  return (
    <div className="w-full">
      <h2
        className={`${headingColor ? headingColor : "text-black"} text-black ${headingSize ? headingSize : "text-[28px] md:text-[50px]"} ${headingWeight ? headingWeight : "font-bold"} ${align ? align : "text-center"} pb-10`}
      >
        {heading}
      </h2>
      <p
        className={` ${subHeadingColor ? subHeadingColor : "text-black"} ${subHeadingSize ? subHeadingSize : "text-[16px]"} ${subHeadingWeight ? subHeadingWeight : "font-normal"}   ${align ? align : "text-center"}`}
      >
        {subHeading}
      </p>
    </div>
  );
}
export default Heading;
