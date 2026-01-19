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
        'top-32 left-[25%] lg:top-44 lg:left-20 rotate-[60deg] hover:shadow-[5px_5px_0px_#FBFBFB] hover:-translate-y-3 hover:translate-x-1'
      } ${
        alt === 'Javascript' &&
        'top-[35%] right-[40%] hover:shadow-[-5px_5px_0px_#FBFBFB] hover:-translate-y-3 hover:translate-x-3'
      } ${
        alt === 'Vue' &&
        'bottom-1/3 right-[20%] -rotate-45 hover:shadow-[-5px_-5px_0px_#FBFBFB] hover:translate-x-3'
      } ${
        alt === 'Tailwind' &&
        'bottom-[5%] left-[30%] hover:shadow-[-5px_-5px_0px_#FBFBFB] hover:translate-y-3 hover:translate-x-3'
      } ${
        alt === 'LinkedIn' &&
        'top-1/2 left-[30%] hover:shadow-[-5px_0px_0px_#FBFBFB]  hover:translate-x-3'
      } ${
        alt === 'Github' &&
        'bottom-[20%] left-[15%] hover:shadow-[-5px_-5px_0px_#FBFBFB] hover:translate-y-3 hover:translate-x-3'
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
