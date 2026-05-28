import Heading from "../Ui/Heading";

function InfoCounter() {
  return (
    <div className="flex items-center justify-center flex-col gap-7">
      <h3 className="text-primary font-bold text-6xl text-center">12K+</h3>
      <Heading
        heading="Clients worldwide"
        subHeading="At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum"
        headingSize="text-2xl"
        headingWeight="font-[600]"
      />
    </div>
  );
}
export default InfoCounter;
