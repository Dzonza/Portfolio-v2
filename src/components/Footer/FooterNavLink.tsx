import { type FC } from 'react';
import { Link } from 'react-scroll';

interface LinkData {
  title: string;
  to: string;
  setIsHovered: (x: string) => void;
  isHovered: string;
}

const FooterNavLink: FC<LinkData> = ({
  title,
  to,
  setIsHovered,
  isHovered,
}) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={to === 'home' ? 0 : 100}
      className={`text-[#fbfbfb] text-[18px] font-light   duration-500 cursor-pointer ${
        isHovered === title
          ? 'opacity-100'
          : isHovered
          ? 'opacity-50'
          : 'opacity-100'
      }`}
      onMouseEnter={() => {
        setIsHovered(title);
      }}
      onMouseLeave={() => {
        setIsHovered('');
      }}
    >
      {title}
    </Link>
  );
};

export default FooterNavLink;
