// import { NavLink } from "react-router-dom";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <p>luansantos<strong>.co</strong></p>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/works">Works</Link>
            </li>
            <li>
              <Link href="/labs">Labs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

