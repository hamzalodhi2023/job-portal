import Link from 'next/link';
import { ButtonProps } from '@/@Types/Button';

function Button({ link, bg, content }: ButtonProps) {
  return (
    <Link
      href={link}
      className={`${bg ? 'bg-primary ' : 'bg-transparent'} text-[16px] text-white py-3.5 px-5 rounded-lg`}
    >
      {content}
    </Link>
  );
}

export default Button;
