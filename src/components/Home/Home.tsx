import DarkSection from './DarkSection/DarkSection';
import LightSection from './LightSection/LightSection';

const Home = () => {
  return (
    <section
      className="px-0 s:px-2 m:px-5 sm:px-10  pt-2 m:pt-5 sm:pt-10 flex flex-col  lg:flex-row lg:h-[1024px]  max-w-[1600px] m-auto"
      id="home"
    >
      <LightSection />
      <DarkSection />
    </section>
  );
};

export default Home;
