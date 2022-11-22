import styles from "./Footer.module.scss"

function Footer() {
    return (
        <div className={styles.footer}>
            <a href="https://vk.com/mor_ald" className={styles.vk}></a>
            <a href="https://t.me/Mor_Ald" className={styles.tel}></a>
            <a href="https://github.com/Mor-ald" className={styles.git}></a>
        </div>
    );
}

export default Footer;