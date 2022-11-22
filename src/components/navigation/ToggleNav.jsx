import { Sidebar } from 'primereact/sidebar';
import { Link } from 'react-router-dom';
import styles from './Toggle.module.scss';
import {useState} from "react";

function ToggleNav() {
    const [toggleBar, setToggleBar] = useState(false);

    return (
        <>
            <nav className={ styles.topBar }>
                <div className={ styles.toggle } onClick={ () => setToggleBar(true) }>
                    <i className={ `pi pi-bars` }/>
                </div>
            </nav>

            <Sidebar visible={ toggleBar } onHide={ () => setToggleBar(false) }>
                <div className={ styles.verticalNav }>
                    <Link to="/" className={ styles.link } onClick={ () => setToggleBar(false) }>Домашняя страница</Link>
                    <Link to="stack" className={ styles.link } onClick={ () => setToggleBar(false) }>Стек технологий</Link>
                    <Link to="works" className={ styles.link } onClick={ () => setToggleBar(false) }>Выполненные работы</Link>
                </div>
            </Sidebar>
        </>
    );
}

export default ToggleNav;