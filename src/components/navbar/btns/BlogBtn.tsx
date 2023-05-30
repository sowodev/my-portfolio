import { NewspaperIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const BlogBtn: React.FC = function blogBtn() {
  return (
    <NavLink to="/articles" className="group relative flex h-full w-full">
      {({ isActive }) => (
        <>
          <img
            className={`relative h-full w-full ${
              !isActive && "opacity-0 group-hover:opacity-30"
            }`}
            src="/imgs/light.svg"
            alt=""
          />
          <div
            className={`absolute float-none grid h-full w-full place-content-center ${
              isActive && "drop-shadow-lg"
            }`}
          >
            <NewspaperIcon
              className={`h-6 w-6 justify-self-center ${
                isActive && "drop-shadow"
              }`}
            />
            <span
              className={`font-[Blinker] leading-4 ${
                isActive && "drop-shadow-lg"
              }`}
            >
              Blog
            </span>
          </div>
        </>
      )}
    </NavLink>
  );
};

export default BlogBtn;
