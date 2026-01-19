import { useContext, useEffect, useState } from 'react';
import useResize from '../../CustomHooks/Resize';
import { NavLinks } from '../store/BurgerMenuNavContext';
import BurgerLetterM from './BurgerLetterM';
import BurgerLetterN from './BurgerLetterN';

const AnimatedLetters = () => {
  const { isClicked } = useContext(NavLinks);
  const { width, height } = useResize();
  const [letterBox, setLetterBox] = useState(0);
  useEffect(() => {
    if (width > 1600) {
      setLetterBox(width - 600);
    } else {
      setLetterBox(width - 400);
    }
  }, [width]);
  return (
    <div
      style={{ width: letterBox, height: height }}
      className={`fixed flex justify-center items-center duration-500 z-40 ${
        isClicked ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className={`fixed h-[500px] w-[700px] `}>
        <BurgerLetterN />
        <BurgerLetterM />
      </div>
    </div>
  );
};

export default AnimatedLetters;
