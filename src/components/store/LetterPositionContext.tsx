import {
  createContext,
  useRef,
  type FC,
  type PropsWithChildren,
  type RefObject,
} from 'react';

type PositionData = {
  landingNref: RefObject<HTMLImageElement | null>;
  landingMref: RefObject<HTMLImageElement | null>;
};

export const LetterPosition = createContext<PositionData | null>(null);

export const LetterPositionProvider: FC<PropsWithChildren> = ({ children }) => {
  const landingNref = useRef<HTMLImageElement | null>(null);
  const landingMref = useRef<HTMLImageElement | null>(null);

  const letterContext: PositionData = {
    landingMref,
    landingNref,
  };

  return (
    <LetterPosition.Provider value={letterContext}>
      {children}
    </LetterPosition.Provider>
  );
};
