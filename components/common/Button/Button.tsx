import styles from "./Button.module.scss";
import cn from "classnames";
import arrow from "./../../../public/arrow.svg";
import Image from "next/image";
import {IButtonProps} from "./Button.props";


export const Button = ({size, icon, active, children, className, ...props}: IButtonProps) => {
    return (
        <button className={cn(styles.btn, className, {
            [styles.small]: size == "small",
            [styles.big]: size == "big",
            [styles.active]: active == "true",
        })}
             {...props}
        >
            <div className={styles.btn_name}>{children}</div>
            {icon != "none" ? <Image
                // @ts-ignore
                src={icon}
                alt="arrow"
                className={styles.btn_icon}
            /> : ""}
        </button>
    );
};