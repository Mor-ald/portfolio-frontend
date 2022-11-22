import { ProgressSpinner } from 'primereact/progressspinner';
import styles from './Spinner.module.scss';

function Spinner() {
    return (
        <>
            <ProgressSpinner className={styles.spinner}/>
        </>
    );
}

export default Spinner;