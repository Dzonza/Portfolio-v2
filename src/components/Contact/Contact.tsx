import { useState } from 'react';
import SectionContainer from '../../ReusableComponents/SectionContainer';
import ContactLetterM from './ContactLetterM';
import ContactLetterN from './ContactLetterN';
const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SectionContainer title="" titleStyle={false} sectionId="contact">
      <section className="flex  h-[500px]">
        <article className="w-1/2 relative">
          <p className="text-[80px] font-semibold text-[#151419]">
            DONT BE SHY
          </p>
          <p className="text-[#151419] text-[22px] absolute top-0 translate-y-[92px]">
            Feel free to contact me anytime
          </p>

          <section className="flex absolute top-[45%] left-1/2 -translate-x-[60%] gap-20">
            <div className="flex flex-col ">
              <p className="font-normal text-[20px]">Contact</p>
              <a
                href="mailto:markovic1996n@gmail.com"
                className="font-extralight text-[28px] text-[#FF5B04]"
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
              <p className="font-normal text-[20px]">Location</p>
              <p className="font-extralight text-[28px] text-[#FF5B04]">
                Belgrade
              </p>
            </div>
          </section>
          <div className="absolute right-0 bottom-0 w-[1px] h-[60%] bg-[#1514191c] "></div>
        </article>
        <article className="w-1/2  h-full relative">
          <ContactLetterN />
          <ContactLetterM />
        </article>
      </section>
    </SectionContainer>
  );
};

export default Contact;
