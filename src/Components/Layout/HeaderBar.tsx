import SVG_DATA from "@/Data/CompaniesSvg";
function HeaderBar() {
  return (
    <div className="w-full bg-black flex items-center justify-start lg:justify-evenly gap-20 py-10 px-18 overflow-x-scroll scrollbar-none">
      {SVG_DATA.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
}
export default HeaderBar;
