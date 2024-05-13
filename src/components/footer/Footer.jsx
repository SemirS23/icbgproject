import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>SKyTech</div>
            <div className={styles.logo}>SKyTech © All rights reserved.</div>
        </div>
    )
}

export default Footer