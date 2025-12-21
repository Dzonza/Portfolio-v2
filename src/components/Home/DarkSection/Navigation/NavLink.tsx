import { useState, type FC } from 'react';
import { Link } from 'react-scroll';

interface Links {
  whereTo: string;
  text: string;
}

const NavLink: FC<Links> = ({ whereTo, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      className="relative z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={whereTo}
        smooth={true}
        duration={500}
        offset={whereTo === 'home' ? 0 : 100}
        className="text-[#FBFBFB] cursor-pointer"
      >
        {text}
      </Link>
      <div
        className={`absolute bottom-0 left-0  h-[1.2px] rounded-xl bg-[#FBFBFB] translate-y-1 duration-300 ${
          isHovered ? 'w-full' : 'w-0'
        }`}
      ></div>
    </li>
  );
};

export default NavLink;
