import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children?: ReactNode;
    size?: "small" | "big";
    active?: "true" | "false";
    icon?: string | "none";
}