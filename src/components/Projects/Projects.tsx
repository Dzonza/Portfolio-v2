import { motion } from 'motion/react';
import SectionContainer from '../../ReusableComponents/SectionContainer';
const Projects = () => {
  return (
    <SectionContainer title="Projects">
      <section className="flex flex-col gap-10 pt-10">
        <motion.article
          whileHover={{ x: 20 }}
          transition={{ duration: 0.2 }}
          className="w-full flex justify-between h-24 items-center overflow-hidden  rounded-[8px] cursor-pointer relative"
        >
          <motion.div
            initial={{
              background: 'linear-gradient(to right, #151419 70%, transparent)',
            }}
            whileHover={{
              background: 'linear-gradient(to right, #151419 45%, transparent)',
            }}
            transition={{ duration: 0.4 }}
            className=" absolute w-full h-full"
          ></motion.div>
          <p className="text-[#fbfbfb] pl-8 text-[25px] z-10">Infinite loop</p>
          <img
            className="w-1/2 h-full object-cover"
            src="/images/test.jpg"
            alt=""
          />
        </motion.article>
      </section>
    </SectionContainer>
  );
};

export default Projects;
