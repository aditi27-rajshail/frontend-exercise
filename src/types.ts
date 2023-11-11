import { actionBtnHandlers } from "./logic/actionBtnHandlers";

export type MainData = {
  img: string;
  title: string;
  subText: string;
  isDisabled: boolean;
  accordionDetails: AccordionDetailsData[];
};

export type AccordionDetailsData = {
  title: string;
  tag?: string;
  subText: string;
  info?: string;
  buttonText: string;
  btnAction: HandlerKeys;
};

export type AsideContainerData = {
  title: string;
  subText: string;
};

export type HandlerKeys = keyof typeof actionBtnHandlers;
