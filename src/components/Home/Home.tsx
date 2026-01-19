import DarkSection from './DarkSection/DarkSection';
import LightSection from './LightSection/LightSection';

const Home = () => {
  return (
    <section
      className="p-10 flex flex-col  lg:flex-row lg:h-[1024px]  max-w-[1600px] m-auto"
      id="home"
    >
      <LightSection />
      <DarkSection />
    </section>
  );
};

export default Home;
