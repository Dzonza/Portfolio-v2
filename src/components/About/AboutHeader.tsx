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
          // whileInView={{
          //   borderRadius: [
          //     '45% 55% 60% 40% / 55% 45% 55% 45%',
          //     '55% 45% 40% 60% / 50% 60% 40% 50%',
          //     '60% 40% 55% 45% / 40% 50% 60% 50%',
          //     '50% 50% 50% 50% / 45% 55% 45% 55%',
          //     '45% 55% 60% 40% / 55% 45% 55% 45%',
          //   ],
          // }}
          // viewport={{ amount: 0 }}
          // transition={{
          //   duration: 10,
          //   ease: 'easeInOut',
          //   repeat: Infinity,
          // }}
        />
        <div className="h-[340px] w-[340px]  bg-[#fbfbfb] opacity-50 absolute  rounded-[50%] overflow-hidden flex justify-center items-center">
          <DotLottieReact
            src="lottie/flowingWater.lottie"
            className="w-[390px] h-[390px] absolute"
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
