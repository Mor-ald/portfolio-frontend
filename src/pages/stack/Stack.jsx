import Header from "../../components/header/Header.jsx";
import styles from "./Stack.module.scss"
import Footer from "../../components/footer/Footer.jsx";
import {stacklevel} from "./stacklevel.js";
function Stack() {

    const myLevel = (item) => {
        const level = Number(item.level);
        return (
            <>
                {level >= 1 ? <span style={{background: item.color}}></span>:<span style={{background: "#ffffff"}}></span>}
                {level >= 2 ? <span style={{background: item.color}}></span>:<span style={{background: "#ffffff"}}></span>}
                {level >= 3 ? <span style={{background: item.color}}></span>:<span style={{background: "#ffffff"}}></span>}
                {level >= 4 ? <span style={{background: item.color}}></span>:<span style={{background: "#ffffff"}}></span>}
                {level === 5 ? <span style={{background: item.color}}></span>:<span style={{background: "#ffffff"}}></span>}
            </>
        );
    }
    return (
        <>
            <Header/>
            <div className={styles.containerStack}>
                <div className={styles.stack}>
                    <div className={styles.headers}>
                        <h2 className={styles.header_lg}>Мой cтек технологий</h2>
                    </div>
                    <div className={styles.container}>
                        {stacklevel.map((item) => (
                            <div className={styles.techCard}>
                                <div className={styles.techImg}>
                                    <img src={item.link} alt={"tech"}/>
                                </div>
                                <div className={styles.techName}>
                                    <span>{item.name}</span>
                                    <div className={styles.techLvl}>
                                        {myLevel(item)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Stack;