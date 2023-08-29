import styles from "./Clients.module.scss";
import {HTitle} from "@/components";
import clients from "./../../public/clients.png";
import Image from "next/image";

export const Clients = () => {
    return (
        <div className={styles.clients_container}>
            <div className={styles.clients}>
                <HTitle level='h2' className={styles.title}>client`s kind <span>word</span></HTitle>
                <Image src={clients} alt="clients" className={styles.clients_img}/>
            </div>
        </div>
    );
};