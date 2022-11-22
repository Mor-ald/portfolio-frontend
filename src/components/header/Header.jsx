import styles from "./Header.module.scss";

function Header(){
    return (
        <div>
            <div className={styles.header}></div>
            <div className={styles.backSvg}></div>

            <div className={styles.itemsContainer}>
                <div>
                    <a className={styles.item} href="https://yandex.ru/maps/geo/sankt_peterburg/53152804/?ll=30.324218%2C59.939985&z=12" target={"_blank"}>
                        <div className={styles.iloc}></div>
                        <span>Saint-Petersburg, Russia</span>
                    </a>
                </div>
                <div>
                    <a className={styles.item} href="https://abit.itmo.ru/program/15852" target={"_blank"}>
                        <div className={styles.iedu}></div>
                        <span>University ITMO</span>
                    </a>
                </div>
                <div>
                    <img className={styles.photo} src={"../../../public/assets/photo.png"} alt={"Photo"}/>
                </div>
                <div>
                    <a className={styles.item} href="mailto:mor.ald@yandex.ru" target={"_blank"}>
                        <div className={styles.iemail}></div>
                        <span>mor.ald@yandex.ru</span>
                    </a>
                </div>
                <div>
                    <a className={styles.item}>
                        <div className={styles.ieng}></div>
                        <span>English - B2</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;