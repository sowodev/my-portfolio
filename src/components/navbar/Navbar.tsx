import AppContext from '@context/AppContext';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { FC, ReactElement, useContext } from 'react';
import Logo from './Logo';
import NavButtons from './NavButtons';
import AuthBtn from './btns/AuthBtn';

const Navbar: FC = (): ReactElement => {
  const { sidebar } = useContext(AppContext);

  return (
    <nav className="flex h-[4rem] w-full bg-gradient-to-t from-[#666666] to-[#444444] dark:from-slate-700 dark:to-slate-900">
      <div className="flex h-full w-full items-center justify-between ps-2 lg:px-12">
        <div className="flex h-full w-fit flex-row items-center justify-center gap-1 lg:gap-8">
          <button
            className="h-fit w-fit"
            onClick={(): void => sidebar.setOpen((c: boolean): boolean => !c)}
          >
            <Bars3Icon className="h-7 w-7 rounded stroke-white hover:bg-slate-100 hover:bg-opacity-10" />
          </button>
          <Logo />
        </div>
        <div className="flex h-full flex-row">
          <NavButtons />
          <AuthBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
