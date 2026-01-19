import type { DotLottie } from '@lottiefiles/dotlottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useInView } from 'motion/react';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { NavLinks } from '../store/BurgerMenuNavContext';
import { LetterPosition } from '../store/LetterPositionContext';
import AboutImagesContainer from './AboutImagesContainer';
import LangImageContainer from './LangImageContainer';
const AboutContent = () => {
  const mRef = useRef<HTMLImageElement | null>(null);
  const nRef = useRef<HTMLImageElement | null>(null);
  const aboutContectRef = useRef<HTMLElement | null>(null);
  const wavesRef = useRef<DotLottie | null>(null);
  const tirangleRef = useRef<DotLottie | null>(null);
  const isInView = useInView(aboutContectRef, { amount: 0.5, initial: false });
  const { handleSettingPosition } = useContext(LetterPosition);
  const { isClicked } = useContext(NavLinks);
  const [playPulse, setPlayPulse] = useState(false);
  useEffect(() => {
    if (mRef.current && nRef.current) {
      const yPosN = nRef.current?.getBoundingClientRect();
      const yPosM = mRef.current?.getBoundingClientRect();

      if (yPosM) {
        handleSettingPosition('m', yPosM.y);
      }
      if (yPosN) {
        handleSettingPosition('n', yPosN.y);
      }
    }
  }, [handleSettingPosition]);

  const handleLottieWaves = useCallback(
    (lottie: DotLottie | null) => {
      wavesRef.current = lottie;
      if (lottie && isInView && !isClicked) {
        lottie.play();
      }
    },
    [isClicked, isInView]
  );
  const handleLottieTriangle = useCallback(
    (lottie: DotLottie | null) => {
      tirangleRef.current = lottie;
      if (lottie && isInView && !isClicked) {
        lottie.play();
      }
    },
    [isClicked, isInView]
  );

  useEffect(() => {
    if (!wavesRef.current || !tirangleRef.current) return;

    if (isInView && !isClicked) {
      wavesRef.current.play();
      tirangleRef.current.play();
    } else {
      wavesRef.current.pause();
      tirangleRef.current.pause();
    }
  }, [isClicked, isInView]);

  return (
    <section
      className="flex flex-col-reverse lg:flex-row gap-5"
      ref={aboutContectRef}
    >
      <div className="w-full lg:w-[45%] h-[350px] relative ">
        <DotLottieReact
          src="lottie/waves.lottie"
          className="absolute w-56"
          dotLottieRefCallback={handleLottieWaves}
          loop
        />
        <DotLottieReact
          src="lottie/triangle.lottie"
          className="absolute w-44 bottom-10 lg:bottom-0 right-[25%] lg:right-0"
          loop
          dotLottieRefCallback={handleLottieTriangle}
        />
        <img
          src="images/subtract-n-letter.png"
          className="absolute right-10 top-10"
          alt="n letter"
          ref={nRef}
        />
        <img
          src="images/subtract-m-letter.png"
          className="absolute left-[75px] bottom-5"
          alt="m letter"
          ref={mRef}
        />
      </div>
      <div className="w-full lg:w-[55%] flex flex-col gap-8 lg:gap-5">
        <motion.p
          animate={
            playPulse ? { opacity: [0, 0.3, 1, 0.3, 0.5, 0.8] } : { opacity: 0 }
          }
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          onViewportEnter={() => {
            if (!playPulse) setPlayPulse(true);
          }}
          className="text-[20px] text-[#FBFBFB] text-justify font-extralight"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          magnam alias earum fuga consequuntur eum, cumque a laboriosam sequi
          optio beatae sint adipisci ipsum nihil. Dolore qui saepe temporibus
          praesentium. Voluptates similique aliquid pariatur enim facere
          incidunt officia vero ducimus consequatur quaerat, corporis sapiente
          eligendi id? At minima debitis, fuga quos suscipit iste, quaerat totam
          odio natus cum, mollitia dicta. Perferendis, sapiente architecto vel,
          vero deleniti nesciunt alias tempore ad commodi exercitationem
          eligendi id? At minima debitis, fuga quos suscipit iste, quaerat totam
          odio natus cum, mollitia dicta. Perferendis, sapiente architecto vel,
          vero deleniti nesciunt alias tempore ad commodi exercitationem
        </motion.p>
        <div className="flex justify-between w-[80%] self-center">
          <AboutImagesContainer>
            <LangImageContainer src="/images/react.png" alt="React library" />
            <LangImageContainer src="/images/vue.png" alt="Vue framework" />
          </AboutImagesContainer>
          <AboutImagesContainer>
            <LangImageContainer
              src="/images/js-2.png"
              alt="Javascript langugage"
            />
            <LangImageContainer
              src="/images/ts.png"
              alt="Typescript langugage"
            />
          </AboutImagesContainer>
          <AboutImagesContainer>
            <LangImageContainer src="/images/html.png" alt="Html langugage" />
            <LangImageContainer src="/images/css.png" alt="Css langugage" />
          </AboutImagesContainer>
          <AboutImagesContainer>
            <LangImageContainer src="/images/sass.png" alt="Sass framework" />
            <LangImageContainer
              src="/images/tailwind.png"
              alt="Tailwind library"
            />
          </AboutImagesContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
