import AboutHeader from "@/Components/Layout/AboutHeader"
import AboutInfo from "@/Components/Layout/AboutInfo"
import HowItWork from "@/Components/Layout/HowItWork"


function page() {
  return (
     <div className="h-full">
        <AboutHeader/>
        <AboutInfo/>
        <HowItWork/>
    </div>
  )
}

export default page