import Navbar from "@/Components/Layout/Navbar";
import Header from "@/Components/Layout/Header";
import RecentJobs from "@/Components/Layout/RecentJobs";
import BrowseCategory from "@/Components/Layout/BrowseCategory";
import Info from "@/Components/Layout/Info";
import Testimonials from "../Components/Layout/Testimonials";

function page() {
  return (
    <div className="h-full ">
      <Navbar />
      <Header />
      <RecentJobs />
      <BrowseCategory />
      <Info />
      <Testimonials />
    </div>
  );
}

export default page;
