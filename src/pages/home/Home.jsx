import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import {Card} from "primereact/card";
import styles from "./Home.module.scss"
import Welcome from "../../components/welcome/Welcome.jsx";

function Home() {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.home}>
                    <Welcome firstText={"Привет, меня зовут"} secondText={"Алексей"}/>
                    <div className={styles.cardContainer}>
                        <Card className={styles.card}>
                            <h3 className={styles.header_pd}>Обо мне</h3>
                            <p>
                                Я <code className={styles.ptext}>Junior Front-end Developer,</code> более двух
                                лет я занимаюсь <code className={styles.ptext}>версткой</code> и
                                несколько месяцев
                                работаю <code className={styles.ptext}>React-разработчиком.</code>
                            </p>
                            <p>
                                Развиваюсь в области разработки
                                веб-приложений на языке <code className={styles.ptext}>JavaScript</code> и
                                экосистемы <code className={styles.ptext}>Node.js.</code> Веду научную
                                деятельность
                                в направлении проектирования и разработки
                                приложений на бессерверной архитектуре <code className={styles.ptext}>JAMstack.</code>
                            </p>
                            <p>
                                Из своих главных качеств могу выделить: <code className={styles.ptext}>усидчивость,
                                терпение, ответственный подход к работе. </code>
                                Спокойно принимаю критику в свой адрес
                                    и всегда готов найти компромисс в конфликте.
                            </p>
                        </Card>
                        <Card className={styles.card}>
                            <h3 className={styles.header_pd}>Образование</h3>
                            <p className={styles.time}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 4H6C3.79086 4 2 5.79086 2 8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V8C22 5.79086 20.2091 4 18 4Z" stroke="#ffa178" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 2V6M16 2V6M2 10H22" stroke="#ffa178" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>Сентябрь 2016 - Январь 2020</span>
                            </p>
                            <p className={styles.education}>
                                Техническая эксплуатация авиационных систем и
                                пилотажно-навигационных комплексов, ГУАП,
                                Санкт-Петербург. Средний балл 4,6.
                            </p>
                            <p className={styles.time}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 4H6C3.79086 4 2 5.79086 2 8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V8C22 5.79086 20.2091 4 18 4Z" stroke="#ffa178" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 2V6M16 2V6M2 10H22" stroke="#ffa178" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>Сентябрь 2021 - Июль 2023</span>
                            </p>
                            <p className={styles.education}>
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