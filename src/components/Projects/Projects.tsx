import useResize from '../../CustomHooks/Resize';
import SectionContainer from '../../ReusableComponents/SectionContainer';
import Project from './Project';

const vjnData = [
  '/images/vjn-home.png',
  '/images/vjn-service.png',
  '/images/vjn-contact.png',
];
const vjnLangImages = [
  {
    url: '/images/vue.png',
    title: 'Vue',
  },
  {
    url: '/images/js-2.png',
    title: 'JavaScript',
  },
  {
    url: '/images/tailwind.png',
    title: 'Tailwind',
  },
];
const infiniteLoopData = [
  '/images/infinite-loop-home.png',
  '/images/infinite-loop-courses.png',
  '/images/infinite-loop-login.png',
];

const infiniteLoopLangImages = [
  {
    url: '/images/react.png',
    title: 'React',
  },
  {
    url: '/images/js-2.png',
    title: 'JavaScript',
  },
  {
    url: '/images/sass.png',
    title: 'Sass',
  },
];

const grillPopData = [
  '/images/grillpop-home.png',
  '/images/grillpop-order.png',
  '/images/grillpop-about.png',
];

const grillPopLangImages = [
  {
    url: '/images/react.png',
    title: 'React',
  },
  {
    url: '/images/ts.png',
    title: 'TypeScript',
  },
  {
    url: '/images/tailwind.png',
    title: 'Tailwind',
  },
];

const gooFactoryImages = [
  '/images/gooFactory-home.png',
  '/images/gooFactory-about.png',
  '/images/gooFactory-services.png',
];

const gooFactoryLangImages = [
  {
    url: '/images/js-2.png',
    title: 'JavaScript',
  },
  {
    url: '/images/sass.png',
    title: 'Sass',
  },
];
const Projects = () => {
  const { width } = useResize();

  return (
    <SectionContainer title="Projects" titleStyle={true} sectionId="projects">
      {width <= 560 && (
        <p className=" text-[#151419] font-[bauhaus]  text-[40px] xs:text-[45px] leading-[1.2] absolute top-0 left-1/2 -translate-x-1/2 ">
          together
        </p>
      )}
      <section className="flex flex-col  gap-5 ">
        <Project
          title="VJN Solutions"
          logo="/images/vjn-logo.png"
          images={vjnData}
          languages={vjnLangImages}
          transferTo="https://vjnsolutions.com/home"
        />
        <Project
          title="Infinite Loop"
          logo="/images/infinite-loop-logo.png"
          images={infiniteLoopData}
          languages={infiniteLoopLangImages}
          transferTo="https://www.infinite-loop.site/"
        />
        <Project
          title="GrillPop"
          logo="/images/grillpop-logo.png"
          images={grillPopData}
          languages={grillPopLangImages}
          transferTo="https://grillpop.shop/"
        />
        <Project
          title="gooFactory"
          logo="/images/gooFactory-logo.png"
          images={gooFactoryImages}
          languages={gooFactoryLangImages}
          transferTo="https://dzonza.github.io/gooFactory/"
        />
      </section>
    </SectionContainer>
  );
};

export default Projects;
