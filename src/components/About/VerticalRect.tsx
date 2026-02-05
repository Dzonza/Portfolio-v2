import type { FC } from 'react';

interface RectData {
  from: string;
  to: string;
}

const VerticalRect: FC<RectData> = ({ from, to }) => {
  return (
    <div
      className={`h-[180px] sm:h-[220px] w-[60px] sm:w-[80px] rounded-xl mr-4 sm:mr-7 opacity-80`}
      style={{
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    ></div>
  );
};

export default VerticalRect;
