import Heading from "../Ui/Heading";
import TestimonialsCards from "./TestimonialsCards";

function Testimonials() {
  return (
    <div className="w-full h-full bg-primary/10 py-15 px-5 gap-15">
      <Heading
        heading="Testimonials from Our Cuctomers"
        subHeading="At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id"
      />
      <div className="w-full p-5 flex items-center justify-center flex-col gap-5 lg:flex-row lg:flex-wrap">
        <TestimonialsCards />
        <TestimonialsCards />
      </div>
    </div>
  );
}

export default Testimonials;
