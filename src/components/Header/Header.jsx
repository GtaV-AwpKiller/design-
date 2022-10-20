import React from "react";
import { Link as LinkRoute } from "react-router-dom";

import styles from "./Header.module.scss";

export default function Header() {
    const headerItem = [
        { title: "LOGO", url: "#", type: "link" },
        { title: "about", url: "about", type: "link" },
        { title: "help", url: "help", type: "link" },
    ];

    return (
        <header className={styles.header} style={{ zIndex: 1 }}>
            <div className={styles.header__background}>
                <div
                    className={`main__wrapper ${styles.header__content_wrapper}`}
                >
                    <LinkRoute to="/" className={styles.header_logo}>
                        LOGO
                    </LinkRoute>
                    <ul className={styles.header__menu_nav}>
                        {headerItem.map((item) => (
                            <li className={styles.menu__item}>
                                <LinkRoute to={`/${item.url}`}>
                                    {item.title}
                                </LinkRoute>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.header__theme}> theme </div>
                </div>
            </div>
        </header>
    );
}
