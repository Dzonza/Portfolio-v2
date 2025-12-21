import { motion, MotionValue } from 'motion/react';
import { useContext, type FC } from 'react';
import { NavLinks } from '../store/BurgerMenuNavContext';

interface BtnData {
  xPos: MotionValue<number>;
}

const BurgerMenuBtn: FC<BtnData> = ({ xPos }) => {
  const { handleClickedBtn, isClicked } = useContext(NavLinks);
  return (
    <motion.section
      style={{ x: xPos }}
      className={`z-40 fixed top-8 right-8   rounded-[12px] w-[65px] h-[65px]  bg-[#fbfbfb]  border-[0.5px] border-[#FF5B04] duration-500  cursor-pointer p-5  ${
        isClicked
          ? 'shadow-[0px_0px_0px_#FF5B04]  border-[#fbfbfb]'
          : 'shadow-[3px_3px_0px_#FF5B04]  '
      } `}
      onClick={handleClickedBtn}
    >
      <article className="flex flex-col gap-1 ">
        <div
          className={` h-1 bg-[#FF5B04] rounded-[12px] self-end duration-500 ${
            isClicked ? 'w-[70%]' : 'w-full'
          }`}
        ></div>
        <div
          className={` h-1 bg-[#FF5B04] rounded-[12px] duration-500 self-center  ${
            isClicked ? 'w-[70%]' : 'w-full'
          }`}
        ></div>
        <div
          className={` h-1 bg-[#FF5B04] rounded-[12px] duration-500 self-right ${
            isClicked ? 'w-[70%]' : 'w-full'
          }`}
        ></div>
      </article>
    </motion.section>
  );
};

export default BurgerMenuBtn;
