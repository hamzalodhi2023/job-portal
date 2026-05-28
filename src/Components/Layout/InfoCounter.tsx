import Heading from "../Ui/Heading";
import { InfoCounterCardsProps } from "@/@Types/InfoCounter";

function InfoCounter({ data }: InfoCounterCardsProps) {
  return (
    <div className="flex items-center justify-center flex-col gap-7">
      <h3 className="text-primary font-bold text-6xl text-center">
        {data.count}
      </h3>
      <Heading
        heading={data.heading}
        subHeading={data.paragraph}
        headingSize="text-2xl"
        headingWeight="font-[600]"
      />
    </div>
  );
}
export default InfoCounter;
