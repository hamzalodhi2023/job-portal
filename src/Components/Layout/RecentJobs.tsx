import Button from "@/Components/Ui/Button";
import Heading from "@/Components/Ui/Heading";
import JobCard from "./JobCard";
import JOB_DATA from "@/Data/Job";
import { JobDataProps, JobCardProps } from "@/@Types/Job";

function RecentJobs() {
  return (
    <div className="w-full h-full py-16 flex items-center justify-center flex-col gap-16">
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
          display="hidden lg:flex"
        />
      </div>
      <div className="w-full lg:px-18 px-5">
        {JOB_DATA.map((item: JobDataProps, index: number) => (
          <JobCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
export default RecentJobs;
