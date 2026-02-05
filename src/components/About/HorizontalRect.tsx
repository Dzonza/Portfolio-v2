import type { FC } from 'react';

interface RectData {
  image: string;
  text: string;
  color?: string;
  textColor?: string;
}

const HorizontalRect: FC<RectData> = ({ image, text, color, textColor }) => {
  return (
    <div
      className=" flex justify-center items-end gap-1 h-[200px] sm:h-[250px] w-[380px] sm:w-[440px] bg-[#151419] rounded-xl p-[70px] sm:p-[85px] mr-4 sm:mr-7"
      style={{ backgroundColor: color ? color : '#151419' }}
    >
      <img src={`images/${image}`} alt="small letter n" />
      <p
        className="text-center font-[bauhaus] text-[#fbfbfb] text-[40px] opacity-85 "
        style={{ color: textColor ? textColor : '#fbfbfb' }}
      >
        {text}
      </p>
    </div>
  );
};

export default HorizontalRect;
