import { motion } from 'motion/react';
import { useContext } from 'react';
import { NavLinks } from '../store/BurgerMenuNavContext';

const BurgerLetterN = () => {
  const { isClicked } = useContext(NavLinks);

  return (
    <section className="absolute top-0 left-0 w-full h-full -translate-x-[60%] -translate-y-[55%]">
      <motion.img
        animate={isClicked ? { scale: [1, 0.9, 1] } : { scale: 1 }}
        transition={
          isClicked
            ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.4, ease: 'easeOut' }
        }
        className="absolute w-[200px] m:w-auto left-0  top-[8%] "
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
        className="absolute w-[200px] m:w-auto left-[1%]  top-[4%] "
        src="/images/contact-n-letter.png"
        alt="n letter"
      />
    </section>
  );
};

export default BurgerLetterN;
