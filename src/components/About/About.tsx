import { useInView } from 'motion/react';
import { useContext, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import useResize from '../../CustomHooks/Resize';
import SectionContainer from '../../ReusableComponents/SectionContainer';
import { NavLinks } from '../store/BurgerMenuNavContext';
import AboutContent from './AboutContent';
import AboutHeader from './AboutHeader';
import HorizontalRect from './HorizontalRect';
import Square from './Square';
import VerticalRect from './VerticalRect';

const About = () => {
  const marqueContainerRef = useRef<HTMLDivElement | null>(null);
  const { width } = useResize();
  const isInView = useInView(marqueContainerRef, { amount: 0 });
  const { isClicked } = useContext(NavLinks);

  return (
    <SectionContainer title="About" titleStyle={false} sectionId="about">
      <div className="bg-[#151419]  w-full rounded-none s:rounded-t-[30px] px-4 s:px-8 sm:px-16 pt-24 pb-20 s:pb-12 lg:pb-24 flex flex-col gap-5 s:gap-8 md:gap-12 lg:gap-16 overflow-hidden">
        <AboutHeader />
        <AboutContent />
      </div>
      <div className="flex flex-col" ref={marqueContainerRef}>
        <div className="py-5">
          <Marquee
            gradient
            gradientColor="#fbfbfb"
            gradientWidth={width < 640 ? '0px' : '30px'}
            play={isInView && !isClicked ? true : false}
            speed={30}
          >
            <Square text="Fast & Optimized" />
            <VerticalRect from="#FF930F" to="#995809" />
            <Square text="Responsive & Accessible" />
            <HorizontalRect image="small-n-letter.png" text="ikola" />
            <VerticalRect from="#E53E3E" to="#7F2222" />
            <Square text="Reliable & Communicative" />
          </Marquee>
        </div>
        <div className="pt-5 pb-0 m:py-5  bg-[#151419] flex flex-col gap-20 xs:gap-24 m:gap-12 md:gap-20 lg:gap-32 rounded-none m:rounded-b-[30px]">
          <Marquee
            gradient
            gradientColor="#151419"
            gradientWidth={width < 640 ? '0px' : '30px'}
            direction="right"
            play={isInView && !isClicked ? true : false}
          >
            <Square
              text="Clean & Maintainable Code"
              color="#fbfbfb"
              textColor="#151419"
            />
            <VerticalRect from="#FF5B04" to="#993702" />
            <Square
              text="Creative & Interactive"
              color="#fbfbfb"
              textColor="#151419"
            />
            <HorizontalRect
              image="small-m-letter.png"
              text="arkovic"
              color="#fbfbfb"
              textColor="#151419"
            />
            <VerticalRect from="#60EFFF" to="#3A8F99" />
            <Square
              text="Detail Oriented"
              color="#fbfbfb"
              textColor="#151419"
            />
          </Marquee>
          <p className=" relative font-[bauhaus] text-[#fbfbfb] s:leading-normal  m:leading-[1.2]  text-[38px]  m:text-[60px] sm:text-[70px] md:text-[90px] text-center">
            Lets build something {width <= 560 ? '' : 'together'}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
