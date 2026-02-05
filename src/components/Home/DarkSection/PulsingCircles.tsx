import { motion } from 'motion/react';
import { useEffect, useState, type FC } from 'react';
import useResize from '../../../CustomHooks/Resize';

interface CirclesData {
  isInView: boolean;
}

const PulsingCircles: FC<CirclesData> = ({ isInView }) => {
  const { width } = useResize();
  const [medCircleData, setMedCircleData] = useState({
    scale: 0,
    delay: 0,
  });

  useEffect(() => {
    if (width <= 480) {
      setMedCircleData({
        scale: 0.5,
        delay: 1.3,
      });
    } else {
      setMedCircleData({
        scale: 0.27,
        delay: 0.8,
      });
    }
  }, [width]);

  return (
    <>
      <motion.img
        initial={{ x: '-50%', y: '-50%', scale: 0 }}
        style={{ transformOrigin: '50% 50%' }}
        animate={
          isInView
            ? { scale: [0, 1.3], opacity: [0, 1, 0] }
            : { scale: 0, opacity: 0 }
        }
        transition={
          isInView
            ? { duration: 3, repeat: Infinity, ease: 'easeOut' }
            : { duration: 0.4 }
        }
        src="/images/ellipse-small.png"
        alt="small dotted circle"
        className=" absolute w-[230px] xs:w-[260px] h-[230] xs:h-[260px] s:w-[340px] s:h-[340px] top-0 left-1/2 lg:top-1/2 lg:left-0 "
      />
      <motion.img
        initial={{ x: '-50%', y: '-50%', scale: medCircleData.scale }}
        style={{ transformOrigin: '50% 50%' }}
        animate={
          isInView
            ? { scale: [medCircleData.scale, 1.3], opacity: [0, 1, 0] }
            : { scale: 0.27, opacity: 0 }
        }
        transition={
          isInView
            ? {
                duration: 3,
                repeat: Infinity,
                delay: medCircleData.delay,
                ease: 'easeOut',
              }
            : { duration: 0.4 }
        }
        src="/images/ellipse-medium.png"
        alt="small dotted circle"
        className=" absolute top-0 s:w-[520px] w-[380px] xs:w-[440px]  h-[380px] xs:h-[440px] s:h-[520px] left-1/2 lg:top-1/2 lg:left-0 "
      />
      {width > 640 && (
        <motion.img
          initial={{ x: '-50%', y: '-50%', scale: 0.4 }}
          style={{ transformOrigin: '50% 50%' }}
          animate={
            isInView
              ? { scale: [0.4, 1.3], opacity: [0, 1, 0] }
              : { scale: 0.4, opacity: 0 }
          }
          transition={
            isInView
              ? { duration: 3, repeat: Infinity, delay: 1.3, ease: 'easeOut' }
              : { duration: 0.4 }
          }
          src="/images/ellipse-large.png"
          alt="small dotted circle"
          className=" absolute top-0 w-[698px] h-[698px] left-1/2 lg:top-1/2 lg:left-0 "
        />
      )}
    </>
  );
};

export default PulsingCircles;
