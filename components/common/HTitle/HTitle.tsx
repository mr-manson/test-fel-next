import styles from "./HTitle.module.scss";
import {IHTitleProps} from "./HTitle.props";
import cn from "classnames";

export const HTitle = ({level, children, className, ...props}: IHTitleProps) => {
    switch (level) {
        case "h1":
            return <h1 className={cn(styles.title, className)} {...props}>{children}</h1>;
        case "h2":
            return <h2 className={cn(styles.title, className)} {...props}>{children}</h2>;
        default:
            return <></>;
    }


};