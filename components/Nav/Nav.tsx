import styles from "./Nav.module.scss";
import Link from "next/link";

export const Nav = () => {
    return(
        <nav className={styles.nav}>
            <div className={styles.nav_container}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_list__item}>
                        <Link className={styles.nav_list__link} href="#services">Services</Link>
                    </li>
                    <li className={styles.nav_list__item}>
                        <Link className={styles.nav_list__link} href="#about">About</Link>
                    </li>
                    <li className={styles.nav_list__item}>
                        <Link className={styles.nav_list__link} href="#schedule">Schedule</Link>
                    </li>
                    <li className={styles.nav_list__item}>
                        <Link className={styles.nav_list__link} href="#fqa">FQA</Link>
                    </li>
                    <li className={styles.nav_list__item}>
                        <Link className={styles.nav_list__link} href="#contacts">Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}