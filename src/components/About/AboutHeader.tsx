import type { DotLottie } from '@lottiefiles/dotlottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useInView } from 'motion/react';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { NavLinks } from '../store/BurgerMenuNavContext';
const AboutHeader = () => {
  const aboutHeaderRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(aboutHeaderRef, { amount: 0 });
  const lottieRef = useRef<DotLottie | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { isClicked } = useContext(NavLinks);
  const handleLottie = useCallback(
    (lottie: DotLottie | null) => {
      lottieRef.current = lottie;
      if (lottie && isInView && !isClicked) {
        lottie.play();
      }
    },
    [isClicked, isInView],
  );

  useEffect(() => {
    if (!lottieRef.current) return;
    if (isInView && !isClicked) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [isClicked, isInView]);

  return (
    <article
      className="text-[#FBFBFB] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row"
      ref={aboutHeaderRef}
    >
      <div className="relative font-[bauhaus] text-[70px] xs:text-[80px] ss:text-[90px]  s:text-[110px] sm:text-[120px] md:text-[128px] text-center lg:text-left w-full lg:w-1/2">
        <motion.p
          animate={
            isVisible ? { y: [50, 0], opacity: [0, 1] } : { opacity: 0, y: 50 }
          }
          onViewportEnter={() => setIsVisible(true)}
          viewport={{ amount: 0.5 }}
          transition={{ type: 'spring' }}
          className="leading-[1] tracking-tight"
        >
          Frontend Developer
        </motion.p>
      </div>
      <div className="w-full lg:w-1/2 relative flex justify-center items-center">
        <motion.img
          src="/images/portfolio-image.jpg"
          className="h-48 xs:h-56 s:h-64 z-10 shadow-[0_6px_10px_rgba(0,0,0,0.1),0_15px_40px_rgba(0,0,0,0.12)] rounded-[50%]"
          alt="Image of my self"
        />
        <div className="  absolute  rounded-[50%]  flex justify-center items-center">
          <DotLottieReact
            src="lottie/blueCircle.lottie"
            className="w-[400px] h-[400px] xs:w-[500px] xs:h-[500px] s:w-[550px] s:h-[550px] absolute"
            loop
            speed={0.5}
            dotLottieRefCallback={handleLottie}
          />
        </div>
      </div>
    </article>
  );
};

export default AboutHeader;
