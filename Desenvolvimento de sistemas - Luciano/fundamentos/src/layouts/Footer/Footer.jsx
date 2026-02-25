import styles from "./Footer.module.css";

export const Footer = ({ name }) => {
  return (
    <div>
      <footer className={styles.footer}>
        <h1 className={styles.name}>Desenvolvido por {name}</h1>
      </footer>
    </div>
  );
};
