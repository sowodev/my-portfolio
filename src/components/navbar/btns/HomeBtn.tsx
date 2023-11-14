import { HomeIcon } from '@heroicons/react/24/outline';
import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const HomeBtn: FC = (): ReactElement => {
  return (
    <NavLink to="/" className="group relative flex h-full w-full">
      {({ isActive }): ReactElement => (
        <>
          <img
            className={`relative h-full w-full ${!isActive && 'opacity-0 group-hover:opacity-30'}`}
            src="/imgs/light.svg"
            alt=""
          />
          <div
            className={`absolute float-none grid h-full w-full place-content-center ${
              isActive && 'drop-shadow-lg'
            }`}
          >
            <HomeIcon className={`h-6 w-6 justify-self-center ${isActive && 'drop-shadow'}`} />
            <p className={`font-[Blinker] leading-4 ${isActive && 'drop-shadow-lg'}`}>Home</p>
          </div>
        </>
      )}
    </NavLink>
  );
};

export default HomeBtn;
