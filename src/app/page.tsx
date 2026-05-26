import Navbar from "@/Components/Layout/Navbar";
import Header from "@/Components/Layout/Header";
import RecentJobs from "@/Components/Layout/RecentJobs";
import BrowseCategory from "@/Components/Layout/BrowseCategory";

function page() {
  return (
    <div className="h-full ">
      <Navbar />
      <Header />
      <RecentJobs />
      <BrowseCategory />
    </div>
  );
}

export default page;
