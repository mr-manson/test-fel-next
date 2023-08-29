import styles from "./Schedule.module.scss";
import {HTitle} from "@/components";
import {Button} from "@/components/common/Button/Button";
import arrow from "@/public/arrow.svg";

export const Schedule = () => {
    return (
        <div id="schedule" className={styles.schedule_container}>
            <div className={styles.schedule}>
                <HTitle level='h2' className={styles.title}>schedule <span>for you</span></HTitle>
                <div className={styles.schedule_calendar}>
                    <div className={styles.calendar}>
                        <div className={styles.days}>
                            <ul className={styles.days_list}>
                                <li className={styles.day}>Mon</li>
                                <li className={styles.day}>Tue</li>
                                <li className={styles.day}>Wed</li>
                                <li className={styles.day}>Thu</li>
                                <li className={styles.day}>Fri</li>
                                <li className={styles.day}>Sat</li>
                                <li className={styles.day}>Sun</li>
                            </ul>
                        </div>
                        <div className={styles.nums}>
                            <ul className={styles.nums_list}>
                                <li className={styles.num}>31</li>
                                <li className={styles.num}>1</li>
                                <li className={styles.num}>2</li>
                                <li className={styles.num}>3</li>
                                <li className={styles.num}>4</li>
                                <li className={styles.num}>5</li>
                                <li className={styles.num}>6</li>
                            </ul>
                        </div>
                        <div className={styles.calendar_rows}>
                            <div className={styles.row_item}>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}></div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}>9 - 11</div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}>7 - 10</div>
                                </div>
                                <div className={`${styles.btn} ${styles.active}`}>
                                    <div className={styles.btn_name}>10 - 13</div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}>8 - 11</div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}></div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}>9 - 11</div>
                                </div>
                            </div>
                            <div className={styles.row_item}>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}></div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}>17 - 19</div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}></div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}>15 - 18</div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}>17 - 19</div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}></div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}>17 - 19</div>
                                </div>
                            </div>
                            <div className={styles.row_item}>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}>19 - 22</div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}></div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}>20 - 22</div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}></div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}></div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}>19 - 22</div>
                                </div>
                                <div className={styles.btn}>
                                    <div className={styles.btn_name}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button  icon="none">Order</Button>
                </div>
            </div>
        </div>
    );
};