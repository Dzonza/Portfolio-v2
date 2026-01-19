import { motion } from 'motion/react';
import type { FC } from 'react';

interface ImagesData {
  isInView: boolean;
}

const StaticImages: FC<ImagesData> = ({ isInView }) => {
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
        className="absolute top-[35%] right-[85%]  lg:top-28 lg:right-[40%] "
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
        className="absolute top-1/2 -translate-y-full right-20"
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
        className="absolute bottom-[8%] right-1/3"
      />
    </>
  );
};

export default StaticImages;
