import INFO_CARDS from "@/Data/InfoCards";
import Button from "../Ui/Button";
import Heading from "../Ui/Heading";
import InfoCounter from "./InfoCounter";
import { InfoCounterProps } from "@/@Types/InfoCounter";

function Info() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-10 py-10 px-5">
      <div className="w-full flex items-center justify-center flex-col gap-10">
        <img src="./info-mobile.png" alt="" />
        <Heading
          heading="Good Life Begins Width A Good Company"
          subHeading="Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morb"
          align="text-center lg:text-left"
        />
        <Button bg={true} content="Search Job" link="/" width="w-full" />
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-6">
        {INFO_CARDS.map((item: InfoCounterProps, index: number) => (
          <InfoCounter data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
export default Info;
