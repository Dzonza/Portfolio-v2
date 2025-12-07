import type { FC } from 'react';

interface ContainerData {
  title: string;
  children: React.ReactNode;
}

const SectionContainer: FC<ContainerData> = ({ title, children }) => {
  return (
    <section
      id="about"
      className="w-full  px-16 pt-28 flex flex-col gap-[2px]  text-[36px]  max-w-[1600px] m-auto "
    >
      <h2 className="font-[bauhaus] pl-7 text-[#FF5B04]">{title}</h2>
      {children}
    </section>
  );
};

export default SectionContainer;
