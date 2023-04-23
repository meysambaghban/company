import Image from "next/image";
import styles from '../styles/Header.module.css';
function Header() {
    return (
        <header className={styles.header}>

            <nav className={styles.navbarcontainer}>

                <ul className={styles.navlist}>
                    <li className={styles.navitem}>
                        <a href="#" className={styles.navlink}>خانه</a>
                    </li>
                    <li className={styles.navitem}>
                        <a href="#" className={styles.navlink}>پروژه ها</a>
                    </li>

                    <li className={styles.navitem}>
                        <a href="#" className={styles.navlink}>تماس با ما</a>
                    </li>
                    <li className={styles.navitem}>
                        <a href="#" className={styles.navlink}>محصولات</a>
                    </li>

                    <li className={styles.navitem}>
                        <a href="#" className={styles.navlink}>درباره ما</a>
                    </li>
                    <div className={styles.active}></div>
                    <Image className={styles.image}
                        src="/Ark.gif"
                        alt="sdsdsd"
                        width={100}
                        height={80}
                    />
                </ul>
            </nav>
        </header>
    );
}
export default Header;