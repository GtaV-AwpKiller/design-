import { useEffect, useRef, useState } from "react";
import { useScroll } from "./components/Hooks/useScroll";

import Header from "./components/Header/Header";
import FirstSection from "./components/Blocks/First/FirstSection";
import SecondSection from "./components/Blocks/Second/SecondSection";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import CustomCursor from "./components/CustomCursor/CustomCursor";

import "./App.css";

function App() {
    const { scrollX, scrollY, scrollDirection } = useScroll();
    const page = useRef(null);
    const frameItem1 = useRef();
    const frameItem2 = useRef();
    let $frames = document.getElementsByClassName(".frame"),
        frames = [],
        zSpacing = -1500,
        startPos = zSpacing / 5,
        zVal = [],
        zPosition;

    window.onload = () => {
        frames.push(frameItem1.current, frameItem2.current);

        window.onscroll = () => {
            // if (window.scrollY >= 1 && window.scrollY <= 318) {
            //     window.scrollTo(318, 318);
            // }
            // if (window.scrollY >= 320) {
            //     window.scrollTo(1, 1);
            // }

            // window.scrollTo(318, 318);
            // console.log(window.scrollY);

            zPosition = document.documentElement.scrollTop;
            let delta = startPos - zPosition; // отнимаем от позиции блока Z ось
            startPos = zPosition; // обновляем позицию

            frames.forEach((elem, i) => {
                zVal.push(i * zSpacing + zSpacing); // для каждного элемента даём умноженный zSpasing и плюсуем простарнство между
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

        // width: "160vw",
    };

    // const [scrollUp, setScrollUp] = useState();
    // const [scrollDown, setScrollDown] = useState();

    // setScrollUp(window.moveTo(0, 250));
    // setScrollDown(window.moveTo(0, 250));

    // const page = document.getElementsByClassName("App");

    // console.log(lol);
    // useEffect(() => {
    //     // page = addEventListener("mousedown", scrollDown, false);
    //     // page = removeEventListener("mousedown", scrollDown, true);
    // }, []);
    // useEffect(() => {
    //     setTimeout(() => {
    //         const onScrollDown = (e) => {
    //             setTimeout(() => {
    //                 console.log(e);
    //             }, 1000);
    //         };
    //         window.addEventListener("scroll", onScrollDown);
    //         // window.scrollTo(0, 265);
    //         window.removeEventListener("scroll", onScrollDown);
    //     }, 1000);
    // }, []);

    return (
        <div className="App" ref={page}>
            <CustomCursor />
            <Header />
            {/* <SmoothScroll> */}

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
            {/* </SmoothScroll> */}
        </div>
    );
}

export default App;
