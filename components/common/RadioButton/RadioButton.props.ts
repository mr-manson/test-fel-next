import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface IButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    children: ReactNode;
    size?: "small" | "big";
    name: string;
    id: string;
}