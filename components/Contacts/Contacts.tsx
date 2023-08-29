import styles from "./Contacts.module.scss";
import {HTitle} from "@/components";
import telegram from "@/public/icon_telegram.svg";
import whatsapp from "@/public/icon_whatsapp.svg";
import viber from "@/public/icon_viber.svg";

import {Button} from "@/components/common/Button/Button";

export const Contacts = () => {
    return (
        <div id="contacts" className={styles.contacts_container}>
            <div className={styles.contacts}>
                <HTitle level='h2' className={styles.title}>my <span>contacts</span></HTitle>
                <div className={styles.socials_group}>
                    <Button active="true" icon={telegram}>Telegram</Button>
                    <Button active="true" icon={whatsapp}>Whatsapp</Button>
                    <Button active="true" icon={viber}>Viber</Button>
                </div>
            </div>
        </div>
    );
};