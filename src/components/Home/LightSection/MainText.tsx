const MainText = () => {
  return (
    <div className=" ml-5 s:ml-0 flex flex-col gap-5 s:gap-8 border-l border-[#878787] border-opacity-50  pl-2">
      <h2 className="font-['bauhaus'] text-[28px] xs:text-[32px] text-[#FF5B04]">
        Nikola.dev
      </h2>
      <div>
        <p className="text-[16px] xs:text-[20px] font-light text-[#151419]">
          Frontend Developer
        </p>
        <p className="text-[14px] font-extralight">Belgrade, Serbia</p>
      </div>
    </div>
  );
};

export default MainText;
