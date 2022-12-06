import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { ScrollPanel } from 'primereact/scrollpanel';
import styles from "./Works.module.scss";
import {myWorks} from "./MyWorks.js"
import {myProjects} from "./MyProjects.js";
import {myCourses} from "./MyCourses.js";

function Works() {
    return (
        <>
            <Header/>
            <div className={styles.containerWorks}>
                <div className={styles.works}>
                    <div className={styles.headers}>
                        <h2 className={styles.header_lg}>Мои работы</h2>
                    </div>
                    <div className={styles.container}>
                        <div>
                            <h2>Задания и отчеты</h2>
                            <div className={styles.scroll}>
                                {myWorks.map((item) => (
                                    <a className={styles.worksLink} href={item.link}>{item.name}</a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2>Проекты</h2>
                            <div className={styles.scroll}>
                                {myProjects.map(item => (
                                    <a className={styles.worksLink} href={item.link}>{item.name}</a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2>Курсы</h2>
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