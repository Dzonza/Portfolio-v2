import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import useResize from '../../../CustomHooks/Resize';

const DifferentShapes = () => {
  const { scrollY } = useScroll();
  const scrollDown = useTransform(scrollY, [0, 800], [1, 0]);
  const { width } = useResize();
  const rawScrollDown = useSpring(scrollDown, {
    mass: 1,
    stiffness: 80,
  });

  return (
    <>
      <img
        src="/images/blob-small.png"
        alt="small blob shape"
        className="absolute right-[10%] s:right-[15%] top-[40%] s:top-[20%] lg:right-[40%] lg:top-36"
      />
      <img
        src="/images/blob-large.png"
        alt="small blob shape"
        className="absolute bottom-16 left-10 s:left-20 lg:left-16 lg:bottom-52"
      />
      <img
        src="/images/line-circle.png"
        alt="small blob shape"
        className="absolute w-[75px] ss:w-[90px] md:w-auto right-[75%] xs:right-[15%] s:right-[45%] rotate-45 xs:-rotate-[210deg] s:-rotate-[-60deg] top-[20%] xs:top-[8%] s:top-[5%] md:top-[20%] lg:right-[25%] lg:top-72 lg:rotate-0"
      />
      <img
        src="/images/two-small-shapes.png"
        alt="small blob shape"
        className="absolute w-12 xs:w-auto bottom-16 left-[80%] lg:bottom-20 lg:left-[35%] "
      />
      <motion.img
        style={{ scale: rawScrollDown }}
        src="/images/m-letter-cover.png"
        alt="small blob shape"
        className=" w-48 ss:w-auto absolute top-[188px] s:top-52 md:top-48  left-20 md:left-28 "
      />
      <motion.img
        style={{ scale: rawScrollDown }}
        src={
          width > 480
            ? '/images/n-letter-cover.png'
            : '/images/n-letter-cover-rotated.png'
        }
        alt="small blob shape"
        className=" w-48 ss:w-auto absolute  bottom-52  right-[100px] s:right-10 sm:right-28 md:right-36"
      />
    </>
  );
};

export default DifferentShapes;
