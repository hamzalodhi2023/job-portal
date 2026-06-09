import Heading from "../Ui/Heading";
import AboutCards from "./AboutCards";

function HowItWork() {
  return (
    <div className="w-full flex items-center justify-center">
      <Heading
        heading="How it works"
        subHeading="At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus"
      />
      <div className="w-full px-18 flex items-center justify-center flex-col lg:flex-row gap-6">
        <AboutCards />
      </div>
    </div>
  );
}

export default HowItWork;
