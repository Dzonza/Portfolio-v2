import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'motion/react';
import { useCallback, useEffect, useRef, useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import useResize from '../../CustomHooks/Resize';

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
  const projectRef = useRef<HTMLParagraphElement | null>(null);
  const { width } = useResize();
  const [isHovered, setIsHovered] = useState(false);
  const [flag, setFlag] = useState(false);
  const isInView = useInView(projectRef, {
    amount: 0.01,
    margin: '-60% 0px -30% 0px',
  });
  const x = useMotionValue(600);
  const y = useMotionValue(50);

  useEffect(() => {
    if (width <= 1024) {
      x.set(0);
      if (isInView) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    }
  }, [isInView, width, x]);

  const smoothX = useTransform(x, (v) => v);
  const smoothY = useTransform(y, (v) => v);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      if (flag) {
        x.set(mouseX);
        setFlag(false);
      }
      animate(x, mouseX, { duration: 0.3, ease: 'easeOut' });
      animate(y, mouseY, { duration: 0.3, ease: 'easeOut' });
    },
    [flag, x, y],
  );
  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      setIsHovered(false);
      const rect = e.currentTarget.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      animate(x, mouseX, { duration: 0.2, ease: 'easeOut' });
      animate(y, mouseY, { duration: 0.2, ease: 'easeOut' });
    },
    [x, y],
  );
  return (
    <Link to={transferTo} target="_blank">
      <div className="relative w-full">
        <motion.div
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="p-1 xs:p-2  absolute w-[320px] h-[220px] xs:w-[350px] xs:h-[250px] shadow-[0_15px_45px_rgba(0,0,0,0.25)] bg-[#fbfbfb] z-50 pointer-events-none rounded-t-[5px] rounded-es-[5px]"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: width <= 1024 ? '0' : '-35%',
            translateY: width <= 1024 ? '-120%' : '-110%',
            transformOrigin: 'center',
          }}
        >
          {isHovered && (
            <>
              <Swiper
                spaceBetween={50}
                slidesPerView={'auto'}
                autoplay={{
                  delay: 1500,
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
          whileHover={
            width > 1024
              ? { width: '90%', margin: '0 auto' }
              : { width: '100%', margin: '0 auto' }
          }
          transition={{ duration: 0.3 }}
          onMouseEnter={() => {
            if (width > 1024) {
              setIsHovered(true);
              setFlag(true);
            }
          }}
          onMouseMove={(e) => width > 1024 && handleMouseMove(e)}
          onMouseLeave={(e) => {
            if (width > 1024) {
              handleMouseLeave(e);
            }
          }}
          className="w-full flex justify-between h-24 items-center overflow-hidden  rounded-none m:rounded-[5px] cursor-pointer relative"
        >
          <motion.div
            animate={{
              background: isHovered
                ? width < 1024
                  ? 'linear-gradient(to right, #151419 40%, transparent)'
                  : 'linear-gradient(to right, #151419 60%, transparent)'
                : 'linear-gradient(to right, #151419 80%, transparent)',
            }}
            transition={{ duration: 0.4 }}
            className="absolute w-full h-full z-10"
          ></motion.div>
          <p
            className="text-[#fbfbfb] pl-5 s:pl-8 text-[20px] s:text-[25px] z-10"
            ref={projectRef}
          >
            {title}
          </p>
          <motion.img
            className={` w-1/2 md:w-auto md:h-full object-cover duration-300 ${
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
