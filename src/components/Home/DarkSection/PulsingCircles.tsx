import { motion } from 'motion/react';
import type { FC } from 'react';

interface CirclesData {
  isInView: boolean;
}

const PulsingCircles: FC<CirclesData> = ({ isInView }) => {
  return (
    <>
      <motion.img
        initial={{ rotate: 180, x: '-50%', y: '-50%' }}
        animate={
          isInView
            ? { scale: [0, 1.3], opacity: [0, 1, 0] }
            : { scale: 0, opacity: 0 }
        }
        transition={
          isInView ? { duration: 3, repeat: Infinity } : { duration: 0.4 }
        }
        src="/images/ellipse-small.png"
        alt="small dotted circle"
        className=" absolute top-0 left-1/2 lg:top-1/2 lg:left-0 "
      />
      <motion.img
        initial={{ rotate: 180, x: '-50%', y: '-50%' }}
        animate={
          isInView
            ? { scale: [0.27, 1.3], opacity: [0, 1, 0] }
            : { scale: 0.27, opacity: 0 }
        }
        transition={
          isInView
            ? { duration: 3, repeat: Infinity, delay: 0.8 }
            : { duration: 0.4 }
        }
        src="/images/ellipse-medium.png"
        alt="small dotted circle"
        className=" absolute top-0 left-1/2 lg:top-1/2 lg:left-0 "
      />
      <motion.img
        initial={{ rotate: 180, x: '-50%', y: '-50%' }}
        animate={
          isInView
            ? { scale: [0.4, 1.3], opacity: [0, 1, 0] }
            : { scale: 0.4, opacity: 0 }
        }
        transition={
          isInView
            ? { duration: 3, repeat: Infinity, delay: 1.3 }
            : { duration: 0.4 }
        }
        src="/images/ellipse-large.png"
        alt="small dotted circle"
        className=" absolute top-0 left-1/2 lg:top-1/2 lg:left-0 "
      />
    </>
  );
};

export default PulsingCircles;
