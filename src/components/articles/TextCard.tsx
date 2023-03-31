const TextCard = function textCard({
  title,
  leading,
}: {
  title: string;
  leading: string;
}) {
  return (
    <div className="flex flex-col h-[95%] w-[97%]">
      <div className="flex w-full h-[25%] mt-2 justify-center items-center">
        <p className="font-[Lexend] text-base mx-8 font-normal text-[#333333ce] line-clamp-1">
          {title}
        </p>
      </div>
      <div className="flex w-full h-[75%] justify-center items-center">
        <p className="font-[Lexend] font-light text-sm mx-8 text-[#333333ce] line-clamp-3">
          &ensp; {leading}
        </p>
      </div>
    </div>
  );
};

export default TextCard;
