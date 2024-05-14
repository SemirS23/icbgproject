import React from 'react'
import styles from "./event.module.css";
import Image from "next/image";

const EventPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        

          <div className={styles.eventDesc}>
            <p>Bajram</p>
            <p>June __, 2024</p>
          </div>
        </div>
      </div>
  )
}

export default EventPage;