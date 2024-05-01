import React from 'react'
import styles from "./about.module.css";
import Image from 'next/image';


const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <div className={styles.imgContainer}>
      <Image src="/ICBG.jpg" alt="" fill/>
      </div>

      </div>
  )
}

export default AboutPage