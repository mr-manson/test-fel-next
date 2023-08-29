import styles from "./Hero.module.scss";
import {HTitle} from "@/components";
import Image from "next/image";
import hero from "./../../public/head-img.png";
import {Button} from "@/components/common/Button/Button";
import arrow from "./../../public/arrow.svg";

export const Hero = () => {
    return (
        <div className={styles.hero_container}>
            <div className={styles.hero}>
                <div className={styles.hero_text}>
                    <HTitle level='h1'>create perfect<br/><span>cleanliness</span></HTitle>
                    <div className={styles.hero_content}>
                        I offer a wide range of services that will allow you to enjoy
                        serenity and comfort, allowing us to take care of all cleaning
                        details.
                    </div>
                </div>
                <div className={styles.hero_img}>
                    <Image src={hero} alt="head"/>
                </div>
            </div>
        </div>
    );
};