const TextCard = function textCard({
  title,
  leading,
}: {
  title: string;
  leading: string;
}) {
  return (
    <div className="flex h-[95%] w-[97%] flex-col">
      <div className="mt-2 flex h-[25%] w-full items-center justify-center">
        <p className="mx-8 line-clamp-1 font-[Lexend] text-base font-normal dark:text-white">
          {title}
        </p>
      </div>
      <div className="flex h-[75%] w-full items-center justify-center">
        <p className="mx-8 line-clamp-3 indent-3 font-[Lexend] text-sm font-light text-slate-500 dark:text-slate-300">
          {leading}
        </p>
      </div>
    </div>
  );
};

export default TextCard;
