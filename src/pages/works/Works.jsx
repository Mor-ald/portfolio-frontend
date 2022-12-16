import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

import styles from "./Works.module.scss";
import {myWorks} from "./MyWorks.js"
import {myProjects} from "./MyProjects.js";
import {myCourses} from "./MyCourses.js";
import Welcome from "../../components/welcome/Welcome.jsx";

function Works() {
    return (
        <>
            <Header/>
            <div className={styles.containerWorks}>
                <div className={styles.works}>
                    <Welcome firstText={"Мои"} secondText={"Выполненные работы"}/>
                    <div className={styles.container}>
                        <div>
                            <h2>Задания и отчеты:</h2>
                            <div className={styles.scroll}>
                                {myWorks.map((item) => (
                                    <a className={styles.worksLink} href={item.link}>{item.name}</a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2>Проекты:</h2>
                            <div className={styles.scroll}>
                                {myProjects.map(item => (
                                    <a className={styles.worksLink} href={item.link}>{item.name}</a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2>Курсы:</h2>
                            <div className={styles.scroll}>
                                {myCourses.map(item => (
                                    <a className={styles.worksLink} href={item.link}>{item.name}</a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Works;