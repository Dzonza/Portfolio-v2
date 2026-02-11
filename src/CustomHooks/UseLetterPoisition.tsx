import { useContext } from 'react';
import { LetterPosition } from '../components/store/LetterPositionContext';

export const useLetterPosition = () => {
  const context = useContext(LetterPosition);

  if (!context) {
    throw new Error(
      'useLetterPosition must be used inside LetterPositionProvider',
    );
  }

  return context;
};
