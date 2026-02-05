import { useMemo, useState } from 'react';
import Github from '../svg/Github';
import Linkedin from '../svg/Linkedin';
import FooterNavLink from './FooterNavLink';

const Footer = () => {
  const [isHovered, setIsHovered] = useState('');
  const handleDate = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);

  const linkData = [
    { id: 1, title: 'Home', to: 'home' },
    { id: 2, title: 'About', to: 'about' },
    { id: 3, title: 'Projects', to: 'projects' },
    { id: 4, title: 'Contact', to: 'contact' },
  ];
  return (
    <section className="w-full bg-[#151419] max-w-[1600px] m-auto  flex justify-center items-center flex-col gap-8 p-12">
      <nav className="grid grid-cols-2 justify-items-center xxs:flex-row xxs:flex gap-x-10 gap-y-5 xxs:gap-8 ">
        {linkData.map((elem) => {
          return (
            <FooterNavLink
              title={elem.title}
              key={elem.id}
              to={elem.to}
              setIsHovered={setIsHovered}
              isHovered={isHovered}
            />
          );
        })}
      </nav>
      <div className="flex gap-2">
        <a href="https://github.com/Dzonza" target="_blank">
          <Github black={false} />
        </a>
        <a
          href="https://www.linkedin.com/in/nikola-markovic-143b9b304/"
          target="_blank"
        >
          <Linkedin black={false} />
        </a>
      </div>
      <p className="text-[#fbfbfb] text-[16px] font-extralight text-center">
        &copy; {handleDate}. All rights are reserved
      </p>
    </section>
  );
};

export default Footer;
