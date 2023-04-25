import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavButtons from "./NavButtons";

const Navbar = function () {
  return (
    <nav className="flex w-full h-[4.5rem] bg-gradient-to-t from-[#666666] to-[#444444]">
      <div className="flex w-full h-full items-center justify-around">
        <Logo />
        <SearchBar />
        <NavButtons />
      </div>
    </nav>
  );
};

export default Navbar;
