import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const DifferentShapes = () => {
  const { scrollY } = useScroll();

  const scrollDown = useTransform(scrollY, [0, 500], [1, 0]);

  const rawScrollDown = useSpring(scrollDown, {
    mass: 1,
  });

  return (
    <>
      <img
        src="/images/blob-small.png"
        alt="small blob shape"
        className="absolute right-[15%] top-[20%] lg:right-[40%] lg:top-36"
      />
      <img
        src="/images/blob-large.png"
        alt="small blob shape"
        className="absolute bottom-16 left-20 lg:left-16 lg:bottom-52"
      />
      <img
        src="/images/line-circle.png"
        alt="small blob shape"
        className="absolute right-[45%] -rotate-[-60deg] top-[20%] lg:right-[25%] lg:top-72 lg:rotate-0"
      />
      <img
        src="/images/two-small-shapes.png"
        alt="small blob shape"
        className="absolute bottom-16 left-[80%] lg:bottom-20 lg:left-[35%] "
      />
      <motion.img
        style={{ scale: rawScrollDown }}
        src="/images/m-letter-cover.png"
        alt="small blob shape"
        className="absolute top-48 left-28 "
      />
      <motion.img
        style={{ scale: rawScrollDown }}
        src="/images/n-letter-cover.png"
        alt="small blob shape"
        className="absolute bottom-52 right-36"
      />
    </>
  );
};

export default DifferentShapes;
