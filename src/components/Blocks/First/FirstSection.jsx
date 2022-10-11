import React, { useEffect, useRef } from "react";
import useWindowSize from "../../Hooks/useWindowSize";

import { useDispatch, useSelector } from "react-redux";
import { decr, incr, add, del } from "../../../redux/toolkitSlice";

import styles from "./first.module.scss";
import pigHead from "../../../assets/FirstSection/pig.png";

export default function FirstSection() {
    const count = useSelector((state) => state.toolkit.count);
    const todos = useSelector((state) => state.toolkit.todos);
    const asyncTodo = () => {
        return async (dispatch) => {
            setTimeout(() => {
                dispatch(add(prompt()));
            }, 2000);
        };
    };
    console.log(todos);

    const dispatch = useDispatch();

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

    return (
        <div className={styles.first__wrapper}>
            <div
                className={`main__wrapper ${styles.first__content_wrapper}`}
                ref={wrapper}
            >
                <div className={styles.first__left_side}>
                    <h1 className={styles.title}>
                        <span>&nbsp;Lorem,&nbsp;</span> ipsum dolor sit amet
                    </h1>
                    <h4 className={styles.sub_title}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia unde dolores nesciunt cum, sit ratione soluta
                    </h4>

                    <div className={styles.under_title}>
                        <h3 className={styles.under__title_counter}>
                            Счетсчик {count}
                        </h3>
                        <div className={styles.under_buttons}>
                            <button
                                onClick={() => {
                                    dispatch(incr());
                                }}
                            >
                                инкр
                            </button>
                            <button
                                onClick={() => {
                                    dispatch(decr());
                                }}
                            >
                                декр
                            </button>
                            <button
                                onClick={() => {
                                    dispatch(add(prompt()));
                                }}
                            >
                                добавить
                            </button>
                            <button
                                onClick={() => {
                                    dispatch(del());
                                }}
                            >
                                удалить последний
                            </button>
                            <button
                                onClick={() => {
                                    dispatch(asyncTodo());
                                }}
                            >
                                async add todo
                            </button>
                        </div>

                        <ul>
                            {todos.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div
                    className={styles.first__right_side}
                    style={{ position: "relative" }}
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
