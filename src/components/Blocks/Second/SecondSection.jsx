import React from "react";
import styles from "./Second.module.scss";

export default function SecondSection() {
    return (
        <div className={styles.second__wrapper}>
            <div className={`main__wrapper ${styles.second__content_wrapper}`}>
                <p className={styles.second_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam voluptate, ea fugit cupiditate deserunt beatae
                    repellendus assumenda temporibus dignissimos illum cumque
                    eos officiis aspernatur, labore nisi modi porro nesciunt
                    iure?Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsam voluptate, ea fugit cupiditate deserunt beatae
                    repellendus assumenda temporibus dignissimos illum cumque
                    eos officiis aspernatur, labore nisi modi porro nesciunt
                    iure?
                </p>
            </div>
        </div>
    );
}
