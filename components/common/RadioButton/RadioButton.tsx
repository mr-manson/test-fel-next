import styles from "./RadioButton.module.scss";
import cn from "classnames";
import Image from "next/image";
import {IButtonProps} from "./RadioButton.props";
import arrow from "@/public/arrow.svg";


export const RadioButton = ({size, name, id, children, className, ...props}: IButtonProps) => {
    return (
        <>
            <input className={cn(styles.radio, className)}
                   {...props} type="radio" name={name} id={id}/>
            <label className={cn(styles.label, className, {
                [styles.small]: size == "small",
                [styles.big]: size == "big",
            })} htmlFor={id}>
                {children}
                <Image
                    src={arrow}
                    alt="arrow"
                    className={styles.radio_icon}
                />
            </label>
        </>
    );
};