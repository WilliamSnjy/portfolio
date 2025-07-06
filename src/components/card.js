import Image from "next/image";
import styles from "../app/page.module.css";
import project from "@/utils/project.json";

export default function Project(){
    return (
        <article className={styles.description_article}>
          <h1>Projects</h1>
          <p>
            I take on different kinds of projects — whether it’s building my own products, helping clients, or just having fun with side experiments.
          </p>
          <div className={styles.project_box}>
            {project.projects.map((item, index) => (
              <div key={index} className={styles.cardbox}>
                <div  className={styles.card}>
                  <div className={styles.cardimg}>
                    <Image
                      src={item.image}
                      width={300}
                      height={150}
                      alt="gambar bakbek"
                      style={{ borderRadius: 5}}
                      className={styles.res_image}
                    />
                  </div>
                  <h1>{item.title}</h1>
                  <p>
                    {item.description}
                  </p>
                  <div className={styles.card_description}>
                    {item.build.map((tech, techIndex) => (
                      <div key={techIndex} className={styles.card_desc_box}>
                        <p>{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))} 
          </div>
        </article>
    )
}