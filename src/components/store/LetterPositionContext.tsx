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
    console.log(key, value);

    setPosition((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  }, []);

  //   const setPositionM = useCallback((value: number) => {
  //     setPosition((prevValue) => ({
  //       ...prevValue,
  //       m: value,
  //     }));
  //   const setPositionN = useCallback((value: number) => {
  //     setPosition((prevValue) => ({
  //       ...prevValue,
  //       n: value,
  //     }));
  //   }, []);

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
