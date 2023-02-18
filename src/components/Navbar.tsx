import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = function () {
  return (
    <nav className="flex navbar">
      <div className="columns-6 colnav justify-around">
        <div className="nav-button-logo flex-none">
          <a href="/" className="logo">
            <div className="w-fit">
              <img src="./src/assets/logo.png" alt="" />
            </div>
          </a>
        </div>
        <div className="nav-button-search">
          <a href="/" className="search">
            <span className="flex-none ml-8">Search (alt+s)</span>
            <div className="flex-auto w-3/5 h-full" />
            <MagnifyingGlassIcon className="h-6 f-6 mr-4" />
          </a>
        </div>
        <div className="flex h-full w-fit">
          <div className="nav-button-home flex-none">
            <a href="/" className="flex relative h-full w-full">
              <img
                className="relative h-full w-full"
                src="./src/assets/light.svg"
                alt=""
              />
              <div className="grid absolute h-full w-full float-none place-content-center">
                <img
                  className="w-7 h-5 justify-self-center"
                  src="./src/assets/home-icon.svg"
                  alt=""
                />
                <span className="h-fit w-fit text-center">Home</span>
              </div>
            </a>
          </div>
          <div className="nav-button-articles">
            <a href="/" className="flex relative h-full">
              <div className="grid absolute h-full w-full float-none place-content-center">
                <img
                  className="w-7 h-5 justify-self-center"
                  src="./src/assets/articles-icon.svg"
                  alt=""
                />
                <span>Articles</span>
              </div>
            </a>
          </div>
          <div className="nav-button-projects">
            <a href="/" className="flex relative h-full projects">
              <div className="grid absolute h-full w-full float-none place-content-center">
                <img
                  className="w-5 h-6 justify-self-center"
                  src="./src/assets/projects-icon.svg"
                  alt=""
                />
                <span>Projects</span>
              </div>
            </a>
          </div>
          <div className="nav-button-foto">
            <a href="/" className="foto h-3/4 w-3/4">
              <img
                className="h-full w-full"
                src="./src/assets/user.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
