import Heading from "../Ui/Heading";
import Navbar from "./Navbar";

function AboutHeader() {
  return (
    <div className="h-87.5 flex items-center justify-center bg-black px-10">
      <Navbar />
      <Heading
        headingColor="text-white"
        subHeadingColor="text-white"
        heading="About Us"
        subHeading="your opportunity to build trust, share your brand’s unique story, and convert curious visitors into loyal customers"
      />
    </div>
  );
}

export default AboutHeader;
