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
            <div>
                <div className={styles.works}>
                    <h3 className={styles.header_sm}>Мои</h3>
                    <h2 className={styles.header_lg}>Выполненные работы</h2>
                    <hr className={styles.line}/>
                    <div className={styles.container}>
                        <div>
                            <h2>Задания и отчеты</h2>
                            <ScrollPanel className={styles.scroll}>
                                {myWorks.map((item) => (
                                    <a className={styles.worksLink} href={item.link}>{item.name}</a>
                                ))}
                            </ScrollPanel>
                        </div>
                        <div>
                            <h2>Проекты</h2>
                            <ScrollPanel className={styles.scroll}>
                                {myProjects.map(item => (
                                    <a className={styles.worksLink} href={item.link}>{item.name}</a>
                                ))}
                            </ScrollPanel>
                        </div>
                        <div>
                            <h2>Курсы</h2>
                            <ScrollPanel className={styles.scroll}>
                                {myCourses.map(item => (
                                    <a className={styles.worksLink} href={item.link}>{item.name}</a>
                                ))}
                            </ScrollPanel>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Works;