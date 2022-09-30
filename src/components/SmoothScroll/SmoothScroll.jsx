import React, { useEffect, useRef } from "react";
import useWindowSize from "../Hooks/useWindowSize";

import styles from "./SmoothScroll.module.scss";

export default function SmoothScroll({ children }) {
    const windowSize = useWindowSize();

    const data = {
        ease: 0.04,
        current: 0,
        previous: 10,
        rounded: 10000,
    };

    const scrollingContainerRef = useRef();

    useEffect(() => {
        setBodyHeight();
    }, [windowSize.height]);

    const setBodyHeight = () => {
        document.body.style.height = `${
            scrollingContainerRef.current.getBoundingClientRect().height
        }px`;
    };

    useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler());
    }, []);

    const smoothScrollingHandler = () => {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 10000) / 100;

        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

        // Recursive call
        requestAnimationFrame(() => smoothScrollingHandler());
    };
    return (
        <div className={styles.parent}>
            <div ref={scrollingContainerRef}>{children}</div>
        </div>
    );
}
