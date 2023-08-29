import styles from "./Choose.module.scss";
import {HTitle} from "@/components";
import cn from "classnames";
import quality from "./../../public/quality.svg";
import schedule from "./../../public/schedule.svg";
import hand from "./../../public/hand-shake.png";
import Image from "next/image";

export const Choose = () => {
    return (
        <div className={styles.choose_container}>
            <div className={styles.choose}>
                <HTitle level='h2' className={styles.title}>choose better <span>with me</span></HTitle>
                <div className={styles.choose_cards}>
                    <div className={cn(styles.choose_cards_item, styles.green)}>
                        <div className={styles.icon_box}>
                            <Image
                                src={quality}
                                alt="quality"
                                className={styles.item_icon}
                            />
                        </div>
                        <div className={styles.choose_item_title}>Quality assurance</div>
                        <div className={styles.item_text}>
                            I offer a full guarantee of the quality of my maid services. Your
                            trust and satisfaction is our main goal and I am willing to do my
                            best to exceed your expectations.
                        </div>
                    </div>
                    <div className={cn(styles.choose_cards_item, styles.pink)}>
                        <div className={styles.icon_box}>
                            <Image
                                src={schedule}
                                alt="schedule"
                                className={styles.item_icon}
                            />
                        </div>
                        <div className={styles.choose_item_title}>Flexible schedule</div>
                        <div className={styles.item_text}>
                            Each client may have their own schedule and special requirements.
                            You can choose a convenient time and day for cleaning, including
                            regular visits or one-time cleaning at your request.
                        </div>
                    </div>
                    <div className={cn(styles.choose_cards_item, styles.yellow)}>
                        <div className={styles.icon_box}>
                            <Image
                                src={hand}
                                alt="hand"
                                className={styles.item_icon}
                            />
                        </div>
                        <div className={styles.choose_item_title}>Trust and reliability</div>
                        <div className={styles.item_text}>
                            I appreciate the trust you place in me and I guarantee the
                            absolute confidentiality and security of your home and personal
                            information.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};