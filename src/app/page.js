import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/nav";
import Skills from "@/components/content-skils";
import Project from "@/components/card";
import Footer from "@/components/ficon";

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.box}>
        <div className={styles.introduction}>
          <h1>Hello, I&apos;m William</h1>
          <Image
            src="/mukaku.jpeg"
            width={75}
            height={75}
            alt="gambar muka"
            className={styles.roundimg}
          />
        </div>
        <h1 className={styles.description}>A web developer driven by passion for developing interactive and high-performing web applications. </h1>
        <div className={styles.down}>
          <Image
            src="/Scroll down.svg"
            width={50}
            height={50}
            alt="gambar panah kebawah"
          />
        </div>
        <Skills />
        <div className={styles.divider}></div>
        <Project />
      </main>
      <Footer />
    </div>
  );
}
