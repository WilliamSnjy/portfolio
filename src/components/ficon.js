import Image from "next/image";
import styles from "../app/page.module.css";

export default function Footer(){
    return (
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
                alt="linkedin"
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
          <a target="blank" href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=william.sanjaya50@gmail.com">
            <div>
              <Image
                src="/email.svg"
                width={50}
                height={50}
                alt="email"
              />
            </div>
          </a>
          <a target="blank" href="https://wa.me/+6281383680980">
            <div>
              <Image
                src="/whatsapp.svg"
                width={50}
                height={50}
                alt="whatsapp"
              />
            </div>
          </a>
        </div>
      </footer>
    )
}