import Navbar from "@/Components/Layout/Navbar";
import Header from "@/Components/Layout/Header";
import RecentJobs from "@/Components/Layout/RecentJobs";
import BrowseCategory from "@/Components/Layout/BrowseCategory";
import Info from "@/Components/Layout/Info";

function page() {
  return (
    <div className="h-full ">
      <Navbar />
      <Header />
      <RecentJobs />
      <BrowseCategory />
      <Info />
    </div>
  );
}

export default page;
