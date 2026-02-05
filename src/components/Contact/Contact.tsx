import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import useResize from '../../CustomHooks/Resize';
import SectionContainer from '../../ReusableComponents/SectionContainer';
import ContactLetterM from './ContactLetterM';
import ContactLetterN from './ContactLetterN';
const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const contactRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(contactRef, { amount: 0, initial: false });

  const { width } = useResize();
  return (
    <SectionContainer title="" titleStyle={false} sectionId="contact">
      <section className="pb-10">
        <div>
          <p className="text-[65px] m:text-[80px] font-semibold text-[#151419] leading-[1.1] lg:leading-1">
            DONT BE SHY
          </p>
          <p className="text-[#151419c5] text-[18px] xs:text-[20px] md:text-[22px] font-light -translate-y-2 m:-translate-y-4 translate-x-1">
            Feel free to contact me anytime
          </p>
        </div>

        <section className="flex flex-col lg:flex-row" ref={contactRef}>
          <article className="w-full lg:w-1/2 ">
            <section className="flex  justify-center pt-6 s:pt-12 md:pt-20 pb-20  gap-8 md:gap-20">
              <div className="flex flex-col ">
                <p className="font-normal text-[18px] lg:text-[20px] text-[#151419]">
                  Contact
                </p>
                <a
                  href="mailto:markovic1996n@gmail.com"
                  className="font-extralight text-[24px] w-[120px] lg:w-auto lg:text-[28px] text-[#FF5B04]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Click here
                </a>
                <span
                  className={`h-[1px] bg-[#FF5B04] duration-500 ${
                    isHovered ? 'w-full' : 'w-0'
                  } `}
                ></span>
              </div>
              <div className="flex flex-col">
                <p className="font-normal text-[18px] lg:text-[20px] text-[#151419]">
                  Location
                </p>
                <p className="font-extralight text-[24px] lg:text-[28px] text-[#FF5B04]">
                  Belgrade
                </p>
              </div>
            </section>
          </article>
          {width > 1024 && (
            <div className="w-[1px] h-[250px] bg-[#1514191c] "></div>
          )}
          <div className="lg:w-1/2 w-full  h-[270px]  flex justify-center">
            <article className=" w-[300px] xs:w-[400px] relative">
              <ContactLetterN isInView={isInView} />
              <ContactLetterM isInView={isInView} />
            </article>
          </div>
        </section>
      </section>
    </SectionContainer>
  );
};

export default Contact;
//absolute top-1/2 md:top-[55%] lg:top-[45%] left-1/2 -translate-x-[60%]
