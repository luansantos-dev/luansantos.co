import styles from "./footer.module.css";

const Footer = () => {
  const newYear = new Date();

  return (
    <footer className={`${styles.footer}`} aria-label="Rodapé do site">
      <div className={`${styles.container} container`}>
        <p>Luan Santos - {newYear.getFullYear()}</p>
        <ul className={styles.social}>
          <li>
            <a
              href="mailto:luansantos.dev@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <ion-icon name="mail"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="http://api.whatsapp.com/send?1=pt_BR&phone=5583996579944"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luansantos-dev"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/devluansantos/"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
