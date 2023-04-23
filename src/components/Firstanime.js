import Image from "next/image";
import styles from "../styles/Firstanime.module.css";
function Firstanime() {
    return (
        <div className={styles.container}>
            <Image
            className={styles.banner}
                src="/first.jpg"
                alt="ArkWeb"
                width={500}
                height={500}
            />
            <div className={styles.matn}>
            <div className={styles.info}>
                <p>گسترش کسب وکار</p>
            </div>
            <div className={styles.tozihat}>
                <p>امروزه با ظهور فناوری های نوین کسب و کار به شکل سنتی رو به افول است با ارک وب همراه باشید تا به روز ترین شکل کسب وکار شمارا گسترش دهیم</p>
            </div>
        </div>
        </div>
    );
}
export default Firstanime;
