import { Dispatch, SetStateAction } from 'react';

type DetailsDialogType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type TextPanelControllerType = {
  element: 'About' | 'Tools' | 'Services';
  setElement: Dispatch<SetStateAction<'About' | 'Tools' | 'Services'>>;
};

export type HomeContextType = {
  details_dialog: DetailsDialogType;
  text_panel_controller: TextPanelControllerType;
};
