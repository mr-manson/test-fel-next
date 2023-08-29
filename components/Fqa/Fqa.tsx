import styles from "./Fqa.module.scss";
import {HTitle} from "@/components";
import Image from "next/image";
import circle1 from "./../../public/fqa-circle-1.png";
import circle2 from "./../../public/fqa-circle-2.png";

export const Fqa = () => {
    return (
        <div className={styles.fqa_wrapper}>
            <div id="fqa" className={styles.fqa_container}>
                <div className={styles.fqa}>
                    <HTitle level='h2' className={styles.title}><span>FQA</span></HTitle>
                    <div className={styles.fqa_cards}>
                        <div className={styles.fqa_cards_item}>
                            <div className={styles.item_title}>
                                1. What does your maid service include?
                            </div>
                            <div className={styles.item_text}>
                                Service includes a range of cleaning and housekeeping tasks,
                                such as dusting, vacuuming, mopping, bathroom and kitchen
                                cleaning, laundry, and other tasks as requested by the client.
                            </div>
                        </div>
                        <div className={styles.fqa_cards_item}>
                            <div className={styles.item_title}>
                                2. Are your cleaning products and equipment safe?
                            </div>
                            <div className={styles.item_text}>
                                Yes, i use high-quality cleaning products and equipment that are
                                safe for use in homes and offices.
                            </div>
                        </div>
                        <div className={styles.fqa_cards_item}>
                            <div className={styles.item_title}>
                                3. Can I schedule a one-time cleaning, or do you only offer
                                periodic services?
                            </div>
                            <div className={styles.item_text}>
                                There are both one-time and periodic cleaning services. You can
                                schedule services at any time convenient for you.
                            </div>
                        </div>
                        <div className={styles.fqa_cards_item}>
                            <div className={styles.item_title}>
                                4. How do I schedule maid services with your company?
                            </div>
                            <div className={styles.item_text}>
                                You can schedule maid services with us by emails, or through our
                                online booking system.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src={circle1}
                alt="fqa-circle"
                className={styles.fqa_circle_1}
            />
            <Image
                src={circle2}
                alt="fqa-circle"
                className={styles.fqa_circle_2}
            />
        </div>
    );
};