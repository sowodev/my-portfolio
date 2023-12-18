import AppContext from '@context/AppContext';
import { FC, ReactElement, useContext } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarNavigatorProps {
  name: string;
  address: string;
  icon: ReactElement;
}

const SidebarNavigator: FC<SidebarNavigatorProps> = ({
  name,
  address,
  icon,
}: SidebarNavigatorProps): ReactElement => {
  const { sidebar } = useContext(AppContext);

  return (
    <NavLink
      to={address}
      className={`flex h-fit w-full items-center justify-center`}
      onClick={() => sidebar.setOpen(false)}
    >
      {({ isActive }): ReactElement => {
        return (
          <div
            className={`flex h-10 w-4/5 flex-row items-center justify-start gap-4 rounded ps-8 ${
              isActive && `border-l-[6px] border-white bg-neutral-500`
            } hover:bg-[#606060]`}
          >
            {icon}
            <span className="font-[Blinker] text-white">{name}</span>
          </div>
        );
      }}
    </NavLink>
  );
};

export default SidebarNavigator;
