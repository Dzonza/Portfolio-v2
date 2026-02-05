import { motion } from 'motion/react';
import type { FC } from 'react';

interface ImagesData {
  isInView: boolean;
  isHovered: boolean;
}

const StaticImages: FC<ImagesData> = ({ isInView, isHovered }) => {
  return (
    <>
      <motion.img
        animate={isInView ? { y: [0, 8, 0] } : { y: 0 }}
        transition={
          isInView
            ? { duration: 2, repeat: Infinity, ease: 'linear' }
            : { duration: 0.4, ease: 'easeOut' }
        }
        src="/images/square.png"
        alt="square"
        className="absolute top-[35%] right-[80%] s:right-[85%] w-[50px] s:w-auto  lg:top-28 lg:right-[40%] "
      />
      <motion.img
        animate={isInView ? { y: [0, 8, 0] } : { y: 0 }}
        transition={
          isInView
            ? { duration: 2, repeat: Infinity, ease: 'linear', delay: 1 }
            : { duration: 0.4, ease: 'easeOut' }
        }
        src="/images/circle-hero.png"
        alt="circle"
        className="absolute top-[45%]  sm:top-1/2 w-[55px] s:w-auto -translate-y-full right-10 sm:right-20"
      />
      <motion.img
        animate={isInView ? { y: [0, 8, 0] } : { y: 0 }}
        transition={
          isInView
            ? { duration: 2, repeat: Infinity, ease: 'linear', delay: 0.5 }
            : { duration: 0.4, ease: 'easeOut' }
        }
        src="/images/triangle-hero.png"
        alt="circle"
        className={`absolute duration-500 w-[40px] s:w-auto  ${isHovered ? 'bottom-[10%] right-[25%] ' : 'bottom-[18%] right-1/3 '}`}
      />
    </>
  );
};

export default StaticImages;
