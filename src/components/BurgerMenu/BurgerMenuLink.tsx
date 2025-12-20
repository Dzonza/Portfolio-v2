import type { FC } from 'react';
import { Link } from 'react-scroll';

interface LindData {
  title: string;
  to: string;
}

const BurgerMenuLink: FC<LindData> = ({ title, to }) => {
  return (
    <Link
      to={to}
      className="cursor-pointer text-center text-[22px] duration-500 text-[#151419] font-light py-[6px] border px-10 bg-[size:300%] bg-[#fbfbfb] bg-[linear-gradient(135deg,transparent_0%,transparent_50%,#151419_50%)] hover:bg-[position:99%] hover:text-[#fbfbfb]"
    >
      {title}
    </Link>
  );
};

export default BurgerMenuLink;
