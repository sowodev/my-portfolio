const Navbar = function () {
  return (
    <nav className="flex navbar">
      <div className="columns-6 colnav">
        <div className="nav-button-logo ml-24">
          <a href="/" className="logo">
            <div className="w-fit">
              <img src="./src/assets/logo.png" alt="" />
            </div>
          </a>
        </div>
        <div className="nav-button-search ml-80">
          <a href="/" className="search">
            <span className="ml-8">Search (alt+s)</span>
          </a>
        </div>
        <div className="nav-button-home ml-80">
          <a href="/" className="flex relative h-full home">
            <span className="h-full w-full float-none absolute">Home</span>
            <img
              className="relative h-full"
              src="./src/assets/light.svg"
              alt=""
            />
          </a>
        </div>
        <div className="nav-button-articles">
          <a href="/" className="articles">
            <span>Articles</span>
          </a>
        </div>
        <div className="nav-button-projects">
          <a href="/" className="projects">
            <span>Projects</span>
          </a>
        </div>
        <div className="nav-button-foto">
          <a href="/" className="foto">
            <span>Foto</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
