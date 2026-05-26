import Navbar from "@/Components/Layout/Navbar";
import Header from "@/Components/Layout/Header";
import RecentJobs from "@/Components/Layout/RecentJobs";
import Button from "@/Components/Ui/Button";

function page() {
  return (
    <div className="h-full ">
      <Navbar />
      <Header />
      <RecentJobs />
    </div>
  );
}

export default page;
