import { motion } from 'motion/react';
import { useContext } from 'react';
import { NavLinks } from '../store/BurgerMenuNavContext';

const BurgerLetterM = () => {
  const { isClicked } = useContext(NavLinks);
  return (
    <>
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
        className="absolute bottom-[20%] right-[25%]"
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
        className="absolute bottom-[24%] right-[25%]"
        src="/images/contact-m-letter.png"
        alt="n letter"
      />
    </>
  );
};

export default BurgerLetterM;
