import React, { useEffect, useRef } from "react";
import useWindowSize from "../../Hooks/useWindowSize";

import styles from "./first.module.scss";

export default function FirstSection() {
    const wrapper = useRef();

    const windowSize = useWindowSize();
    let cX = windowSize.width / 2,
        cY = windowSize.height / 2;

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;

            let dx = clientX - cX;
            let dy = clientY - cY;
            let tiltX = dy / cY;
            let tiltY = dx / cX;

            let radius = Math.sqrt(Math.pow(tiltX, 2) + Math.pow(tiltY / 2, 2));
            let degree = radius * 24;

            wrapper.current.style.transform = `rotate3d(${tiltX}, ${
                -tiltY / 2
            }, 0, ${degree}deg)`;
        });
    }, []);

    return (
        <div className={styles.first__wrapper}>
            <div
                className={`main__wrapper ${styles.first__content_wrapper}`}
                ref={wrapper}
                // style={{ transform: "rotate3d(36, -24, 0, 14deg)" }}
            >
                <div className={styles.first__left_side}>
                    <h1 className={styles.title}>
                        <span>&nbsp;Lorem,&nbsp;</span> ipsum dolor sit amet
                    </h1>
                    <h4 className={styles.sub_title}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia unde dolores nesciunt cum, sit ratione soluta
                    </h4>
                </div>
                <div className={styles.first__right_side}>
                    <div className={styles.right__side_img}>
                        <img
                            src="https://vodograi.org/wp-content/uploads/2020/11/canada.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
