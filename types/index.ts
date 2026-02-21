import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchManuFacturerProps {
  manufacturer: string; 
  setManuFacturer: string; 
}

export interface CustomFilterProps {
  title: string;
}