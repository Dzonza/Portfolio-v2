import {
  createContext,
  useCallback,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';

interface LetterData {
  m: number;
  n: number;
}

type PositionData = {
  position: LetterData;
  handleSettingPosition: (key: string, value: number) => void;
  isLoaded: boolean;
  handleIsLoaded: () => void;
};

export const LetterPosition = createContext({
  position: { m: 0, n: 0 },
  handleSettingPosition: (key: string, value: number) => {},
  handleIsLoaded: () => {},
  isLoaded: false,
});

export const LetterPositionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [position, setPosition] = useState({
    m: 0,
    n: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const handleIsLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleSettingPosition = useCallback((key: string, value: number) => {
    setPosition((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  }, []);

  const letterContext: PositionData = {
    position,
    handleSettingPosition,
    isLoaded,
    handleIsLoaded,
  };

  return (
    <LetterPosition.Provider value={letterContext}>
      {children}
    </LetterPosition.Provider>
  );
};
