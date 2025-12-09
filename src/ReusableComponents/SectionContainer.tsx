import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import type { FC } from 'react';

interface ContainerData {
  title: string;
  children: React.ReactNode;
  titleStyle: boolean;
}

const SectionContainer: FC<ContainerData> = ({
  title,
  children,
  titleStyle,
}) => {
  return (
    <section
      id="about"
      className="w-full  px-16 pt-40 flex flex-col gap-[2px]  text-[36px]  max-w-[1600px] m-auto"
    >
      {titleStyle ? (
        <div className="w-[500px] m-[0_auto] relative">
          <img
            src="/images/projects-test-1.png"
            alt="Projects section image"
            className="w-full"
          />
          <DotLottieReact
            src="/lottie/cubeAnimation.lottie"
            className="absolute top-0 w-72 translate-x-[26px] -translate-y-4"
            autoplay
            loop
          />
        </div>
      ) : (
        <h2 className="font-[bauhaus] pl-7 text-[#FF5B04]">{title}</h2>
      )}

      {children}
    </section>
  );
};

export default SectionContainer;
