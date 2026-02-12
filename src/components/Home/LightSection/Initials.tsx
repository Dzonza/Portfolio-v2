import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useLayoutEffect, useRef, useState } from 'react';
import useResize from '../../../CustomHooks/Resize';
import { useLetterPosition } from '../../../CustomHooks/UseLetterPoisition';

const Initials = () => {
  const { scrollY } = useScroll();
  const { landingMref, landingNref } = useLetterPosition();
  const { width } = useResize();
  const [ready, setReady] = useState(false);
  const [currentPosLetters, setCurrentPosLetters] = useState({
    fallingN: 0,
    fallingM: 0,
    landingN: 0,
    landingM: 0,
  });
  // const letterM = useRef<number>(80);
  // const letterN = useRef<number>(80);
  const mRefLetter = useRef<HTMLImageElement | null>(null);
  const nRefLetter = useRef<HTMLImageElement | null>(null);
  const rotateNref = useRef<number>(174);
  const moveRightMref = useRef<number>(40);

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

      setCurrentPosLetters({
        fallingN,
        fallingM,
        landingN,
        landingM,
      });
      setReady(true);
      // if (width > 1024) {
      //   letterM.current = 25;
      //   letterN.current = 40;
      // }

      // if (width <= 1024) {
      //   letterM.current = 30;
      //   letterN.current = 40;
      // }
      // if (width <= 768) {
      //   letterM.current = 30;
      //   letterN.current = 30;
      // }

      // if (width <= 480) {
      //   rotateNref.current = 260;
      //   letterM.current = -20;
      //   letterN.current = -40;
      //   moveRightMref.current = 0;
      // }
    };

    const init = async () => {
      await document.fonts.ready;
      requestAnimationFrame(measure);
    };

    init();

    window.addEventListener('resize', measure);

    return () => window.removeEventListener('resize', measure);
  }, [width, landingMref, landingNref]);

  const rawMoveDownN = useTransform(
    scrollY,
    [0, ready ? currentPosLetters.landingN - currentPosLetters.fallingN : 1],
    [0, ready ? currentPosLetters.landingN - currentPosLetters.fallingN : 0],
  );
  const rawRotateN = useTransform(
    scrollY,
    [0, ready ? currentPosLetters.landingN - currentPosLetters.fallingN : 1],
    ['0', `${rotateNref.current}deg`],
  );
  const rawMoveRightN = useTransform(
    scrollY,
    [0, ready ? currentPosLetters.landingN - currentPosLetters.fallingN : 1],
    [0, 20],
  );

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
    [0, ready ? currentPosLetters.landingM - currentPosLetters.fallingM : 1],
    [0, ready ? currentPosLetters.landingM - currentPosLetters.fallingM : 0],
  );
  const rawRotateM = useTransform(
    scrollY,
    [0, ready ? currentPosLetters.landingM - currentPosLetters.fallingM : 1],
    ['0', '385deg'],
  );
  const rawMoveRightM = useTransform(
    scrollY,
    [0, ready ? currentPosLetters.landingM - currentPosLetters.fallingM : 1],
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
