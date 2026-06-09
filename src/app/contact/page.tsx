import ContactHeader from "@/Components/Layout/ContactHeader"
import ContactForm from "@/Components/Layout/ContactForm"

function page() {
  return (
    <div className="h-full">
        <ContactHeader/>
        <ContactForm/>
    </div>
  )
}

export default page