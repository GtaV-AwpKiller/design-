import React, { useEffect, useRef } from "react";
import useWindowSize from "../../Hooks/useWindowSize";

import { useDispatch, useSelector } from "react-redux";

import styles from "./first.module.scss";
import pigHead from "../../../assets/FirstSection/pig.png";
import { useScroll } from "framer-motion";
import Todos from "../../todos/Todos";

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
                tiltY / 2
            }, 0, ${degree}deg) `;
        });
    }, []);

    const first = useRef(null);
    const second = useRef(null);

    return (
        <div className={styles.first__wrapper}>
            <div
                className={`main__wrapper ${styles.first__content_wrapper}`}
                ref={wrapper}
            >
                <div
                    data-testid="mainPage"
                    className={styles.first__left_side}
                    ref={first}
                >
                    <h1
                        className={styles.title}
                        style={{ position: "relative" }}
                    >
                        <span>&nbsp;Lorem,&nbsp;</span>
                        ipsum dolor sit amet
                    </h1>
                    <h4 className={styles.sub_title}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia unde dolores nesciunt cum, sit ratione soluta
                    </h4>
                    {/* <Todos /> */}
                </div>
                <div
                    className={styles.first__right_side}
                    style={{ position: "relative" }}
                    ref={second}
                >
                    <img
                        src={pigHead}
                        alt=""
                        className={styles.pig__lvl_1}
                        style={{ position: "absolute" }}
                    />
                    <img
                        src={pigHead}
                        alt=""
                        className={styles.pig__lvl_2}
                        style={{ position: "absolute" }}
                    />
                    <img
                        src={pigHead}
                        alt=""
                        className={styles.pig__lvl_3}
                        style={{ position: "absolute" }}
                    />
                </div>
            </div>
        </div>
    );
}
