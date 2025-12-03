import type { FC } from 'react';

interface IconLink {
  link: string;
  alt: string;
  currentHoveredLang: (item: string) => void;
  setIsHoveredIcon: (item: boolean) => void;
}

const LanguageBox: FC<IconLink> = ({
  link,
  alt,
  currentHoveredLang,
  setIsHoveredIcon,
}) => {
  return (
    <div
      className={`p-1   absolute border border-[#151419] rounded-[12px]  duration-300 cursor-pointer   hover:border-black hover:bg-[#151419] ${
        alt === 'React' &&
        'top-44 left-20 rotate-45 hover:shadow-[5px_5px_0px_#FBFBFB] hover:-translate-y-3'
      } ${
        alt === 'Javascript' &&
        'top-[40%] left-[25%] hover:shadow-[-5px_5px_0px_#FBFBFB] hover:-translate-y-3 hover:translate-x-3'
      } ${
        alt === 'Vue' &&
        'bottom-1/3 left-[40%] -rotate-45 hover:shadow-[-5px_-5px_0px_#FBFBFB] hover:translate-x-3'
      } ${
        alt === 'Tailwind' &&
        'bottom-[20%] left-[10%] hover:shadow-[-5px_-5px_0px_#FBFBFB] hover:translate-y-3 hover:translate-x-3'
      }`}
      onMouseEnter={() => {
        currentHoveredLang(alt);
        setIsHoveredIcon(true);
      }}
      onMouseLeave={() => setIsHoveredIcon(false)}
    >
      <img src={link} alt={alt} />
    </div>
  );
};

export default LanguageBox;
