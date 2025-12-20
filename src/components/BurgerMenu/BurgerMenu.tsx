import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import ContactLetterM from '../Contact/ContactLetterM';
import ContactLetterN from '../Contact/ContactLetterN';
import Github from '../svg/Github';
import Linkedin from '../svg/Linkedin';
import BurgerMenuLink from './BurgerMenuLink';

const BurgerMenu = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isClicked]);

  const { scrollY } = useScroll();
  const springY = useSpring(scrollY, {
    stiffness: 120,
    damping: 15,
    mass: 0.8,
  });

  const xPos = useTransform(springY, [950, 1000], [100, 0]);
  return (
    <div className=" relative ">
      <motion.section
        style={{ x: xPos }}
        className={`z-40 fixed top-8 right-8   rounded-[12px] w-[65px] h-[65px]  bg-[#fbfbfb]  border-[0.5px] border-[#FF5B04] duration-500  cursor-pointer p-5  ${
          isClicked
            ? 'shadow-[0px_0px_0px_#FF5B04]  border-[#fbfbfb]'
            : 'shadow-[3px_3px_0px_#FF5B04]  '
        } `}
        onClick={() => {
          setIsClicked((prevValue) => !prevValue);
        }}
      >
        <article className="flex flex-col gap-1 ">
          <div
            className={` h-1 bg-[#FF5B04] rounded-[12px] self-end duration-500 ${
              isClicked ? 'w-[70%]' : 'w-full'
            }`}
          ></div>
          <div
            className={` h-1 bg-[#FF5B04] rounded-[12px] duration-500 self-center  ${
              isClicked ? 'w-[70%]' : 'w-full'
            }`}
          ></div>
          <div
            className={` h-1 bg-[#FF5B04] rounded-[12px] duration-500 self-right ${
              isClicked ? 'w-[70%]' : 'w-full'
            }`}
          ></div>
        </article>
      </motion.section>
      <div
        className={`fixed top-0 left-0 w-full h-full z-20 bg-[#151419] backdrop-invert duration-500 ${
          isClicked ? 'opacity-70 visible' : 'opacity-0 invisible'
        }`}
      ></div>
      <div
        className={`fixed top-1/2 left-[30%] -translate-x-[30%] duration-500 -translate-y-1/2 z-40 h-[500px] w-[700px] ${
          isClicked ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ContactLetterN />
        <ContactLetterM />
      </div>
      <motion.div
        style={{ x: xPos }}
        className={`fixed top-0 right-0 h-full duration-500 bg-[#fbfbfb] z-20 flex flex-col gap-5 justify-center items-center ${
          isClicked ? 'w-[400px]' : 'w-0'
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
    </div>
  );
};

export default BurgerMenu;
