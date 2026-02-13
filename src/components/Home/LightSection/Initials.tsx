import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';
import useResize from '../../../CustomHooks/Resize';

const Initials = () => {
  const { scrollY } = useScroll();
  const { width } = useResize();

  const mRefLetter = useRef<HTMLImageElement | null>(null);
  const nRefLetter = useRef<HTMLImageElement | null>(null);

  const rawMoveDownN = useTransform(scrollY, [0, 800], [0, 500]);
  const rawRotateN = useTransform(scrollY, [0, 1500], ['0', `385deg`]);
  const rawScaleOpacityN = useTransform(scrollY, [0, 800], [1, 0]);

  const rotateN = useSpring(rawRotateN, {
    mass: 0.1,
  });
  const scaleOpacityN = useSpring(rawScaleOpacityN, {
    mass: 0.1,
  });

  const moveDownN = useSpring(rawMoveDownN, {
    mass: 0.1,
    stiffness: 200,
  });
  const rawMoveDownM = useTransform(scrollY, [0, 800], [0, 500]);
  const rawRotateM = useTransform(scrollY, [0, 1500], ['0', '385deg']);
  const rawScaleOpacityM = useTransform(scrollY, [0, 600], [1, 0]);

  const scaleOpacityM = useSpring(rawScaleOpacityM, {
    mass: 0.1,
  });

  const rotateM = useSpring(rawRotateM, {
    mass: 0.1,
  });

  const moveDownM = useSpring(rawMoveDownM, {
    mass: 0.1,
    stiffness: 200,
  });
  return (
    <>
      <motion.img
        style={{
          y: moveDownM,
          rotate: rotateM,
          opacity: scaleOpacityN,
          scale: scaleOpacityN,
        }}
        src="/images/m-letter-colored.png"
        alt="small blob shape"
        className="absolute w-48 ss:w-auto top-[170px] s:top-[190px]  md:top-[178px]  left-20 md:left-28 "
        ref={mRefLetter}
      />
      <motion.img
        style={{
          y: moveDownN,
          rotate: rotateN,
          scale: scaleOpacityM,
          opacity: scaleOpacityM,
        }}
        src={
          width >= 480
            ? '/images/n-letter-colored.png'
            : '/images/n-letter-rotated.png'
        }
        alt="small blob shape"
        className="absolute  w-48 ss:w-auto bottom-[222px] right-[100px] s:right-[48px] sm:right-[120px] md:right-[150px] "
        ref={nRefLetter}
      />
    </>
  );
};

export default Initials;
