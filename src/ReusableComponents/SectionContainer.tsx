import type { DotLottie } from '@lottiefiles/dotlottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useInView } from 'motion/react';
import { useCallback, useContext, useEffect, useRef, type FC } from 'react';
import { NavLinks } from '../components/store/BurgerMenuNavContext';
interface ContainerData {
  title: string;
  children: React.ReactNode;
  titleStyle: boolean;
  sectionId: string;
}

const SectionContainer: FC<ContainerData> = ({
  title,
  children,
  titleStyle,
  sectionId,
}) => {
  const lottieRef = useRef<DotLottie | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const { isClicked } = useContext(NavLinks);

  const handleCubeAnimation = useCallback((lottie: DotLottie | null) => {
    lottieRef.current = lottie;
  }, []);

  const isInView = useInView(projectsRef, { amount: 0 });

  useEffect(() => {
    if (!lottieRef.current || !projectsRef.current) return;
    if (isInView && !isClicked) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [isClicked, isInView]);

  return (
    <section
      id={sectionId}
      className="px-10 lg:px-12 pt-20 lg:pt-32 flex flex-col gap-[2px]  text-[36px]  max-w-[1600px] m-auto"
      ref={projectsRef}
    >
      {titleStyle ? (
        <div className="w-[500px] m-[0_auto] relative">
          <img
            src="/images/projects-section.png"
            alt="Projects section image"
            className="w-full"
          />
          <DotLottieReact
            src="/lottie/cubeAnimation.lottie"
            className="absolute top-0 w-72 translate-x-[26px] -translate-y-4"
            autoplay={!!isInView}
            loop
            dotLottieRefCallback={handleCubeAnimation}
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
