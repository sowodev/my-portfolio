import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { FC, ReactElement } from 'react';

type BtnProps = {
  page_number: number;
  current_page: number;
  total_pages: number;
  icon?: ReactElement;
  chevron_direction?: 'left' | 'right';
  handlePageChange: (page_number: number) => void;
};

const PaginationBtn: FC<BtnProps> = ({
  page_number,
  current_page,
  total_pages,
  icon,
  chevron_direction,
  handlePageChange,
}: BtnProps): ReactElement => {
  const display_element: ReactElement | number = icon ? icon : page_number;
  const name_of_class: string = icon
    ? chevron_direction === 'left'
      ? `flex h-6 w-8 md:h-8 md:w-10 rounded justify-center items-center ${
          current_page === 1 || total_pages === 0
            ? 'bg-slate-200 cursor-not-allowed dark:bg-slate-500'
            : 'hover:bg-slate-100 dark:hover:bg-slate-700'
        }`
      : `flex h-6 w-8 md:h-8 md:w-10 rounded justify-center items-center ${
          current_page === total_pages || total_pages === 0
            ? 'bg-gray-200 cursor-not-allowed dark:bg-slate-500'
            : 'hover:bg-gray-100 dark:hover:bg-slate-700'
        }`
    : `flex h-6 w-8 md:h-8 md:w-10 font-[Lexend] font-light text-sm rounded justify-center items-center ${
        current_page === page_number
          ? 'bg-gradient-to-b from-sky-300 to-cyan-300 text-white cursor-not-allowed dark:text-slate-800 dark:from-sky-400 dark:to-cyan-400'
          : 'hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-700'
      }`;

  return (
    <>
      {' '}
      {(page_number === 2 && current_page > 4 && total_pages > 7) ||
      (page_number === total_pages - 1 && current_page < total_pages - 3 && total_pages > 7) ? (
        <EllipsisHorizontalIcon className="h-6 w-8 md:h-8 md:w-10 stroke-slate-300 dark:stroke-slate-500" />
      ) : (
        <button
          className={name_of_class}
          disabled={
            chevron_direction === 'left' && current_page === 1
              ? true
              : chevron_direction === 'right' && current_page === total_pages
              ? true
              : current_page === page_number
          }
          onClick={() => {
            chevron_direction === 'left'
              ? handlePageChange(current_page - 1)
              : chevron_direction === 'right'
              ? handlePageChange(current_page + 1)
              : handlePageChange(page_number);
          }}
        >
          {display_element}
        </button>
      )}
    </>
  );
};

export default PaginationBtn;
