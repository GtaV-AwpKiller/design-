import React from "react";

import styles from "./first.module.scss";

export default function FirstSection() {
    return (
        <div className={styles.first__wrapper}>
            <div className={`main__wrapper ${styles.first__content_wrapper}`}>
                <div className={styles.first__left_side}>
                    <h1 className={styles.title}>
                        Lorem, ipsum dolor sit amet
                    </h1>
                    <h4 className={styles.sub_title}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia unde dolores nesciunt cum, sit ratione soluta
                    </h4>
                </div>
                <div className={styles.first__right_side}>
                    <div className={styles.right__side_img}>IMG</div>
                </div>
            </div>
        </div>
    );
}
