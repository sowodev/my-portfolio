import { Dispatch, SetStateAction } from 'react';

type DetailsDialogType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type TextPanelControllerType = {
  element: string;
  setElement: Dispatch<SetStateAction<string>>;
};

export type HomeContextType = {
  details_dialog: DetailsDialogType;
  text_panel_controller: TextPanelControllerType;
};
