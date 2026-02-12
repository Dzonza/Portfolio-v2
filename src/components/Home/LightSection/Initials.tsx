import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useLayoutEffect, useRef } from 'react';
import useResize from '../../../CustomHooks/Resize';
import { useLetterPosition } from '../../../CustomHooks/UseLetterPoisition';

const Initials = () => {
  const { scrollY } = useScroll();
  const { landingMref, landingNref } = useLetterPosition();
  const { width } = useResize();
  const letterM = useRef<number>(80);
  const letterN = useRef<number>(80);
  const mRefLetter = useRef<HTMLImageElement | null>(null);
  const nRefLetter = useRef<HTMLImageElement | null>(null);
  const rotateNref = useRef<number>(174);
  const moveRightMref = useRef<number>(40);
  const distanceN = useRef(0);
  const distanceM = useRef(0);
  useLayoutEffect(() => {
    const measure = () => {
      if (
        !mRefLetter.current ||
        !nRefLetter.current ||
        !landingMref.current ||
        !landingNref.current
      )
        return;

      const fallingN =
        nRefLetter.current.getBoundingClientRect().top + window.scrollY;
      const fallingM =
        mRefLetter.current.getBoundingClientRect().top + window.scrollY;
      const landingN =
        landingNref.current.getBoundingClientRect().top + window.scrollY;
      const landingM =
        landingMref.current.getBoundingClientRect().top + window.scrollY;

      distanceN.current = landingN - fallingN;
      distanceM.current = landingM - fallingM;

      if (width > 1024) {
        letterM.current = 25;
        letterN.current = 40;
      }

      if (width <= 1024) {
        letterM.current = 30;
        letterN.current = 40;
      }
      if (width <= 768) {
        letterM.current = 30;
        letterN.current = 30;
      }

      if (width <= 480) {
        rotateNref.current = 260;
        letterM.current = -20;
        letterN.current = -40;
        moveRightMref.current = 0;
      }
    };

    requestAnimationFrame(() => measure());

    window.addEventListener('resize', measure);

    return () => window.removeEventListener('resize', measure);
  }, [width, landingMref, landingNref]);

  const rawMoveDownN = useTransform(
    scrollY,
    [0, distanceN.current - letterN.current],
    [0, distanceN.current - letterN.current],
  );
  const rawRotateN = useTransform(
    scrollY,
    [0, distanceN.current],
    ['0', `${rotateNref.current}deg`],
  );
  const rawMoveRightN = useTransform(scrollY, [0, distanceN.current], [0, 20]);

  const moveRightN = useSpring(rawMoveRightN, {
    mass: 0.1,
  });
  const rotateN = useSpring(rawRotateN, {
    mass: 0.1,
  });

  const moveDownN = useSpring(rawMoveDownN, {
    mass: 0.1,
    stiffness: 200,
  });
  const rawMoveDownM = useTransform(
    scrollY,
    [0, distanceM.current - letterM.current],
    [0, distanceM.current - letterM.current],
  );
  const rawRotateM = useTransform(
    scrollY,
    [0, distanceM.current],
    ['0', '385deg'],
  );
  const rawMoveRightM = useTransform(
    scrollY,
    [0, distanceM.current],
    [0, moveRightMref.current],
  );

  const moveRightM = useSpring(rawMoveRightM, {
    mass: 0.1,
  });
  const rotateM = useSpring(rawRotateM, {
    mass: 0.1,
  });

  const moveDownM = useSpring(rawMoveDownM, {
    mass: 0.1,
  });
  return (
    <>
      <motion.img
        style={{ y: moveDownM, rotate: rotateM, x: moveRightM }}
        src="/images/m-letter-colored.png"
        alt="small blob shape"
        className="absolute w-52 xs:w-auto top-[170px] s:top-[190px]  md:top-[178px]  left-20 md:left-28 "
        ref={mRefLetter}
      />
      <motion.img
        style={{ y: moveDownN, rotate: rotateN, x: moveRightN }}
        src={
          width >= 480
            ? '/images/n-letter-colored.png'
            : '/images/n-letter-rotated.png'
        }
        alt="small blob shape"
        className="absolute  w-52 xs:w-auto bottom-[222px] right-[100px] s:right-[48px] sm:right-[120px] md:right-[150px] "
        ref={nRefLetter}
      />
    </>
  );
};

export default Initials;
