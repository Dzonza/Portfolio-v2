import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const Initials = () => {
  const { scrollY } = useScroll();

  const rawMoveDownN = useTransform(scrollY, [0, 1150], [0, 1100]);
  const rawRotateN = useTransform(scrollY, [0, 1150], ['0', '174deg']);
  const rawMoveRightN = useTransform(scrollY, [0, 1150], [0, 20]);

  const moveRightN = useSpring(rawMoveRightN, {
    mass: 0.1,
  });
  const rotateN = useSpring(rawRotateN, {
    mass: 0.1,
  });

  const moveDownN = useSpring(rawMoveDownN, {
    mass: 0.1,
  });
  const rawMoveDownM = useTransform(scrollY, [0, 1300], [0, 1620]);
  const rawRotateM = useTransform(scrollY, [0, 1300], ['0', '385deg']);
  const rawMoveRightM = useTransform(scrollY, [0, 1300], [0, 40]);

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
      />
      <motion.img
        style={{ y: moveDownN, rotate: rotateN, x: moveRightN }}
        src="/images/n-letter-colored.png"
        alt="small blob shape"
        className="absolute  bottom-[222px] right-[150px] "
      />
    </>
  );
};

export default Initials;
