import INFO_CARDS from "@/Data/InfoCards";
import Button from "../Ui/Button";
import Heading from "../Ui/Heading";
import InfoCounter from "./InfoCounter";
import { InfoCounterProps } from "@/@Types/InfoCounter";

function Info() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-10 lg:gap-21.5 py-10 px-5 lg:py-30 lg:px-18">
      <div className="w-full flex items-center justify-center gap-21.5 flex-col lg:flex-row">
        {/* Image Div */}
        <div className="w-[45%] rounded-3xl overflow-hidden flex items-center justify-start">
          <img src="./info-mobile.png" alt="" />
        </div>
        {/* Heading and Buttons */}
        <div className="w-[70%] flex items-center justify-center flex-col gap-15">
          <Heading
            heading="Good Life Begins With A Good Company"
            subHeading="Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat"
            align="text-center lg:text-left"
          />
          <div className="w-full flex items-center justify-start gap-6">
            <Button
              bg={true}
              content="Search Job"
              link="/"
              width="w-full lg:w-fit"
            />
            <Button
              bg={false}
              content="Learn more"
              link="/"
              display="hidden lg:flex"
              underline="underline"
              color="text-primary"
            />
          </div>
        </div>
      </div>
      {/* Counter */}
      <div className="w-full flex items-center justify-between flex-col gap-6 lg:flex-row">
        {INFO_CARDS.map((item: InfoCounterProps, index: number) => (
          <InfoCounter data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
export default Info;
