import styles from "./About.module.scss";
import {HTitle} from "@/components";
import about from "./../../public/about-img.png";
import Image from "next/image";

export const About = () => {
    return (
        <div id="about" className={styles.about_container}>
            <div className={styles.about}>
                <HTitle level='h2' className={styles.title}>about <span>me</span></HTitle>
                <div className={styles.about_content}>
                    <div className={styles.about_text}>
                        <p>
                            Hello! I am a maid, and my mission is to create an atmosphere of
                            impeccable cleanliness and comfort in your home. I pay special
                            attention to every detail, so that your space becomes the perfect
                            decoration in which you can relax and enjoy the comfort.
                        </p>
                        <p>
                            My work includes not only surface cleaning, but also a careful
                            approach to each room. I use effective methods and quality
                            products to ensure deep and thorough cleaning. I know that every
                            home has its own characteristics, so I am ready to adapt to your
                            requirements and preferences.
                        </p>
                    </div>
                    <div className={styles.about_img}>
                        <Image src={about} alt="about" />
                    </div>
                </div>
            </div>
        </div>
    );
};