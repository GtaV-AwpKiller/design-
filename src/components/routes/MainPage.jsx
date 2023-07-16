import React, { useEffect, useRef, useState } from "react";
import FirstSection from "../Blocks/First/FirstSection";
import SecondSection from "../Blocks/Second/SecondSection";
import { useScroll } from "framer-motion";

import "../../App.css";
function MainPage() {
    const { scrollX, scrollY, scrollDirection } = useScroll();
    const page = useRef(null);
    const frameItem1 = useRef();
    const frameItem2 = useRef();
    let frames = [],
        zSpacing = -1500,
        startPos = zSpacing / 5,
        zVal = [],
        zPosition;

    window.onload = () => {
        frames.push(frameItem1.current, frameItem2.current);

        window.onscroll = () => {
            zPosition = document.documentElement.scrollTop;
            let delta = startPos - zPosition; // отнимаем от позиции блока Z ось
            startPos = zPosition; // обновляем позицию

            frames.forEach((elem, i) => {
                zVal.push(i * zSpacing + zSpacing); // для каждного элемента даём zSpasing и плюсуем простарнство между
                zVal[i] += delta * -5; // скорость пролистывания
                let frame = frames[i],
                    transform = `translateZ(${zVal[i]}px)`,
                    opacity = zVal[i] < Math.abs(zSpacing) / 5 ? 1 : 0;
                frame.style.transform = `${transform}`;
                frame.style.opacity = `${opacity}`;
            });
        };
    };

    const t3dScrollContainer = {
        width: "100%",
        height: "100%",
        position: "fixed",
        perspective: "1500px",
    };
    const t3d__scroll_items = {
        transformStyle: "preserve-3d",
        height: "100%",
    };
    const t3d_item = {
        width: "100vw",
        height: "100%",
        position: "absolute",
        transition: ".8s ",
    };

    return (
        <div className="App" ref={page}>
            <div style={t3dScrollContainer}>
                <div style={t3d__scroll_items}>
                    <div
                        id="frame"
                        className="frame"
                        style={t3d_item}
                        ref={frameItem1}
                    >
                        <FirstSection />
                    </div>
                    <div
                        id="frame"
                        className="frame"
                        style={{
                            ...t3d_item,
                            opacity: "0",
                            width: "200vw",
                            left: "-50vw",
                        }}
                        ref={frameItem2}
                    >
                        <SecondSection pos={zPosition} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
