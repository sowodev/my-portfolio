import { NavLink } from "react-router-dom";

const PaginationController = ({
  page,
  total_pages,
  path,
}: {
  page: number;
  total_pages: number;
  path: string;
}) => {
  const previousPage = page - 1;
  const nextPage = page + 1;

  return (
    <div className="pagination">
      {previousPage > 0 && (
        <NavLink to={`/${path}/${previousPage}`} className="pagination__link">
          Previous page
        </NavLink>
      )}
      {nextPage <= total_pages && (
        <NavLink to={`/${path}/${nextPage}`} className="pagination__link">
          Next page
        </NavLink>
      )}
    </div>
  );
};
