import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import CircleSphere from './CircleSphere';
import DifferentShapes from './DifferentShapes';
import Initials from './Initials';
import MainText from './MainText';

const LightSection = () => {
  return (
    <article className="w-1/2  relative">
      <DifferentShapes />
      <Initials />
      <MainText />
      <CircleSphere />
      <DotLottieReact
        className="absolute bottom-0  left-0 h-20 -translate-x-1/3 cursor-pointer"
        src="/lottie/ScrollDown.lottie"
        autoplay
        loop
      />
    </article>
  );
};

export default LightSection;
