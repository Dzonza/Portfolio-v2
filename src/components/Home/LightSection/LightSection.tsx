import type { DotLottie } from '@lottiefiles/dotlottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useInView } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import useResize from '../../../CustomHooks/Resize';
import CircleSphere from './CircleSphere';
import DifferentShapes from './DifferentShapes';
import Initials from './Initials';
import MainText from './MainText';

const LightSection = () => {
  const inViewRef = useRef<HTMLElement | null>(null);
  const lottieRef = useRef<DotLottie | null>(null);
  const isInView = useInView(inViewRef, { amount: 0, initial: true });

  const { width } = useResize();

  const handleLottieAnimation = useCallback((lottie: DotLottie | null) => {
    lottieRef.current = lottie;
  }, []);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (isInView) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [isInView]);

  return (
    <article
      className="w-full lg:w-1/2  relative h-[800px] sm:h-[700px] lg:h-[1024px] "
      ref={inViewRef}
    >
      <DifferentShapes />
      <Initials />
      <MainText />
      <CircleSphere />
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={width > 768 ? 100 : 50}
      >
        <DotLottieReact
          className="absolute bottom-5 lg:bottom-0 left-6 s:left-2 m:left-0  w-28 s:w-40 -translate-x-1/3 cursor-pointer"
          src="/lottie/ScrollDown.lottie"
          dotLottieRefCallback={handleLottieAnimation}
          autoplay={!!isInView}
          loop
        />
      </Link>
    </article>
  );
};

export default LightSection;
