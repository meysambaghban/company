import styles from '../styles/Footer.module.css'
import Image from 'next/image'
function Footer () {
    return  (
        <div>
            <div className={styles.container}>
                <div className={styles.address}>
                    <p>آدرس : تبریز-چهارراه شریعتی به طرف هفده شهریور جنب بازار موبایل ارک طبقه دوم </p>
                </div>
            </div>
        </div>
    )
}
export default Footer