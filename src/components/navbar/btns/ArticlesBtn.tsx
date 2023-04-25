import { NavLink } from "react-router-dom";

const ArticlesBtn: React.FC = function articlesBtn() {
  return (
    <NavLink to="/articles" className="flex relative h-full w-full group">
      {({ isActive }) => (
        <>
          <img
            className={`relative h-full w-full ${
              !isActive && "opacity-0 group-hover:opacity-30"
            }`}
            src="/src/assets/imgs/light.svg"
            alt=""
          />
          <div
            className={`grid absolute h-full w-full float-none place-content-center ${
              isActive && "drop-shadow-lg"
            }`}
          >
            <img
              className={`w-6 h-5 justify-self-center ${
                isActive && "drop-shadow-lg"
              }`}
              src="/src/assets/imgs/articles-icon.svg"
              alt=""
            />
            <span className={`font-[Blinker] ${isActive && "drop-shadow-lg"}`}>
              Articles
            </span>
          </div>
        </>
      )}
    </NavLink>
  );
};

export default ArticlesBtn;
