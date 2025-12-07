import type { FC } from 'react';

interface RectData {
  from: string;
  to: string;
}

const VerticalRect: FC<RectData> = ({ from, to }) => {
  return (
    <div
      className={`h-[250px] w-[80px] rounded-xl mr-7 opacity-80`}
      style={{
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    ></div>
  );
};

export default VerticalRect;
