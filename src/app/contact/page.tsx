import ContactHeader from "@/Components/Layout/ContactHeader"
import ContactForm from "@/Components/Layout/ContactForm"
import Footer from "@/Components/Layout/Footer"

function page() {
  return (
    <div className="h-full">
        <ContactHeader/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page