import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import useResize from '../../../CustomHooks/Resize';
import LanguageBox from './LanguageBox';
import Navigation from './Navigation/Navigation';
import PulsingCircles from './PulsingCircles';
import Sphere from './Sphere';
import StaticImages from './StaticImages';
import './darkSection.css';
const DarkSection = () => {
  const darkSectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(darkSectionRef, { amount: 0 });
  const [currentLang, setCurrentLang] = useState('React');

  const [isHoveredIcon, setIsHoveredIcon] = useState(false);
  const { width } = useResize();
  const text =
    currentLang === 'React'
      ? 'React is a component-based library for building fast, interactive UIs with reusable logic and smooth state management'
      : currentLang === 'Javascript'
      ? 'JavaScript powers interactivity on the web, enabling dynamic features, logic, and modern application behavior.'
      : currentLang === 'Vue'
      ? 'Vue is a lightweight, flexible framework that makes building reactive and intuitive user interfaces simple and efficient.'
      : currentLang === 'Tailwind'
      ? 'Tailwind is a utility-first CSS framework that lets you style quickly using customizable, responsive classes.'
      : currentLang === 'LinkedIn'
      ? 'LinkedIn is where I showcase my work, professional experience, and connect with others in the industry.'
      : currentLang === 'Github'
      ? 'GitHub is where I build projects, manage versions, and share clean, well-structured code with others.'
      : '';

  return (
    <article
      className="w-full lg:w-1/2 bg-[#151419] rounded-[30px] overflow-hidden relative py-5 pr-5 h-[700px] lg:h-[1024px]"
      ref={darkSectionRef}
    >
      {width > 1023 && <Navigation />}
      <PulsingCircles isInView={isInView} />
      <StaticImages isInView={isInView} />
      <LanguageBox
        link="/images/react.png"
        currentHoveredLang={setCurrentLang}
        setIsHoveredIcon={setIsHoveredIcon}
        alt="React"
      />
      <LanguageBox
        link="/images/js.png"
        alt="Javascript"
        currentHoveredLang={setCurrentLang}
        setIsHoveredIcon={setIsHoveredIcon}
      />
      <LanguageBox
        link="/images/vue.png"
        alt="Vue"
        currentHoveredLang={setCurrentLang}
        setIsHoveredIcon={setIsHoveredIcon}
      />
      <LanguageBox
        link="/images/tailwind.png"
        alt="Tailwind"
        currentHoveredLang={setCurrentLang}
        setIsHoveredIcon={setIsHoveredIcon}
      />
      <LanguageBox
        link="/images/LinkedIn.png"
        alt="LinkedIn"
        currentHoveredLang={setCurrentLang}
        setIsHoveredIcon={setIsHoveredIcon}
      />
      <LanguageBox
        link="/images/GitHub.png"
        alt="Github"
        currentHoveredLang={setCurrentLang}
        setIsHoveredIcon={setIsHoveredIcon}
      />
      <p className="text-[#fbfbfb] w-[420px] text-right font-extralight absolute top-[25%] right-10 pr-5 border-r">
        Creative Frontend Developer skilled in turning ideas into engaging
        digital experiences.
      </p>
      <div className="absolute  bottom-[20%] w-[380px] h-[75px] right-[20%] ">
        <p
          className={` text-[#fbfbfb] top-0 text-right font-extralight absolute w-full h-full pr-5  duration-500 ${
            isHoveredIcon
              ? 'opacity-100 translate-y-0 '
              : 'opacity-0 -translate-y-5 '
          }`}
        >
          {text}
        </p>
        <div
          className={`absolute duration-500  w-[1px]  border-r top-0 right-0 ${
            isHoveredIcon ? 'h-full' : 'h-0'
          }`}
        ></div>
      </div>
      <Sphere />
    </article>
  );
};

export default DarkSection;
