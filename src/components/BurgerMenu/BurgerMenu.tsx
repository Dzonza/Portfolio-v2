import { useScroll, useSpring, useTransform } from 'motion/react';
import { useContext, useEffect } from 'react';
import useResize from '../../CustomHooks/Resize';
import { NavLinks } from '../store/BurgerMenuNavContext';
import AnimatedLetters from './AnimatedLetters';
import BurgerMenuBtn from './BurgerMenuBtn';
import BurgerMenuNav from './BurgerMenuNav';

const BurgerMenu = () => {
  const { scrollY } = useScroll();
  const { isClicked } = useContext(NavLinks);
  const { width } = useResize();

  useEffect(() => {
    if (isClicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isClicked]);

  const springY = useSpring(scrollY, {
    stiffness: 120,
    damping: 15,
    mass: 0.8,
  });
  const xPos = useTransform(
    springY,
    [width > 1024 ? 950 : 0, width > 1024 ? 1000 : 0],
    [100, 0],
  );

  return (
    <div className="relative">
      <BurgerMenuBtn xPos={xPos} />
      <div
        className={`fixed top-0 left-0 w-full h-full z-20 bg-[#151419] backdrop-invert duration-500 ${
          isClicked ? 'opacity-70 visible' : 'opacity-0 invisible'
        }`}
      ></div>
      <AnimatedLetters />
      <BurgerMenuNav xPos={xPos} />
    </div>
  );
};

export default BurgerMenu;
