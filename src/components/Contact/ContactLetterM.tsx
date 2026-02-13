import { motion } from 'motion/react';
import { useContext, type FC } from 'react';
import { NavLinks } from '../store/BurgerMenuNavContext';

interface letterData {
  isInView: boolean;
}

const ContactLetterM: FC<letterData> = ({ isInView }) => {
  const { isClicked } = useContext(NavLinks);
  return (
    <>
      <motion.img
        animate={isInView && !isClicked ? { scale: [1, 0.9, 1] } : { scale: 1 }}
        transition={
          isInView && !isClicked
            ? {
                duration: 4,
                repeat: Infinity,
                delay: 1,
                ease: 'easeInOut',
              }
            : { duration: 0.4, ease: 'easeOut' }
        }
        className="w-48 ss:w-auto absolute bottom-[4%] xs:bottom-[1%] right-[5%] xs:right-[8%]"
        src="/images/contact-m-shadow.png"
        alt="n letter dark"
      />
      <motion.img
        animate={isInView && !isClicked ? { y: [0, -8, 0] } : { y: 0 }}
        transition={
          isInView && !isClicked
            ? {
                duration: 4,
                repeat: Infinity,
                delay: 1,
                ease: 'easeInOut',
              }
            : { duration: 0.4, ease: 'easeOut' }
        }
        className="w-48 ss:w-auto absolute bottom-[10%] xs:bottom-[7%] right-[5%] xs:right-[8%]"
        src="/images/contact-m-letter.png"
        alt="n letter"
      />
    </>
  );
};

export default ContactLetterM;
