import Image from "next/image";
import styles from "../app/page.module.css"
import data from "@/utils/data.json"

export default function Skills(){
    return (
        <article className={styles.description_article}>
          <h1>Skills and Specializations</h1>
          <p>
            I have a strong passion for developing innovative, scalable, and high-performance web applications. 
            With extensive experience in full-stack development, I focus on delivering dependable solutions through the use of modern 
            technologies and frameworks.
          </p>
          <div className={styles.description_outbox}>
            {data.datas.map((item, index) => (
              <div key={index} className={styles.description_box}>
                <Image
                  src={item.image}
                  width={30}
                  height={30}
                  alt="react icon"
                  className={styles.roundicon}
                />
                <p>{item.nama}</p>
              </div>
            ))}
          </div>
        </article>
    )
}