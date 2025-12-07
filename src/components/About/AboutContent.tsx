import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LangImageContainer from './LangImageContainer';

const AboutContent = () => {
  return (
    <section className="flex gap-5">
      <div className="w-[45%]  relative ">
        <DotLottieReact
          src="lottie/waves.lottie"
          className="absolute w-56"
          autoplay
          loop
        />
        <DotLottieReact
          src="lottie/triangle.lottie"
          className="absolute w-44 bottom-0 right-0"
          loop
          autoplay
        />
        <img
          src="images/subtract-n-letter.png"
          className="absolute right-10 top-10"
          alt="n letter"
        />
        <img
          src="images/subtract-m-letter.png"
          className="absolute left-[75px] bottom-5"
          alt="m letter"
        />
      </div>
      <div className="w-[55%] flex flex-col gap-5">
        <p className="text-[20px] text-[#FBFBFB] opacity-80 text-justify font-light">
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
        </p>
        <div className="flex justify-between w-[90%] self-center">
          <LangImageContainer src="/images/react.png" alt="React library" />
          <LangImageContainer src="/images/vue.png" alt="Vue framework" />
          <LangImageContainer
            src="/images/js-2.png"
            alt="Javascript langugage"
          />
          <LangImageContainer src="/images/ts.png" alt="Typescript langugage" />
          <LangImageContainer src="/images/html.png" alt="Html langugage" />
          <LangImageContainer src="/images/css.png" alt="Css langugage" />
          <LangImageContainer src="/images/sass.png" alt="Sass framework" />
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
