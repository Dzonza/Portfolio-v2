import { useContext, type FC } from 'react';
import { Link } from 'react-scroll';
import useResize from '../../CustomHooks/Resize';
import { NavLinks } from '../store/BurgerMenuNavContext';

interface LindData {
  title: string;
  to: string;
}

const BurgerMenuLink: FC<LindData> = ({ title, to }) => {
  const { handleClickedBtn } = useContext(NavLinks);
  const { width } = useResize();

  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={to === 'home' ? 0 : width > 768 ? 100 : 50}
      className="cursor-pointer text-center text-[22px] duration-500 text-[#151419] font-light py-[6px] z-50 border px-10 bg-[size:300%] bg-[#fbfbfb] bg-[linear-gradient(135deg,transparent_0%,transparent_50%,#151419_50%)] hover:bg-[position:99%] hover:text-[#fbfbfb]"
      onClick={handleClickedBtn}
    >
      {title}
    </Link>
  );
};

export default BurgerMenuLink;
