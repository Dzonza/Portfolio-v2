import { motion, MotionValue } from 'motion/react';
import { useContext, type FC } from 'react';
import useResize from '../../CustomHooks/Resize';
import { NavLinks } from '../store/BurgerMenuNavContext';
import Github from '../svg/Github';
import Linkedin from '../svg/Linkedin';
import BurgerMenuLink from './BurgerMenuLink';

interface NavData {
  xPos: MotionValue<number>;
}

const BurgerMenuNav: FC<NavData> = ({ xPos }) => {
  const { width } = useResize();
  const { isClicked } = useContext(NavLinks);
  return (
    <motion.div
      style={{ x: xPos }}
      className={`fixed top-0 right-0 h-full duration-500 bg-[#fbfbfb] z-20 flex flex-col gap-5 justify-center items-center ${
        isClicked ? (width > 1600 ? 'w-[600px]' : 'w-[400px]') : 'w-0'
      }`}
    >
      <nav
        className={`flex flex-col gap-5  ${
          isClicked
            ? 'opacity-100 delay-300  duration-500'
            : ' duration-300 opacity-0 delay-0 invisible'
        }`}
      >
        <BurgerMenuLink title="Home" to="home"></BurgerMenuLink>
        <BurgerMenuLink title="About" to="about"></BurgerMenuLink>
        <BurgerMenuLink title="Projects" to="projects"></BurgerMenuLink>
        <BurgerMenuLink title="Contact" to="contact"></BurgerMenuLink>
      </nav>
      <div
        className={`flex gap-1   ${
          isClicked
            ? 'opacity-100 delay-300 duration-500'
            : 'duration-300 opacity-0 delay-0 invisible'
        }`}
      >
        <a href="https://github.com/Dzonza" target="_blank">
          <Github black={true} />
        </a>
        <a
          href="https://www.linkedin.com/in/nikola-markovic-143b9b304/"
          target="_blank"
        >
          <Linkedin black={true} />
        </a>
      </div>
    </motion.div>
  );
};

export default BurgerMenuNav;
