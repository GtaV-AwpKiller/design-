import React from "react";

import styles from "./Header.module.scss";

export default function Header() {
    const headerItem = [{ title: "MAIN" }];

    return (
        <header className={styles.header} style={{ zIndex: 1 }}>
            <div className={styles.header__background}>
                <div
                    className={`main__wrapper ${styles.header__content_wrapper}`}
                >
                    <a id="#" href="/" className={styles.header_logo}>
                        LOGO
                    </a>
                    <ul className={styles.header__menu_nav}>
                        {headerItem.map((item) => (
                            <li className={styles.menu__item}>
                                <a href="#">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.header__theme}> theme </div>
                </div>
            </div>
        </header>
    );
}
