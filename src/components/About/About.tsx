import { useInView } from 'motion/react';
import { useContext, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import SectionContainer from '../../ReusableComponents/SectionContainer';
import { NavLinks } from '../store/BurgerMenuNavContext';
import AboutContent from './AboutContent';
import AboutHeader from './AboutHeader';
import HorizontalRect from './HorizontalRect';
import Square from './Square';
import VerticalRect from './VerticalRect';

const About = () => {
  const marqueContainerRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(marqueContainerRef, { amount: 0 });
  const { isClicked } = useContext(NavLinks);

  return (
    <SectionContainer title="About" titleStyle={false} sectionId="about">
      <div className="bg-[#151419]  w-full rounded-t-[30px] px-16 pt-24 pb-12 lg:pb-24 flex flex-col gap-12 lg:gap-16 overflow-hidden">
        <AboutHeader />
        <AboutContent />
      </div>
      <div className="flex flex-col" ref={marqueContainerRef}>
        <div className="py-5">
          <Marquee
            className="bg-[#FBFBFB]"
            gradient
            gradientColor="#fbfbfb"
            gradientWidth="50px"
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
        <div className="py-5 bg-[#151419] flex flex-col gap-20 lg:gap-32 rounded-b-[30px]">
          <Marquee
            gradient
            gradientColor="#151419"
            gradientWidth="50px"
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
          <p className="font-[bauhaus] text-[#fbfbfb] leading-[1.2] text-[90px] text-center">
            Lets build something together
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
