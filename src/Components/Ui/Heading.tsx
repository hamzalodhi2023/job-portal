import { HeadingProps } from "@/@Types/Heading";
function Heading({ heading, subHeading, align }: HeadingProps) {
  return (
    <div className="w-full">
      <h2
        className={`text-black text-[28px] md:text-[50px] font-bold ${align ? align : "text-center"} pb-10`}
      >
        {heading}
      </h2>
      <p className={`text-[16px] font-normal ${align ? align : "text-center"}`}>
        {subHeading}
      </p>
    </div>
  );
}
export default Heading;
