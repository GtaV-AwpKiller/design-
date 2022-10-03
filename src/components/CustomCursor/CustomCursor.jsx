import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.scss";

export default function CustomCursor() {
    const mainCursor = useRef(null);
    const secondaryCursor = useRef(null);

    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destX: 0,
        destY: 0,
        distX: 0,
        distY: 0,
        key: -1,
    });

    //position
    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;

            const mouseX = clientX;
            const mouseY = clientY;

            //mainCurs
            mainCursor.current.style.transform = `translate3d(${
                mouseX - mainCursor.current.clientWidth / 2
            }px,${mouseY - mainCursor.current.clientHeight / 2}px,0)`;

            //secondCurs
            positionRef.current.mouseX =
                mouseX - secondaryCursor.current.clientWidth / 2;
            positionRef.current.mouseY =
                mouseY - secondaryCursor.current.clientHeight / 2;
        });
    }, []);

    //followSecondCursor
    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);

            const { mouseX, mouseY, destX, destY, distX, distY } =
                positionRef.current;

            if (!destX || !destY) {
                positionRef.current.destX = mouseX;
                positionRef.current.destY = mouseY;
            } else {
                positionRef.current.distX = (mouseX - destX) * 0.06;
                positionRef.current.distY = (mouseY - destY) * 0.06;

                if (
                    Math.abs(positionRef.current.distX) +
                        Math.abs(positionRef.current.distY) <
                    0.01
                ) {
                    positionRef.current.destX = mouseX;
                    positionRef.current.destY = mouseY;
                } else {
                    positionRef.current.destX += distX;
                    positionRef.current.destY += distY;
                }
            }

            secondaryCursor.current.style.transform = `translate3d(${destX}px, ${destY}px, 0)`;
        };
        followMouse();
    }, []);

    return (
        <>
            <div className={styles.main_cursor} ref={mainCursor}></div>
            <div
                className={`${styles.secondary_cursor} `}
                ref={secondaryCursor}
            ></div>
        </>
    );
}
