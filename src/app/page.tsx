import styles from "./page.module.css";

/* Images */
import firebase from "@/assets/firebase.svg";
import javascript from "@/assets/javascript.svg";
import react from "@/assets/react.svg";
import swift from "@/assets/swift.svg";
import swiftui from "@/assets/swiftui.svg";
import vue from "@/assets/vuejs.svg";
import Image from "next/image";

const skills = [
  {
    title: "Javascript",
    img: javascript,
    background: "#1a1a1a",
    color: "#797979",
  },
  {
    title: "React JS",
    img: react,
    background: "#1a1a1a",
    color: "#797979",
  },
  {
    title: "Vue JS",
    img: vue,
    background: "#1a1a1a",
    color: "#797979",
  },
  {
    title: "Swift",
    img: swift,
    background: "#1a1a1a",
    color: "#797979",
  },
  {
    title: "SwiftUI",
    img: swiftui,
    background: "#1a1a1a",
    color: "#797979",
  },
  {
    title: "Firebase",
    img: firebase,
    background: "#1a1a1a",
    color: "#797979",
  },
];

export default function HomePage() {
  return (
      <main className={styles.main}>
        <section className={`${styles.about} container animeSection`}>
          <h1 className={styles.title}>{"Hey, I'm Luan 👋"}</h1>
          <p className={styles.subtitle}>
            Front-end Developer with 7+ years of Web Development experience and
            <strong className={`${styles.strong}`}>iOS Developer.</strong>
          </p>
        </section>
        <section className={`${styles.skills} animeItem`}>
      <div className={`${styles.skills__content} container`}>
        <div className={styles.description}>
          <p>Skills</p>
          <span>
            Hard skills I got and main technologies used in my studies and
            works.
          </span>
        </div>

        <div className={styles.skills__images}>
          {skills.map((item, index) => (
            <div className={styles.tecnology} key={index}>
              <div style={{ background: item.background }}>
                <Image src={item.img} alt={item.title} />
                <h4 style={{ color: item.color }}>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.basic} animeLeft`}>
          <p>and also...</p>
          {/* <ul>
            <li>
              <ion-icon name="logo-html5"></ion-icon>
            </li>
            <li>
              <ion-icon name="logo-css3"></ion-icon>
            </li>
            <li>
              <ion-icon name="logo-github"></ion-icon>
            </li>
            <li>
              <ion-icon name="logo-wordpress"></ion-icon>
            </li>
            <li>
              <ion-icon name="logo-sass"></ion-icon>
            </li>
            <li>
              <ion-icon name="logo-figma"></ion-icon>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
      </main>
  );
}
