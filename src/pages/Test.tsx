import React from "react";

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
  const getPageNumbers = () => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= total_pages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="flex flex-row justify-center my-4">
      <button
        className={`mr-3 py-2 px-4 rounded ${
          current_page === 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-300"
        }`}
        onClick={() => handlePageChange(current_page - 1)}
        disabled={current_page === 1}
      >
        Previous
      </button>
      {getPageNumbers().map((page_number) => {
        return (
          <button
            key={page_number}
            className={`mr-3 py-2 px-4 rounded ${
              current_page === page_number
                ? "bg-blue-500 text-white cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-400"
            }`}
            disabled={current_page === page_number}
            onClick={() => handlePageChange(page_number)}
          >
            {page_number}
          </button>
        );
      })}

      <button
        className={`ml-3 py-2 px-4 rounded ${
          current_page === total_pages
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-300"
        }`}
        disabled={current_page === total_pages}
        onClick={() => handlePageChange(current_page + 1)}
      >
        Next
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
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="h-12">
        <PaginationController
          current_page={1}
          total_pages={17}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};

export default Test;
