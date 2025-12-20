import { type FC } from 'react';
import { Link } from 'react-router-dom';

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
      className={`text-[#fbfbfb] text-[18px] font-light   duration-500 ${
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
