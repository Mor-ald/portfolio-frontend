
import styles from './Welcome.module.scss';

function Welcome(props) {
    return (
        <>
            <div className={styles.headers}>
                <h2 className={styles.header_lg}>
                    <span>{props.firstText}</span>
                    <br></br>
                    <span>{props.secondText}</span>
                </h2>
            </div>
        </>
    );
}

export default Welcome;