import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type Props = {
  current_page: number;
  total_pages: number;
  onPageChange: (page_number: number) => void;
};

const PaginationController: React.FC<Props> = ({
  current_page,
  total_pages,
  onPageChange,
}) => {
  const pages_numbers: number[] = [];
  const last_page = total_pages;

  const getPageNumbers = () => {
    for (let i = 1; i <= total_pages; i++) {
      pages_numbers.push(i);
    }
  };

  getPageNumbers();

  const handlePageChange = (page_number: number) => {
    console.log(current_page, page_number);
    onPageChange(page_number);
  };

  const SecondBtn = () => (
    <button
      className={`flex h-8 w-10 font-[Lexend] font-light text-sm rounded justify-center items-center ${
        current_page === 2
          ? "bg-gradient-to-b from-sky-300 to-cyan-300 text-white cursor-not-allowed"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
      disabled={current_page === 2}
      onClick={() => handlePageChange(2)}
    >
      {2}
    </button>
  );

  const NextToLastBtn = () => (
    <button
      className={`flex h-8 w-10 font-[Lexend] font-light text-sm rounded justify-center items-center ${
        current_page === 6
          ? "bg-gradient-to-b from-sky-300 to-cyan-300 text-white cursor-not-allowed"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
      disabled={current_page === 6}
      onClick={() => handlePageChange(6)}
    >
      {6}
    </button>
  );

  return (
    <div className="flex flex-row justify-center items-center gap-2 my-2">
      <button
        className={`flex h-8 w-10 rounded justify-center items-center ${
          current_page === 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        onClick={() => handlePageChange(current_page - 1)}
        disabled={current_page === 1}
      >
        <ChevronLeftIcon className="h-5 w-5 stroke-[#333333ce] pointer-events-none" />
      </button>

      {/* button 1 */}
      <button
        className={`flex h-8 w-10 font-[Lexend] font-light text-sm rounded justify-center items-center ${
          current_page === 1
            ? "bg-gradient-to-b from-sky-300 to-cyan-300 text-white cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        disabled={current_page === 1}
        onClick={() => handlePageChange(1)}
      >
        {1}
      </button>
      {/* end button 1 */}

      {/* page_number buttons starts here! */}

      {/* button 2 */}
      {total_pages <= 7 ? (
        <SecondBtn />
      ) : current_page <= 4 ? (
        <SecondBtn />
      ) : (
        <img className="h-8 w-10" src="/src/assets/imgs/dots.svg" alt="" />
      )}
      {/* end button 2 */}

      <button
        className={`flex h-8 w-10 font-[Lexend] font-light text-sm rounded justify-center items-center ${
          current_page === 3
            ? "bg-gradient-to-b from-sky-300 to-cyan-300 text-white cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        disabled={current_page === 3}
        onClick={() => handlePageChange(3)}
      >
        {3}
      </button>
      <button
        className={`flex h-8 w-10 font-[Lexend] font-light text-sm rounded justify-center items-center ${
          current_page === 4
            ? "bg-gradient-to-b from-sky-300 to-cyan-300 text-white cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        disabled={current_page === 4}
        onClick={() => handlePageChange(4)}
      >
        {4}
      </button>
      <button
        className={`flex h-8 w-10 font-[Lexend] font-light text-sm rounded justify-center items-center ${
          current_page === 5
            ? "bg-gradient-to-b from-sky-300 to-cyan-300 text-white cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        disabled={current_page === 5}
        onClick={() => handlePageChange(5)}
      >
        {5}
      </button>

      {/* button 6 */}

      {total_pages <= 7 ? (
        <NextToLastBtn />
      ) : current_page >= total_pages - 3 ? (
        <NextToLastBtn />
      ) : (
        <img className="h-8 w-10" src="/src/assets/imgs/dots.svg" alt="" />
      )}

      {/* end button 6 */}

      {/* page_number buttons ends here! */}

      {/* button end */}
      <button
        className={`flex h-8 w-10 font-[Lexend] font-light text-sm rounded justify-center items-center ${
          current_page === last_page
            ? "bg-gradient-to-b from-sky-300 to-cyan-300 text-white cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        disabled={current_page === last_page}
        onClick={() => handlePageChange(last_page)}
      >
        {last_page}
      </button>
      {/* end button end */}

      <button
        className={`flex h-8 w-10 rounded justify-center items-center ${
          current_page === total_pages
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        disabled={current_page === total_pages}
        onClick={() => handlePageChange(current_page + 1)}
      >
        <ChevronRightIcon className="h-5 w-5 stroke-[#333333ce] pointer-events-none" />
      </button>
    </div>
  );
};

const MyPaginationController: React.FC<Props> = function name({
  current_page,
  total_pages,
  onPageChange,
}) {
  return <div>Hello</div>;
};

const Test = function test() {
  const [current_page, setCurrentPage] = useState(1);
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="h-12">
        <PaginationController
          current_page={current_page}
          total_pages={10}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Test;
