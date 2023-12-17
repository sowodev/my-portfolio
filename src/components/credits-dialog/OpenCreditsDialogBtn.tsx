import AppContext from '@context/AppContext';
import { FC, ReactElement, useContext } from 'react';

const OpenCreditsDialogBtn: FC = (): ReactElement => {
  const { credits, sidebar } = useContext(AppContext);

  return (
    <button
      className="h-fit w-fit font-light text-white hover:text-blue-300"
      onClick={() => {
        sidebar.setOpen(false);
        credits.setOpenCredits(true);
      }}
    >
      credits
    </button>
  );
};

export default OpenCreditsDialogBtn;
