import type { FC } from 'react';
interface SquareData {
  text: string;
  color?: string;
  textColor?: string;
}

const Square: FC<SquareData> = ({ text, color, textColor }) => {
  return (
    <div
      className="flex justify-center items-center h-[200px] sm:h-[250px] w-[200px] sm:w-[250px] font-medium rounded-xl p-5 mr-4 sm:mr-7"
      style={{ backgroundColor: color ? color : '#151419' }}
    >
      <p
        className="text-center text-[#fbfbfb] text-[22px] sm:text-[28px] opacity-85"
        style={{ color: textColor ? textColor : '#fbfbfb' }}
      >
        {text}
      </p>
    </div>
  );
};

export default Square;
