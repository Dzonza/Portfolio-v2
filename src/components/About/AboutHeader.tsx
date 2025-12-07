import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'motion/react';
const AboutHeader = () => {
  return (
    <article className="text-[#FBFBFB] flex ">
      <div className="relative font-[bauhaus] text-[128px] w-1/2">
        <p className="leading-[1] tracking-tight">Frontend Developer</p>
      </div>
      <div className="w-1/2 relative flex justify-center items-center">
        <motion.img
          src="/images/portfolio-image.jpg"
          className="h-64 z-10 shadow-[0_6px_10px_rgba(0,0,0,0.1),0_15px_40px_rgba(0,0,0,0.12)] rounded-[50%]"
          alt="Image of my self"
        />
        <div className="h-[340px] w-[340px]  absolute  rounded-[50%]  flex justify-center items-center">
          <DotLottieReact
            src="lottie/blueCircle.lottie"
            className="w-[550px] h-[550px] absolute"
            autoplay
            loop
            speed={0.5}
          />
        </div>
      </div>
    </article>
  );
};

export default AboutHeader;
