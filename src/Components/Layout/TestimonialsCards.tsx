import { IoIosStar } from "react-icons/io";
import Heading from "../Ui/Heading";
import Image from "next/image";
import Avatar from "@/public/Avatar.png";

function TestimonialsCards() {
  return (
    <div className="w-104 h-100 bg-white rounded-[20px] p-10 flex items-center justify-between flex-col shadow-[0_6px_20px_rgba(48,150,137,0.25)]">
      <div className="flex items-start justify-center flex-col gap-6">
        <div className="flex items-center justify-start gap-2">
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
          <IoIosStar className="text-yellow-500" />
        </div>
        <Heading
          heading="Amazing services"
          subHeading="Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis"
          align="text-left"
          headingSize="text-[24px]"
          subHeadingSize="text-[16px]"
          headingWeight="font-[600]"
          subHeadingWeight="font-[400]"
        />
      </div>
      <div className="w-full flex items-center justify-start gap-4">
        <Image src="/Avatar.png" width={50} height={50} alt="Avatar" />
        <div className="flex items-start justify-center flex-col">
          <h3 className="text-[16px] font-semibold text-left">Marco Kihn</h3>
          <p className="text-[16px] text-left font-normal text-gray-500">
            Happy Client
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCards;
