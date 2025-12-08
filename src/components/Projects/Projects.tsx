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
const Projects = () => {
  return (
    <SectionContainer title="Projects">
      <section className="flex flex-col  gap-5 pt-5">
        <Project
          title="VJN Solutions"
          logo="/images/vjn-logo.png"
          images={vjnData}
          languages={vjnLangImages}
        />
        <Project
          title="Infinite Loop"
          logo="/images/infinite-loop-logo.png"
          images={infiniteLoopData}
          languages={infiniteLoopLangImages}
        />
        <Project
          title="Grill Pop"
          logo="/images/grillpop-logo.png"
          images={grillPopData}
          languages={grillPopLangImages}
        />
        {/* <Project /> */}
      </section>
    </SectionContainer>
  );
};

export default Projects;
