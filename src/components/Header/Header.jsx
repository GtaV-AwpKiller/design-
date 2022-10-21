import React from "react";
import { Link as LinkRoute } from "react-router-dom";

import styles from "./Header.module.scss";

export default function Header() {
    const headerItem = [
        { title: "LOGO", url: "#", type: "link", testid: "main-link" },
        { title: "about", url: "about", type: "link", testid: "main-about" },
        { title: "help", url: "help", type: "link", testid: "help-link" },
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
                                <LinkRoute
                                    data-testid={item.testid}
                                    to={`/${item.url}`}
                                >
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
