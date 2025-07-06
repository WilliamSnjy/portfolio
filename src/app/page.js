import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/nav";
import Skills from "@/components/content-skils";
import Project from "@/components/card";

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
      <footer className={styles.box}>
        <div className={styles.footer_box}>
          <h1>Thanks for visiting — I&apos;m glad you&apos;re here!</h1>
          <p>Feel free to get in touch — whether you&apos;re interested in collaborating, exploring new opportunities, or just want to say hello.</p>
        </div>
        <div className={styles.footer_icon}>
          <a target="blank" href="https://www.linkedin.com/in/william-sanjaya/">
            <div>
              <Image
                src="/linkedin.svg"
                width={50}
                height={50}
                alt="email"
              />
            </div>
          </a>
          <a target="blank" href="https://github.com/WilliamSnjy">
            <div>
              <Image
                src="/ggithub.svg"
                width={50}
                height={50}
                alt="github"
              />
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}
