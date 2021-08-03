import styles from "./styles.module.css";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido por:{" "}
        <a href="" className={styles.footerButton}>
          Nathan
        </a>{" "}
        /{" "}
        <a href="" className={styles.footerButton}>
          Linkedin
        </a>{" "}
        /{" "}
        <a href="" className={styles.footerButton}>
          Github
        </a>
        <div className="mt-4">
          <img className="inline" src="../Logos/logo_semana_fsm.png" />
          <img className="inline" src="../Logos/logo_devpleno.png" />
        </div>
      </div>
    </div>
  );
}
