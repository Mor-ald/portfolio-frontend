import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import {Card} from "primereact/card";
import styles from "./Home.module.scss"

function Home() {
    return (
        <>
            <Header/>
            <div>
                <div className={styles.home}>
                    <h3 className={styles.header_sm}>Привет, меня зовут</h3>
                    <h2 className={styles.header_lg}>Алексей</h2>
                    <hr className={styles.line}/>
                    <div className={styles.cardContainer}>
                        <Card className={styles.card}>
                            <h3 className={styles.header_pd}>Обо мне</h3>
                            <p>
                                Я <span className={styles.ptext}>Junior Front-end Developer</span> ,
                                более двух
                                лет я занимаюсь <span className={styles.ptext}>версткой</span> и
                                несколько месяцев
                                работаю <span className={styles.ptext}>React-разработчиком</span>.
                            </p>
                            <p>
                                Развиваюсь в области разработки
                                веб-приложений на языке <span className={styles.ptext}>JavaScript</span> и
                                экосистемы <span className={styles.ptext}>Node.js</span>. Веду научную
                                деятельность
                                в направлении проектирования и разработки
                                приложений на бессерверной архитектуре <span className={styles.ptext}>JAMstack</span>.
                            </p>
                            <p>
                                Из своих главных качеств могу выделить: <span className={styles.ptext}>уcидчивость,
                                терпение, ответсвенный подход к работе. </span>
                                Спокойно принимаю критику в свой адрес
                                    и всегда готов найти компромисс в конфликте.
                            </p>
                        </Card>
                        <Card className={styles.card}>
                            <h3 className={styles.header_pd}>Образование</h3>
                            <p className={styles.time}>
                                <img src="../../src/assets/akar-icons_calendar.svg" alt="" />
                                <span>Сентябрь 2016 - Январь 2020</span>
                            </p>
                            <p>
                                Техническая эксплуатация авиационных систем и
                                пилотажно-навигационных комплексов, ГУАП,
                                Санкт-Петербург. <span className={styles.ptext}>Средний балл 4,6.</span>
                            </p>
                            <p className={styles.time}>
                                <img src="../../src/assets/akar-icons_calendar.svg" alt="" />
                                <span>Сентябрь 2021 - Июль 2023</span>
                            </p>
                            <p>
                                Веб-Технологии (технологии front-end и back-end
                                разработки), ИТМО, Санкт-Петербург.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;