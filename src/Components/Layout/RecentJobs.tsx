import Button from "@/Components/Ui/Button";
import Heading from "../Ui/Heading";

function RecentJobs() {
  return (
    <div className="w-full h-full py-16">
      {/* Heading */}
      <div className="w-full px-18 flex items-center justify-between">
        <Heading
          heading="Recent Jobs Available"
          subHeading="At eu lobortis pretium tincidunt amet lacus ut aenean aliquet"
          align="text-center lg:text-left"
        />
        <Button
          link="/"
          bg={false}
          underline="underline"
          color="text-primary"
          content="View all"
        />
      </div>
    </div>
  );
}
export default RecentJobs;
