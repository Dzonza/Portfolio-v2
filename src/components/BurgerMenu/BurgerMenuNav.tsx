import type { DotLottie } from '@lottiefiles/dotlottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, MotionValue } from 'motion/react';
import { useCallback, useContext, useEffect, useRef, type FC } from 'react';
import { NavLinks } from '../store/BurgerMenuNavContext';
import Github from '../svg/Github';

import Linkedin from '../svg/Linkedin';
import BurgerLetterM from './BurgerLetterM';
import BurgerLetterN from './BurgerLetterN';
import BurgerMenuLink from './BurgerMenuLink';

interface NavData {
  xPos: MotionValue<number>;
}

const BurgerMenuNav: FC<NavData> = ({ xPos }) => {
  const { isClicked } = useContext(NavLinks);
  const lottieRef = useRef<DotLottie | null>(null);

  const handleLottie = useCallback((lottie: DotLottie) => {
    lottieRef.current = lottie;
  }, []);

  useEffect(() => {
    if (lottieRef.current && isClicked) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.pause();
    }
  }, [isClicked]);

  return (
    <motion.div
      style={{ x: xPos }}
      className={`fixed top-0 right-0 h-full duration-500 md:bg-[#fbfbfb] z-[1000] flex flex-col gap-5 justify-center items-center ${
        isClicked ? 'w-full' : 'w-0'
      }`}
    >
      <nav
        className={`relative flex flex-col gap-5   ${
          isClicked
            ? 'opacity-100 delay-300  duration-500'
            : ' duration-300 opacity-0 delay-0 invisible'
        }`}
      >
        <BurgerMenuLink title="Home" to="home"></BurgerMenuLink>
        <BurgerMenuLink title="About" to="about"></BurgerMenuLink>
        <BurgerMenuLink title="Projects" to="projects"></BurgerMenuLink>
        <BurgerMenuLink title="Contact" to="contact"></BurgerMenuLink>
        <BurgerLetterM />
        <BurgerLetterN />
        <DotLottieReact
          src="lottie/blob.lottie"
          loop
          className=" absolute bottom-0 left-0 w-[800px] -translate-x-[48%] translate-y-full opacity-10"
          dotLottieRefCallback={handleLottie}
          speed={0.5}
        />
        <img
          src="images/blob-small-orange.png"
          alt=""
          className="absolute w-[90px] top-0 right-0 -translate-y-[50%] translate-x-[150%]"
        />
      </nav>
      <div
        className={`flex gap-1 z-[900]  ${
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
