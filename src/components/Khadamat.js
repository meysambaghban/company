import styles from '../styles/Khadamat.module.css'
function Khadamat () {
    return (
        <div className={styles.asli}>
            <div className={styles.subject}>
                <p>خدمات ما </p>
            </div>
            <div className={styles.container}>
                <div className={styles.item}>
                    <p className={styles.title}>دیجیتال برندینگ</p>
                    <p className={styles.tozih}>ارک وب تمام کارهای لازم اعم از طراحی لوگو،طراحی کارت ویزیت ،طراحی و ساخت وبسایت و طراحی وساخت اپلیکیشن کسب و کار شما را با مناسب ترین قیمت و بهترین کیفیت انجام می دهد</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.title}>ارایه خدمات احراز هویت</p>
                    <p className={styles.ehraz}>با استفاده از سیستم احراز هویت ارک وب شما میتوانید ورود کاربران را راحت نموده و از پیش آمد دیتای اضافی خودداری نمایید</p>
                </div>
            </div>
        </div>
    )
}
export default Khadamat