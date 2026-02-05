import { motion } from 'motion/react';
import { useContext } from 'react';
import { NavLinks } from '../store/BurgerMenuNavContext';

const BurgerLetterM = () => {
  const { isClicked } = useContext(NavLinks);
  return (
    <section className="z-[800] absolute bottom-0 right-0 w-full h-full translate-x-[60%] translate-y-[70%]">
      <motion.img
        animate={isClicked ? { scale: [1, 0.9, 1] } : { scale: 1 }}
        transition={
          isClicked
            ? {
                duration: 4,
                repeat: Infinity,
                delay: 1,
                ease: 'easeInOut',
              }
            : { duration: 0.4, ease: 'easeOut' }
        }
        className="absolute w-[200px] m:w-[400px] bottom-0 right-0 "
        src="/images/contact-m-shadow.png"
        alt="n letter dark"
      />
      <motion.img
        animate={isClicked ? { y: [0, -8, 0] } : { y: 0 }}
        transition={
          isClicked
            ? {
                duration: 4,
                repeat: Infinity,
                delay: 1,
                ease: 'easeInOut',
              }
            : { duration: 0.4, ease: 'easeOut' }
        }
        className="absolute w-[200px]  m:w-[400px] bottom-[4%] right-0"
        src="/images/contact-m-letter.png"
        alt="n letter"
      />
    </section>
  );
};

export default BurgerLetterM;
