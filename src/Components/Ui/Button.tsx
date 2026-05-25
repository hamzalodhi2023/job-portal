import Link from "next/link";
import { ButtonProps } from "@/@Types/Button";

function Button({
  link,
  bg,
  content,
  width,
  icon,
  height,
  padding,
  rounded,
}: ButtonProps) {
  return (
    <Link
      href={link}
      className={`${bg ? "bg-primary " : "bg-transparent"} ${width ? width : "w-fit"} ${height ? height : "h-fit"} ${padding ? padding : "py-3.5 px-5"} ${rounded ? rounded : "rounded-lg"} text-center text-[16px] text-white flex items-center justify-center gap-2 font-semibold`}
    >
      {!icon ? "" : icon}
      <span className="text-nowrap">{content}</span>
    </Link>
  );
}

export default Button;
