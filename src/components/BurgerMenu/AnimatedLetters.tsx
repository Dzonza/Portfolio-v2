import { useContext } from 'react';
import ContactLetterM from '../Contact/ContactLetterM';
import ContactLetterN from '../Contact/ContactLetterN';
import { NavLinks } from '../store/BurgerMenuNavContext';

const AnimatedLetters = () => {
  const { isClicked } = useContext(NavLinks);
  return (
    <div
      className={`fixed top-1/2 left-[30%] -translate-x-[30%] duration-500 -translate-y-1/2 z-40 h-[500px] w-[700px] ${
        isClicked ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <ContactLetterN />
      <ContactLetterM />
    </div>
  );
};

export default AnimatedLetters;
