import Heading from "../Ui/Heading";
import { InfoCounterCardsProps } from "@/@Types/InfoCounter";

function InfoCounter({ data }: InfoCounterCardsProps) {
  return (
    <div className="flex items-center lg:items-start justify-evenly flex-col gap-7 w-75">
      <h3 className="text-primary font-bold text-6xl text-center">
        {data.count}
      </h3>
      <Heading
        heading={data.heading}
        subHeading={data.paragraph}
        align="text-center lg:text-left"
        headingSize="text-2xl"
        headingWeight="font-[600]"
      />
    </div>
  );
}
export default InfoCounter;
