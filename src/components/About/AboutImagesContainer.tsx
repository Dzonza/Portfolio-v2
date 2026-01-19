import type { FC, PropsWithChildren } from 'react';

const AboutImagesContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className="flex gap-1 duration-300 hover:-translate-y-3 cursor-pointer">
      {children}
    </article>
  );
};

export default AboutImagesContainer;
