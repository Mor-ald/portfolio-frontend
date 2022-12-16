import styles from "./Header.module.scss";

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header}></div>
            <div className={styles.backSvg}></div>
            <div className={styles.line}></div>

            <div className={styles.itemsContainer}>
                <div>
                    <a
                        className={styles.item}
                        href="https://yandex.ru/maps/geo/sankt_peterburg/53152804/?ll=30.324218%2C59.939985&z=12"
                        target={"_blank"}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.4929 3.71116 7.22703 4.97703C5.96116 6.2429 5.25 7.95979 5.25 9.75C5.25 12.519 7.4655 16.128 12 20.451C16.5345 16.128 18.75 12.519 18.75 9.75ZM12 22.5C6.4995 17.5005 3.75 13.2495 3.75 9.75C3.75 7.56196 4.61919 5.46354 6.16637 3.91637C7.71354 2.36919 9.81196 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.25 13.2495 17.5005 17.5005 12 22.5Z"
                                fill="#363636"
                            />
                            <path
                                d="M12 12C12.5967 12 13.169 11.7629 13.591 11.341C14.0129 10.919 14.25 10.3467 14.25 9.75C14.25 9.15326 14.0129 8.58097 13.591 8.15901C13.169 7.73705 12.5967 7.5 12 7.5C11.4033 7.5 10.831 7.73705 10.409 8.15901C9.98705 8.58097 9.75 9.15326 9.75 9.75C9.75 10.3467 9.98705 10.919 10.409 11.341C10.831 11.7629 11.4033 12 12 12ZM12 13.5C11.0054 13.5 10.0516 13.1049 9.34835 12.4017C8.64509 11.6984 8.25 10.7446 8.25 9.75C8.25 8.75544 8.64509 7.80161 9.34835 7.09835C10.0516 6.39509 11.0054 6 12 6C12.9946 6 13.9484 6.39509 14.6517 7.09835C15.3549 7.80161 15.75 8.75544 15.75 9.75C15.75 10.7446 15.3549 11.6984 14.6517 12.4017C13.9484 13.1049 12.9946 13.5 12 13.5Z"
                                fill="#363636"
                            />
                        </svg>
                        <span>Saint-Petersburg, Russia</span>
                    </a>
                </div>
                <div>
                    <a
                        className={styles.item}
                        href="https://abit.itmo.ru/program/15852"
                        target={"_blank"}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.25 16.4364L12 19.3895L6.75 16.4364V13.3163L5.25 12.483V17.3136L12 21.1105L18.75 17.3136V12.483L17.25 13.3163V16.4364Z"
                                fill="#363636"
                            />
                            <path
                                d="M12 2.15517L1.5 7.5996V8.89963L12 14.7328L21 9.73298V13.875H22.5V7.5996L12 2.15517ZM19.5 8.85037L18 9.68367L12 13.0172L6 9.68367L4.5 8.85037L3.46036 8.27278L12 3.84482L20.5396 8.27278L19.5 8.85037Z"
                                fill="#363636"
                            />
                        </svg>
                        <span>University ITMO</span>
                    </a>
                </div>
                <div>
                    <img
                        className={styles.photo}
                        src="/public/assets/photo.png"
                        alt={"Photo"}
                    />
                </div>
                <div>
                    <a
                        className={styles.item}
                        href="mailto:mor.ald@yandex.ru"
                        target={"_blank"}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM19.35 6L12 11.085L4.65 6H19.35ZM3 18V6.6825L11.5725 12.615C11.698 12.7021 11.8472 12.7488 12 12.7488C12.1528 12.7488 12.302 12.7021 12.4275 12.615L21 6.6825V18H3Z"
                                fill="#363636"
                            />
                        </svg>
                        <span>mor.ald@yandex.ru</span>
                    </a>
                </div>
                <div>
                    <a className={styles.item}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.5 3H4.5C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3Z"
                                stroke="#363636"
                                stroke-width="1.3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6.5 15.5V8.5H10.5M6.5 12H10.25M6.5 15.5H10.25M13 15.5V9.5M13 15.5V12.25C13 11.6533 13.2371 11.081 13.659 10.659C14.081 10.2371 14.6533 10 15.25 10C15.8467 10 16.419 10.2371 16.841 10.659C17.2629 11.081 17.5 11.6533 17.5 12.25V15.5"
                                stroke="#363636"
                                stroke-width="1.3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span>English - B2</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
