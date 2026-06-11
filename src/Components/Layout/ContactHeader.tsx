import Heading from "../Ui/Heading";
import Navbar from "./Navbar";

function ContactHeader() {
  return (
    <div className="h-87.5 flex items-center justify-center bg-black px-10">
      <Navbar />
      <Heading
        headingColor="text-white"
        subHeadingColor="text-white"
        heading="Contact Us"
        subHeading="clearly tell visitors how to reach you, why they should contact you, and what to expect nexts"
      />
    </div>
  );
}

export default ContactHeader;
