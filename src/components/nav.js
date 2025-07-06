import styles from "../app/page.module.css"

export default function Nav(){
    return (
        <main className={styles.profile}>
          <div>
            <ul className={styles.nav}>
              <li className={styles.navbox}>
                <div>
                  <p className={styles.navhead}>William Sanjaya</p>
                  <p className={styles.navcontent}>Web Developer</p>
                </div>
              </li>
              <li className={styles.navbox}>
                <div>
                  <p className={styles.navhead}>william.sanjaya50@gmail.com</p>
                  <p className={styles.navcontent}>Email Address</p>
                </div>
              </li>
              <li className={styles.navbox}>
                <div>
                  <p className={styles.navhead}>+6281383680980</p>
                  <p className={styles.navcontent}>Mobile</p>
                </div>
              </li>
              <li className={styles.navbox}>
                <div>
                  <p className={styles.navhead}>Indonesia</p>
                  <p className={styles.navcontent}>Current Location</p>
                </div>
              </li>
            </ul>
          </div>
        </main>
    )
}