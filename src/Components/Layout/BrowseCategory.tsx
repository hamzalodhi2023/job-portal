import Heading from "../Ui/Heading";
import CategoryCards from "./CategoryCards";
import BROWSE_CATEGORY from "@/Data/BrosweCategory";
import { BrowseCategoryProps } from "@/@Types/BrowseCategory";

function BrowseCategory() {
  return (
    <div className="py-10 px-5 bg-primary/10 flex items-center justify-center flex-col gap-10">
      <Heading
        heading="Browse by Category"
        subHeading="At eu lobortis pretium tincidunt amet lacus ut a..."
      />
      <div className="w-full flex items-center justify-center flex-col gap-10">
        {BROWSE_CATEGORY.map((item: BrowseCategoryProps, index: number) => (
          <CategoryCards key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
export default BrowseCategory;
