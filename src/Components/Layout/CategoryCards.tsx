import { BrowseCategoryCardsProps } from "@/@Types/BrowseCategory";

function CategoryCards({ data }: BrowseCategoryCardsProps) {
  return (
    <div className="w-76.5 h-70 bg-white rounded-3xl flex items-center justify-center flex-col gap-10">
      {data.icon}
      <h3 className="text-[24px] font-bold">{data.text}</h3>
      <div className="px-3 py-2 bg-[#3096891a] rounded-lg text-primary">
        {data.job}
      </div>
    </div>
  );
}
export default CategoryCards;
