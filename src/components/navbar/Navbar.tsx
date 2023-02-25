import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavButtons from "./NavButtons";

const Navbar = function () {
  return (
    <nav className="flex navbar">
      <div className="columns-6 colnav justify-around">
        <Logo />
        <SearchBar />
        <NavButtons />
      </div>
    </nav>
  );
};

export default Navbar;
