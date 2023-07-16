import React, { useEffect, useRef } from "react";
import styles from "./first.module.scss";
import Wave from "../../Wave/Wave";

export default function FirstSection() {
    const wrapper = useRef();

    // const windowSize = useWindowSize();
    // let cX = windowSize.width / 2,
    //     cY = windowSize.height / 2;

    // useEffect(() => {
    //     document.addEventListener("mousemove", (e) => {
    //         const { clientX, clientY } = e;

    //         let dx = clientX - cX;
    //         let dy = clientY - cY;
    //         let tiltX = dy / cY;
    //         let tiltY = dx / cX;

    //         let radius = Math.sqrt(Math.pow(tiltX, 2) + Math.pow(tiltY / 2, 2));
    //         let degree = radius * 24;

    //         wrapper.current.style.transform = `rotate3d(${tiltX}, ${
    //             tiltY / 2
    //         }, 0, ${degree}deg) `;
    //     });
    // }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wave}>
                <Wave />
            </div>
            <div className={`main__wrapper ${styles.content}`} ref={wrapper}>
                <p className={styles.title} style={{ position: "relative" }}>
                    Я front-end разработчик
                </p>
                <div className={styles.sub}>
                    <a href="https://t.me/RostovPaPaPRO" target="__blank">
                        Telegram
                    </a>
                    <a>VK</a>
                    <a>GitHUB</a>
                    <a>Email</a>
                </div>
            </div>
        </div>
    );
}
