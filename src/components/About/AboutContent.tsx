import type { DotLottie } from '@lottiefiles/dotlottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useInView } from 'motion/react';
import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FC,
} from 'react';
import Marquee from 'react-fast-marquee';
import useResize from '../../CustomHooks/Resize';
import { useLetterPosition } from '../../CustomHooks/UseLetterPoisition';
import { NavLinks } from '../store/BurgerMenuNavContext';
import AboutImagesContainer from './AboutImagesContainer';
import LangImageContainer from './LangImageContainer';

const AboutContent: FC = () => {
  const aboutContectRef = useRef<HTMLElement | null>(null);
  const langContainerRef = useRef<HTMLDivElement | null>(null);
  const langInView = useInView(langContainerRef, {
    amount: 0,
    initial: false,
  });
  const wavesRef = useRef<DotLottie | null>(null);
  const tirangleRef = useRef<DotLottie | null>(null);
  const isInView = useInView(aboutContectRef, { amount: 0, initial: false });
  const { landingMref, landingNref } = useLetterPosition();
  const { isClicked } = useContext(NavLinks);
  const [playPulse, setPlayPulse] = useState(false);
  const { width } = useResize();

  const handleLottieWaves = useCallback(
    (lottie: DotLottie | null) => {
      wavesRef.current = lottie;
      if (lottie && isInView && !isClicked) {
        lottie.play();
      }
    },
    [isClicked, isInView],
  );
  const handleLottieTriangle = useCallback(
    (lottie: DotLottie | null) => {
      tirangleRef.current = lottie;
      if (lottie && isInView && !isClicked) {
        lottie.play();
      }
    },
    [isClicked, isInView],
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
      <div className="w-full lg:w-[45%] h-[400px] xs:h-[450px] s:h-[350px] relative ">
        <DotLottieReact
          src="lottie/waves.lottie"
          className="absolute w-56  top-[35%] xs:top-[25%] m:top-[10%] sm:top-auto left-[-10%] m:left-0"
          dotLottieRefCallback={handleLottieWaves}
          loop
        />
        <DotLottieReact
          src="lottie/triangle.lottie"
          className="absolute w-44 bottom-[-16%] xs:bottom-[-12%] m:bottom-0 md:bottom-10 lg:bottom-0 right-[-10%] xs:right-0 m:right-[10%] sm:right-[20%] md:right-[25%] lg:right-0"
          loop
          dotLottieRefCallback={handleLottieTriangle}
        />
        <img
          src="images/subtract-n-letter.png"
          className=" w-56 xs:w-auto absolute right-12 s:right-2 sm:right-8 md:right-10  top-10 m:top-2 sm:top-5 md:top-10"
          alt="n letter"
          ref={landingNref}
        />
        <img
          src="images/subtract-m-letter.png"
          className=" w-60 xs:w-auto absolute left-[60px] md:left-[75px] -rotate-2 -bottom-8 sm:bottom-0 md:bottom-5"
          alt="m letter"
          ref={landingMref}
        />
      </div>
      <div
        className="w-full lg:w-[55%] flex flex-col gap-5 s:gap-8 lg:gap-5"
        ref={langContainerRef}
      >
        <motion.p
          animate={
            playPulse ? { opacity: [0, 0.3, 1, 0.3, 0.5, 0.8] } : { opacity: 0 }
          }
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          onViewportEnter={() => {
            if (!playPulse) setPlayPulse(true);
          }}
          className="text-[14px] xs:text-[17px] s:text-[20px] text-[#FBFBFB] text-justify font-extralight"
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
        {width <= 480 && (
          <Marquee
            gradient
            gradientColor="#151419"
            gradientWidth="50px"
            speed={40}
            play={langInView && !isClicked ? true : false}
          >
            <LangImageContainer src="/images/react.png" alt="React library" />
            <LangImageContainer src="/images/vue.png" alt="Vue framework" />
            <LangImageContainer
              src="/images/js-2.png"
              alt="Javascript langugage"
            />
            <LangImageContainer
              src="/images/ts.png"
              alt="Typescript langugage"
            />
            <LangImageContainer src="/images/html.png" alt="Html langugage" />
            <LangImageContainer src="/images/css.png" alt="Css langugage" />
            <LangImageContainer src="/images/sass.png" alt="Sass framework" />
            <LangImageContainer
              src="/images/tailwind.png"
              alt="Tailwind library"
            />
          </Marquee>
        )}
        {width > 480 && (
          <div className="flex justify-between w-full md:w-[80%] self-center">
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
        )}
      </div>
    </section>
  );
};

export default AboutContent;
