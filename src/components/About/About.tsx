import AboutContent from './AboutContent';
import AboutHeader from './AboutHeader';

const About = () => {
  return (
    <section
      id="about"
      className="w-full  px-16 py-28 flex flex-col gap-[2px]  text-[36px]  max-w-[1600px] m-auto "
    >
      <h2 className="font-[bauhaus] pl-7 text-[#FF5B04]">About</h2>
      <div className="bg-[#151419]  w-full rounded-t-[30px] px-16 py-24 flex flex-col gap-16 overflow-hidden">
        <AboutHeader />
        <AboutContent />
      </div>
    </section>
  );
};

export default About;
