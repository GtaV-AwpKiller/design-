import React, { useEffect, useState } from "react";
import styles from "./Second.module.scss";

export default function SecondSection({ pos }) {
    const span = document.getElementsByClassName("second");
    const [spanAr, setSpanAr] = useState([]);
    const [vals, setVals] = useState([]);
    console.log(pos);
    useEffect(() => {
        spanAr.push(span);
        const topPos = (e) => {
            console.log(e);
            let posEl = document.documentElement.scrollTop;
            if (posEl > 106) {
                spanAr.forEach = (n, i) => {
                    // console.log(spanAr);
                    let spans = spanAr[i],
                        background = `linear-gradient(144deg, #fff 80%, #050505 0%)`;
                    spans.style.background = `${background}`;
                    console.log("ki", spans);
                };
            }
        };
        topPos();
    }, []);

    return (
        <div className={styles.second__wrapper}>
            <div className={`main__wrapper ${styles.second__content_wrapper}`}>
                <p className={styles.second_text}>
                    <span className="second">Lorem ipsum</span> <br />
                    <span className="second">
                        dolor sit amet consectetur adipisicing.
                    </span>
                    <br />
                    <span className="second">Ipsam voluptate, ea fugit</span>
                    <br />
                    <span className="second">deserunt beatae repellendus</span>
                    <br />
                    <span className="second">assumenda temporibus </span>
                    <br />
                    <span className="second">dignissimos illum cumque</span>
                </p>
            </div>
        </div>
    );
}
