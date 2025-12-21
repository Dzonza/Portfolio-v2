import {
  createContext,
  useCallback,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';

type Items = {
  isClicked: boolean;
  handleClickedBtn: () => void;
};

export const NavLinks = createContext<Items>({
  isClicked: false,
  handleClickedBtn: () => {},
});

export const NavLinksProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickedBtn = useCallback(() => {
    setIsClicked((prevValue) => !prevValue);
  }, []);

  const contextValue: Items = {
    isClicked,
    handleClickedBtn,
  };

  return <NavLinks.Provider value={contextValue}>{children}</NavLinks.Provider>;
};
