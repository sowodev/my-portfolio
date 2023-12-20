import { ReactElement } from 'react';

type TextCardProps = {
  title: string;
  leading: string;
};

function TextCard({ title, leading }: TextCardProps): ReactElement {
  return (
    <div className="flex h-[95%] w-[97%] flex-col md:justify-center md:items-center md:gap-4">
      <p className="mx-8 line-clamp-2 lg:line-clamp-1 text-base text-justify md:text-left font-normal dark:text-white">
        {title}
      </p>

      <p className="mx-8 line-clamp-3 lg:indent-3 text-sm text-justify md:text-left font-light text-slate-500 dark:text-slate-300">
        {leading}
      </p>
    </div>
  );
}

export default TextCard;
