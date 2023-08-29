import styles from "./Services.module.scss";
import {HTitle} from "@/components";
import greenIcon from "./../../public/service-green.png";
import violetIcon from "./../../public/service-violet.png";
import Image from "next/image";

export const Services = () => {
    return (
        <div id="services" className={styles.services_container}>
            <div className={styles.services}>
                <HTitle level='h2' className={styles.title}>services <span>I offer</span></HTitle>
                <div className={styles.services_cards}>
                    <div className={styles.services_cards_item}>
                        <div className={styles.services_item_title}>One-time cleaning</div>
                        <Image
                            src={greenIcon}
                            alt="service-icon"
                            className={styles.service_item_icon}
                        />
                        <div className={styles.item_text_1}>
                            A one-time cleaning refers to a single session of deep cleaning or
                        </div>
                        <div className={styles.item_text_2}>
                            thorough tidying up of a space, such as a home, office, or any
                            other area. It is typically performed on an irregular basis and is
                            not part of a regular cleaning routine.
                        </div>
                    </div>
                    <div className={`${styles.services_cards_item} ${styles.violet}`}>
                        <div className={styles.services_item_title}>Twice a week</div>
                        <Image
                            src={violetIcon}
                            alt="service-icon"
                            className={styles.service_item_icon}
                        />
                        <div className={styles.item_text_1}>
                            Cleaning &quot;twice a week&quot; refers to performing cleaning tasks or
                        </div>
                        <div className={styles.item_text_2}>
                            maintenance activities two times within a week. This frequency
                            implies that the space is cleaned on a more regular basis,
                            allowing for the upkeep of cleanliness and tidiness throughout the
                            week.
                        </div>
                    </div>
                    <div className={styles.services_cards_item}>
                        <div className={styles.services_item_title}>Every week</div>
                        <Image
                            src={greenIcon}
                            alt={styles.service_icon}
                            className={styles.service_item_icon}
                        />
                        <div className={styles.item_text_1}>
                            When it comes to cleaning &quot;every week,&quoe; it indicates that the
                        </div>
                        <div className={styles.item_text_2}>
                            cleaning tasks are performed once every seven days, on a
                            consistent and recurring basis. This frequency is suitable for
                            maintaining a reasonably clean environment and preventing the
                            accumulation of dirt, dust, and clutter.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};