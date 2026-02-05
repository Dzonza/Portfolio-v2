import { motion } from 'motion/react';
import { useContext, type FC } from 'react';
import { NavLinks } from '../store/BurgerMenuNavContext';

interface letterData {
  isInView: boolean;
}

const ContactLetterN: FC<letterData> = ({ isInView }) => {
  const { isClicked } = useContext(NavLinks);

  return (
    <>
      <motion.img
        animate={isInView && !isClicked ? { scale: [1, 0.9, 1] } : { scale: 1 }}
        transition={
          isInView && !isClicked
            ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.4, ease: 'easeOut' }
        }
        className="w-52 xs:w-auto absolute top-[4%] xs:top-0 left-0 xs:left-[5%] "
        src="/images/contact-n-shadow.png"
        alt="n letter dark"
      />
      <motion.img
        animate={isInView && !isClicked ? { y: [0, -8, 0] } : { y: 0 }}
        transition={
          isInView && !isClicked
            ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.4, ease: 'easeOut' }
        }
        className="w-52 xs:w-auto absolute left-[2%] xs:left-[7%] -top-[3%] xs:-top-[7%] "
        src="/images/contact-n-letter.png"
        alt="n letter"
      />
    </>
  );
};

export default ContactLetterN;
