import React from "react";
import { Link as LinkRoute } from "react-router-dom";

import styles from "./Header.module.scss";

export default function Header() {
    const headerItem = [
        { title: "Контакты", url: "Contacts", type: "link" },
        { title: "Стэк", url: "Stack", type: "link" },
        { title: "Проэкты", url: "Projects", type: "link" },
    ];
    return (
        <header className={styles.header} style={{ zIndex: 1 }}>
            <div className={styles.header__background}>
                <nav className={styles.header__nav}>
                    <ul>
                        {headerItem.map((item) => (
                            <li className={styles.menu__item}>
                                <LinkRoute to={`/${item.url}`}>
                                    {item.title}
                                </LinkRoute>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
