import DarkSection from './DarkSection/DarkSection';
import LightSection from './LightSection/LightSection';

const Home = () => {
  return (
    <section className="p-10 flex h-[1024px] max-w-[1600px] m-auto">
      <LightSection />
      <DarkSection />
    </section>
  );
};

export default Home;
