import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface IHTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    children: ReactNode;
    level: "h1" | "h2";
}