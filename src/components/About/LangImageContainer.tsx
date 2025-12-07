import type { FC } from 'react';

interface ImageData {
  src: string;
  alt: string;
}

const LangImageContainer: FC<ImageData> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-14" />;
};

export default LangImageContainer;
