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
};

export const LetterPosition = createContext({
  position: { m: 0, n: 0 },
  handleSettingPosition: (key: string, value: number) => {},
});

export const LetterPositionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [position, setPosition] = useState({
    m: 0,
    n: 0,
  });

  const handleSettingPosition = useCallback((key: string, value: number) => {
    setPosition((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  }, []);

  const letterContext: PositionData = {
    position,
    handleSettingPosition,
  };

  return (
    <LetterPosition.Provider value={letterContext}>
      {children}
    </LetterPosition.Provider>
  );
};
