import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";
import styles from "./Toggle.module.scss";
import { useState } from "react";

function ToggleNav() {
    const [toggleBar, setToggleBar] = useState(false);

    return (
        <>
            <div className={styles.toggle} onClick={() => setToggleBar(true)}>
                <i className={`pi pi-bars`} />
            </div>

            <Sidebar visible={toggleBar} onHide={() => setToggleBar(false)}>
                <div className={styles.verticalNav}>
                    <Link
                        to="/"
                        className={styles.link}
                        onClick={() => setToggleBar(false)}
                    >
                        <i
                            className={"pi pi-home"}
                            style={{ marginRight: "0.5rem" }}
                        />
                        Домашняя страница
                    </Link>
                    <Link
                        to="stack"
                        className={styles.link}
                        onClick={() => setToggleBar(false)}
                    >
                        <i
                            className={"pi pi-cog"}
                            style={{ marginRight: "0.5rem" }}
                        />
                        Стек технологий
                    </Link>
                    <Link
                        to="works"
                        className={styles.link}
                        onClick={() => setToggleBar(false)}
                    >
                        <i
                            className={"pi pi-book"}
                            style={{ marginRight: "0.5rem" }}
                        />
                        Выполненные работы
                    </Link>
                </div>

                <div className={styles.sidebarLinks}>
                    <a href="https://vk.com/mor_ald" className={styles.vk}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_25_4234)">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M29.3125 7.435C29.52 6.7525 29.3125 6.25 28.3188 6.25H25.0375C24.2025 6.25 23.8175 6.68375 23.6087 7.1625C23.6087 7.1625 21.94 11.1575 19.5763 13.7525C18.8113 14.505 18.4638 14.7437 18.0462 14.7437C17.8375 14.7437 17.5238 14.505 17.5238 13.8212V7.435C17.5238 6.615 17.2938 6.25 16.5988 6.25H11.4388C10.9175 6.25 10.6038 6.63 10.6038 6.99125C10.6038 7.7675 11.7863 7.9475 11.9075 10.1325V14.88C11.9075 15.9213 11.7162 16.11 11.2987 16.11C10.1862 16.11 7.48 12.0962 5.87375 7.50375C5.5625 6.61 5.2475 6.25 4.40875 6.25H1.125C0.1875 6.25 0 6.68375 0 7.1625C0 8.015 1.1125 12.25 5.18125 17.8512C7.89375 21.6763 11.7125 23.75 15.1912 23.75C17.2775 23.75 17.535 23.29 17.535 22.4963V19.605C17.535 18.6838 17.7325 18.5 18.3937 18.5C18.8813 18.5 19.715 18.74 21.6625 20.5837C23.8875 22.77 24.2538 23.75 25.5063 23.75H28.7875C29.725 23.75 30.195 23.29 29.925 22.38C29.6275 21.475 28.565 20.1613 27.1562 18.6025C26.3913 17.715 25.2437 16.7587 24.895 16.28C24.4088 15.6663 24.5475 15.3925 24.895 14.8462C24.895 14.8462 28.895 9.31375 29.3112 7.435H29.3125Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_25_4234">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                    <a href="https://t.me/Mor_Ald" className={styles.tel}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_25_4236)">
                                <path
                                    d="M27.5643 2.6615L0.985699 12.9638C-0.0838717 13.4436 -0.44563 14.4043 0.727183 14.9258L7.54574 17.1039L24.0321 6.86227C24.9323 6.21932 25.8539 6.39076 25.0609 7.09805L10.9013 19.9849L10.4565 25.4385C10.8685 26.2806 11.6228 26.2845 12.104 25.866L16.0214 22.1401L22.7307 27.1901C24.289 28.1174 25.1369 27.519 25.4722 25.8193L29.8729 4.87383C30.3298 2.78174 29.5506 1.85994 27.5643 2.6615Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_25_4236">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="https://github.com/Mor-ald" className={styles.git}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M25.0006 1C11.7476 1 1 12.017 1 25.6084C1 36.4808 7.87664 45.7052 17.4131 48.9588C18.6124 49.1867 19.053 48.4249 19.053 47.7748C19.053 47.1883 19.0305 45.2494 19.0203 43.1938C12.3428 44.682 10.9342 40.2902 10.9342 40.2902C9.84261 37.4455 8.26927 36.689 8.26927 36.689C6.09176 35.162 8.43287 35.1932 8.43287 35.1932C10.8434 35.3667 12.1126 37.7295 12.1126 37.7295C14.2529 41.4915 17.7273 40.4035 19.0965 39.7748C19.3125 38.1842 19.9342 37.0979 20.6207 36.4837C15.2898 35.8619 9.68578 33.7512 9.68578 24.322C9.68578 21.6353 10.6234 19.4403 12.1589 17.7166C11.9096 17.0965 11.0882 14.5932 12.3913 11.2037C12.3913 11.2037 14.4064 10.5432 18.9915 13.7273C20.9067 13.1819 22.9601 12.9083 24.9994 12.899C27.0393 12.9089 29.0938 13.1824 31.0118 13.7273C35.5925 10.5437 37.6053 11.2043 37.6053 11.2043C38.9118 14.5938 38.0904 17.0965 37.8411 17.7172C39.38 19.4397 40.3108 21.6353 40.3108 24.3226C40.3108 33.7738 34.6961 35.8549 29.3516 36.4634C30.2125 37.2269 30.9797 38.725 30.9797 41.0213C30.9797 44.3136 30.9526 46.9633 30.9526 47.7736C30.9526 48.4272 31.3847 49.1953 32.601 48.9536C42.1324 45.696 49 36.475 49 25.6061C49.0011 12.0175 38.2557 1 25.0006 1Z"
                                fill="white"
                            />
                            <path
                                d="M10.0908 36.3314C10.0372 36.454 9.84937 36.4905 9.679 36.4066C9.50412 36.3256 9.4071 36.1596 9.46351 36.0364C9.51428 35.9115 9.7027 35.8762 9.87701 35.9601C10.0519 36.0411 10.1512 36.2088 10.0914 36.3314H10.0908ZM11.0628 37.4443C10.9483 37.5524 10.7243 37.5021 10.572 37.3298C10.4152 37.158 10.3858 36.9283 10.5021 36.8184C10.6194 36.7097 10.8366 36.7606 10.9928 36.9324C11.1508 37.1059 11.1818 37.3332 11.0622 37.4437L11.0628 37.4443ZM12.0088 38.8602C11.8622 38.9655 11.6213 38.8672 11.4729 38.6479C11.3251 38.4299 11.3251 38.1679 11.4757 38.062C11.6247 37.9567 11.8616 38.0516 12.0116 38.2685C12.1594 38.4912 12.1594 38.7544 12.0088 38.8608V38.8602ZM13.3052 40.2299C13.1737 40.3785 12.8934 40.3386 12.6886 40.1356C12.4787 39.9372 12.4206 39.6555 12.5521 39.5069C12.6858 39.3582 12.9673 39.3999 13.1737 39.6012C13.3825 39.799 13.4456 40.0812 13.3052 40.2293V40.2299ZM15.0946 41.0246C15.0359 41.2178 14.7663 41.3052 14.4943 41.2236C14.2224 41.1392 14.0453 40.9136 14.0995 40.7192C14.1559 40.5249 14.4278 40.4341 14.7014 40.5214C14.9722 40.6047 15.1499 40.828 15.094 41.0246H15.0946ZM17.0577 41.1721C17.065 41.3746 16.8343 41.5435 16.5489 41.5469C16.2623 41.5539 16.0299 41.3896 16.0265 41.1895C16.0265 40.9847 16.2522 40.8181 16.5387 40.8135C16.8242 40.8077 17.0577 40.9708 17.0577 41.1721ZM18.8855 40.8534C18.9193 41.0512 18.7219 41.2548 18.4381 41.3086C18.1594 41.3618 17.9022 41.2392 17.8661 41.0426C17.8323 40.8401 18.0336 40.6377 18.3118 40.5845C18.5955 40.5336 18.8494 40.6527 18.8855 40.854V40.8534Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                </div>
            </Sidebar>
        </>
    );
}

export default ToggleNav;
