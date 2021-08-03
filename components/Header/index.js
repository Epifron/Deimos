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
        <Link href="/sobre">
          <a className={styles.navButton}>Sobre</a>
        </Link>
        <Link href="/contato">
          <a className={styles.navButton}>Contato</a>
        </Link>
        <Link href="/pesquisa">
          <a className={styles.navButton}>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  );
}
