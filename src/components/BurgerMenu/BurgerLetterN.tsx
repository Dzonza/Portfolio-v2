import { motion } from 'motion/react';
import { useContext } from 'react';
import { NavLinks } from '../store/BurgerMenuNavContext';

const BurgerLetterN = () => {
  const { isClicked } = useContext(NavLinks);

  return (
    <>
      <motion.img
        animate={isClicked ? { scale: [1, 0.9, 1] } : { scale: 1 }}
        transition={
          isClicked
            ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.4, ease: 'easeOut' }
        }
        className="absolute left-[20%] top-[32%]"
        src="/images/contact-n-shadow.png"
        alt="n letter dark"
      />
      <motion.img
        animate={isClicked ? { y: [0, -8, 0] } : { y: 0 }}
        transition={
          isClicked
            ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.4, ease: 'easeOut' }
        }
        className="absolute left-[21%] top-[28%]"
        src="/images/contact-n-letter.png"
        alt="n letter"
      />
    </>
  );
};

export default BurgerLetterN;
