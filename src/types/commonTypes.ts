import { ReactNode } from "react";

export interface SlideProps {
  id?: number;
  image: string;
  title: string;
  description: string;
  link?: string;
  active?:boolean;
  children?:Children;
  style?:string;
}

export interface CarouselConfig {
  vitesse: number;
  pauseAuSurvole: boolean;
  autoPlay: boolean;
}

export type Children = JSX.Element[] | JSX.Element | ReactNode | string;

export interface SectionProps {
          sectionId :string ,
          children:Children,
};
