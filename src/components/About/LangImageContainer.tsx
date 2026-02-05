import type { FC } from 'react';
import useResize from '../../CustomHooks/Resize';

interface ImageData {
  src: string;
  alt: string;
}

const LangImageContainer: FC<ImageData> = ({ src, alt }) => {
  const { width } = useResize();

  return (
    <img
      src={src}
      alt={alt}
      className={`${width > 480 ? 'ml-0' : 'ml-5'} w-[45px] xs:w-[55px] s:w-[50px]`}
    />
  );
};

export default LangImageContainer;
