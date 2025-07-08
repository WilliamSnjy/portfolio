"use client";

import Image from "next/image";
import styles from "../app/page.module.css";
import project from "@/utils/project.json";
import { useState } from "react";

export default function Project(){
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  }

  const isAllLoaded = visibleCount >= project.projects.length;
   
    return (
        <article className={styles.description_article}>
          <h1>Projects</h1>
          <p>
            I take on different kinds of projects — whether it’s building my own products, helping clients, or just having fun with side experiments.
          </p>
          <div className={styles.project_box}>
            {project.projects.slice(0, visibleCount).map((item, index) => (
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
                  <div className={styles.card_link_box}>
                    {item.website && item.webtext && (
                      <a className={styles.card_link_hover} target="blank" href={item.weblink}>
                        <div className={styles.card_link}>
                          <div className={styles.card_link_img}>
                            <Image
                              src={item.website}
                              width={15}
                              height={15}
                              alt="gambar website"
                              style={{ borderRadius: 5}}
                            />
                            </div>
                            <div className={styles.card_link_desc}>
                              <p>{item.webtext}</p>
                            </div>
                        </div>
                      </a>
                    )}
                    {item.github && item.gittext && (
                      <a className={styles.card_link_hover} target="blank" href={item.gitlink}>
                        <div className={styles.card_link}>
                          <div className={styles.card_link_img}>
                            <Image
                              src={item.github}
                              width={15}
                              height={15}
                              alt="gambar github"
                              style={{ borderRadius: 5}}
                            />
                            </div>
                            <div className={styles.card_link_desc}>
                              <p>{item.gittext}</p>
                            </div>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!isAllLoaded && (
            <div className={styles.button_box}>
              <button className={styles.button_more} onClick={handleLoadMore}>More</button>
            </div>
          )}
        </article>
    )
}