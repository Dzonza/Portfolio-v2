import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface LangData {
  url: string;
  title: string;
}

interface ProjectData {
  title: string;
  images: string[];
  logo: string;
  languages: LangData[];
  transferTo: string;
}

const Project: FC<ProjectData> = ({
  title,
  images,
  logo,
  languages,
  transferTo,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useTransform(x, (v) => v);
  const smoothY = useTransform(y, (v) => v);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    animate(x, mouseX, { duration: 0.2 });
    animate(y, mouseY, { duration: 0.2 });
  };

  return (
    <Link to={transferTo} target="_blank">
      <div className="relative w-full">
        <motion.div
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="p-3 absolute w-[350px] h-[250px] shadow-[0_15px_45px_rgba(0,0,0,0.25)] bg-[#fbfbfb] z-20 pointer-events-none rounded-t-[5px] rounded-es-[5px]"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-40%',
            translateY: '-110%',
            transformOrigin: 'center',
          }}
        >
          {isHovered && (
            <>
              <Swiper
                spaceBetween={50}
                slidesPerView={'auto'}
                autoplay={{
                  delay: 2500,
                }}
                loop={true}
                className="w-full h-full rounded-t-[5px]"
                modules={[Autoplay]}
                speed={700}
              >
                {images.map((url: string, index: number) => (
                  <SwiperSlide key={index}>
                    <img src={url} alt={title} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex p-1 flex-col justify-center gap-2 bottom-0 absolute right-0 bg-[#fbfbfb]  translate-x-[90%] rounded-r-[5px]">
                {languages.map(({ url, title }, index) => (
                  <img key={index} src={url} alt={title} className="w-7" />
                ))}
              </div>
            </>
          )}
        </motion.div>
        <motion.article
          initial={{ width: '100%' }}
          whileHover={{ width: '90%', margin: '0 auto' }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            setIsHovered(false);
            animate(x, 600, { duration: 0.3 });
            animate(y, 50, { duration: 0.3 });
          }}
          className="w-full flex justify-between h-24 items-center overflow-hidden  rounded-[5px] cursor-pointer relative"
        >
          <motion.div
            animate={{
              background: isHovered
                ? 'linear-gradient(to right, #151419 60%, transparent)'
                : 'linear-gradient(to right, #151419 80%, transparent)',
            }}
            transition={{ duration: 0.4 }}
            className="absolute w-full h-full z-10"
          ></motion.div>
          <p className="text-[#fbfbfb] pl-8 text-[25px] z-10">{title}</p>
          <motion.img
            className={` h-full object-cover duration-300 ${
              isHovered ? 'scale-100' : 'scale-150'
            } `}
            src={logo}
            alt={title}
          />
        </motion.article>
      </div>
    </Link>
  );
};

export default Project;
