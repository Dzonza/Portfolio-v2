import type { FC } from 'react';
interface SquareData {
  text: string;
  color?: string;
  textColor?: string;
}

const Square: FC<SquareData> = ({ text, color, textColor }) => {
  return (
    <div
      className="flex justify-center items-center h-[250px] w-[250px] font-medium rounded-xl p-5 mr-7"
      style={{ backgroundColor: color ? color : '#151419' }}
    >
      <p
        className="text-center text-[#fbfbfb] text-[28px] opacity-85"
        style={{ color: textColor ? textColor : '#fbfbfb' }}
      >
        {text}
      </p>
    </div>
  );
};

export default Square;
