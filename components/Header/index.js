import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <React.Fragment>
      <div className={styles.logoWrapper}>
        <div className="container mx-auto">
          <Link href="/">
            <img
              className={styles.logo}
              src="../Logos/logo_palpitebox.png"
              alt="PalpiteBox"
            />
          </Link>
        </div>
      </div>
      <div className={styles.navWrapper}>
        <Link href="/about">
          <a className={styles.navButton}>About</a>
        </Link>
        <Link href="/contact">
          <a className={styles.navButton}>Contact</a>
        </Link>
        <Link href="/search">
          <a className={styles.navButton}>Search</a>
        </Link>
      </div>
    </React.Fragment>
  );
}
