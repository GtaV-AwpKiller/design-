import Header from "./components/Header/Header";

import "./App.css";
import FirstSection from "./components/Blocks/First/FirstSection";
import SecondSection from "./components/Blocks/Second/SecondSection";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { useEffect, useRef } from "react";

function App() {
    let frameItem = useRef(null),
        zSpacing = -100,
        lastPos = zSpacing / 5,
        $frames = document.getElementsByClassName("t3d_item"),
        frames = [$frames],
        zVal = [];

    useEffect(() => {
        window.onscroll = () => {
            let top = document.documentElement.scrollTop,
                delta = lastPos - top;
            lastPos = top;

            frames.forEach(function (n, i) {
                zVal.push(i * zSpacing + zSpacing);
                zVal[i] += delta * -5;
                let frame = frames[i],
                    transform2 = `translateZ(${zVal[i] - 1800}px)`,
                    transform1 = `translateZ(${zVal[i] + 0}px)`;
                console.log(frame[i]);
                frame[0].setAttribute("style", `transform: ${transform1}`);
                frame[1].setAttribute("style", `transform: ${transform2}`);
            });
        };
    }, []);

    return (
        <div className="App">
            <CustomCursor />
            <Header />
            {/* <SmoothScroll> */}
            <div className="t3d__scroll_container">
                <div className="t3d__scroll_items">
                    <div className="t3d_item" ref={frameItem}>
                        <FirstSection />
                    </div>
                    <div className="t3d_item" ref={frameItem}>
                        <SecondSection />
                    </div>
                </div>
            </div>
            {/* </SmoothScroll> */}
        </div>
    );
}

export default App;
