import { JSX } from "react";

export interface BrowseCategoryProps {
  icon: JSX.Element;
  text: string;
  job: string;
}

export type BrowseCategoryCardsProps = {
  data: BrowseCategoryProps;
};
