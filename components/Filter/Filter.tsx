import styles from "./Filter.module.scss";
import {HTitle} from "@/components";
import arrow from "@/public/arrow.svg";
import {Button} from "@/components/common/Button/Button";
import {RadioButton} from "@/components/common/RadioButton/RadioButton";
import Image from "next/image";
import filterCircle from "./../../public/filter-circle.png";

export const Filter = () => {
    return (
        <div className={styles.filter_wrapper}>
            <div className={styles.filter_container}>
                <div className={styles.filter}>
                    <HTitle level='h2' className={styles.title}>filter for <span>order</span></HTitle>
                    <div className={styles.filter_categories}>
                        <div className={styles.category_item}>
                            <div className={styles.category_title}>Do you have allergy?</div>
                            <div className={styles.btns_group}>
                                <RadioButton size="small" name="allergy" id="allergy_1">None</RadioButton>
                                <RadioButton size="small" name="allergy" id="allergy_2">Cat</RadioButton>
                                <RadioButton size="small" name="allergy" id="allergy_3">Dog</RadioButton>
                            </div>
                        </div>
                        <div className={styles.category_item}>
                            <div className={styles.category_title}>How often do you need cleaning?</div>
                            <div className={styles.btns_group}>
                                <RadioButton name="often" id="often_1">One-time</RadioButton>
                                <RadioButton name="often" id="often_2">Twice a week</RadioButton>
                                <RadioButton name="often" id="often_3">Every week</RadioButton>
                            </div>
                        </div>
                        <div className={styles.category_item}>
                            <div className={styles.category_title}>
                                What type of cleaning do you need?
                            </div>
                            <div className={styles.btns_group}>
                                <RadioButton size="big" name="type" id="type_1">Regular cleaning</RadioButton>
                                <RadioButton size="big" name="type" id="type_2">Window cleaning</RadioButton>
                                <RadioButton size="big" name="type" id="type_3">After repairing</RadioButton>
                                <RadioButton size="big" name="type" id="type_4">After relocation</RadioButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.form_group}>
                    <input
                        type="text"
                        className={styles.input_field}
                        value="549 Zuzvusedz Court, Natburgh , JS, 62227"
                    />
                    <Button icon={arrow} className={styles.form}></Button>
                </div>
            </div>
            <Image
                src={filterCircle}
                alt="filter-circle"
                className={styles.filter_decor}
            />
        </div>
    );
};