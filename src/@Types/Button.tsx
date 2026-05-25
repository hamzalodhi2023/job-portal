import { JSX } from "react";

export interface ButtonProps {
  link: string;
  bg: boolean;
  content: string;
  width?: string;
  height?: string;
  padding?: string;
  rounded?: string;
  icon?: JSX.Element;
  underline?: string;
  color?: string;
}
