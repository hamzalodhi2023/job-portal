import { JSX } from "react";

export interface JobDataProps {
  postTime: string;
  heading: string;
  svg: JSX.Element;
  subText: string;
  job: string;
  timing: string;
  salary: string;
  location: string;
}

export type JobCardProps = {
  data: JobDataProps;
};
