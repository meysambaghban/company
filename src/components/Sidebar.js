import styles from "../styles/Sidebar.module.css";

function Sidebar() {
    return (
        <div className={styles.side}>
            <a className={styles.close}>X</a>
            <a className={styles.buttons}>پروژه ها</a>
            <a className={styles.buttons}>درباره ما</a>
            <a className={styles.buttons}>ارتباط با ما</a>
        </div>

    );
}
export default Sidebar;