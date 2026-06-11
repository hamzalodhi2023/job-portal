import AboutHeader from "@/Components/Layout/AboutHeader";
import AboutInfo from "@/Components/Layout/AboutInfo";
import HowItWork from "@/Components/Layout/HowItWork";
import Info2 from "@/Components/Layout/Info2";

function page() {
  return (
    <div className="h-full">
      <AboutHeader />
      <AboutInfo />
      <HowItWork />
      <Info2 />
    </div>
  );
}

export default page;
