import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
return (
  <div className={styles.container}>

    <div className={styles.textContainer}>
      <h1 className={styles.title}>Islamic Center of Bowling Green</h1>
      <p className={styles.desc}>Welcome to our community! This is placeholder information for testing purposes. Include basic 
        "founding" info about the mosque like when it was founded, how many nations/ethnicities are represented, etc...
      </p>
    

    <div className={styles.buttons}>
      <button className={styles.button}>Events</button>
      <button className={styles.button}>Contact</button>
    </div>
    </div>
    <div className={styles.imageContainer}>
     <Image src="/newMosque.png" alt="" fill className={styles.icbgImg}/>

    </div>

  </div>
  );
};

export default Home;