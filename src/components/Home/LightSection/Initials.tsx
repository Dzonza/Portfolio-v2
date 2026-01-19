import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useContext, useEffect, useRef, useState } from 'react';
import useResize from '../../../CustomHooks/Resize';
import { LetterPosition } from '../../store/LetterPositionContext';

const Initials = () => {
  const { scrollY } = useScroll();
  const { position } = useContext(LetterPosition);
  const { width } = useResize();
  const [currentPosLetters, setCurrentPosLetters] = useState({ n: 0, m: 0 });
  const letterM = useRef<number>(80);
  const letterN = useRef<number>(80);
  const mRefLetter = useRef<HTMLImageElement | null>(null);
  const nRefLetter = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (mRefLetter.current && nRefLetter.current) {
      setCurrentPosLetters({
        n: nRefLetter.current?.getBoundingClientRect().y,
        m: mRefLetter.current?.getBoundingClientRect().y,
      });
    }
    if (width < 1024) {
      letterM.current = 30;
      letterN.current = 40;
    } else {
      letterM.current = 25;
      letterN.current = 40;
    }
  }, [width]);
  console.log(position.m - currentPosLetters.m, currentPosLetters.n);

  const rawMoveDownN = useTransform(
    scrollY,
    [0, position.n - currentPosLetters.n - letterN.current],
    [0, position.n - currentPosLetters.n - letterN.current]
  );
  const rawRotateN = useTransform(
    scrollY,
    [0, position.n - currentPosLetters.n],
    ['0', '174deg']
  );
  const rawMoveRightN = useTransform(
    scrollY,
    [0, position.n - currentPosLetters.n],
    [0, 20]
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
    [0, position.m - currentPosLetters.m - letterM.current],
    [0, position.m - currentPosLetters.m - letterM.current]
  );
  const rawRotateM = useTransform(
    scrollY,
    [0, position.m - currentPosLetters.m],
    ['0', '385deg']
  );
  const rawMoveRightM = useTransform(
    scrollY,
    [0, position.m - currentPosLetters.m],
    [0, 40]
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
        className="absolute  top-[178px] left-28 "
        ref={mRefLetter}
      />
      <motion.img
        style={{ y: moveDownN, rotate: rotateN, x: moveRightN }}
        src="/images/n-letter-colored.png"
        alt="small blob shape"
        className="absolute  bottom-[222px] right-[150px] "
        ref={nRefLetter}
      />
    </>
  );
};

export default Initials;
