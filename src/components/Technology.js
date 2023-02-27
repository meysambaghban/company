import Image from 'next/image'
import styles from '../styles/Technology.module.css'
function Technology () {
return (
    <div>
        <div className={styles.subject}>
            <p>تکنولوژی ها</p>
        </div>
        <div className={styles.container}>
            <div className={styles.item}>
            <Image className={styles.react}
            src="/React.png"
            alt="React"
            width={200}
            height={100}
            />
            <p className={styles.title}>React</p>
            <p className={styles.tozihat}>ری اکت یکی از کتابخانه های جاوا اسکریپت است که توسط شرکت متا معرفی شده است ارک وب یکی از پیشگامان این تکنولوژی در حوزه وب است</p>
            </div>
            <div className={styles.item}>
                <Image className={styles.node}
                src="/Node.png"
                alt="Node"
                width={200}
                height={100}
                />
                <p className={styles.title}>Node.js</p>
                <p className={styles.tozihatnode}> Node.js محدود به برنامه‌های تحت وب نبوده و می‌توان از آن در ساخت میکروکنترلر ها، Rest APIها، بسته‌های سیستم عامل، رباتیک و حتی در مراحل پیشرفته در ساخت برنامه برای هواپیمای بدون سرنشین نیز استفاده کرد.</p>
            </div>
            <div className={styles.item}>
                <Image className={styles.mongo}
                src="/Mongo.png"
                alt="Mongo"
                width={200}
                height={100}
                />
                <p className={styles.title}>Mongo DB</p>
                <p className={styles.tozihatmongo}>مونگو دیبی (Mongo DB) یکی از معروف‌ترین پایگاه داده‌های No SQL است که ساختار منعطفی دارد و بیشتر در پروژه هایی با حجم بالای داده استفاده می‌شود. این پایگاه داده پلتفرمی متن باز و رایگان است </p>
            </div>
            <div className={styles.item}>
                <Image className={styles.api}
                src="/Api.jfif"
                alt="Api"
                width={200}
                height={100}
                />
                <p className={styles.title}>Api</p>
                <p className={styles.tozihatapi}>ارک وب با استفاده از Api های بروز و کاربردی بهینه ترنی وب اپلیکیشن ها و خدمات را برای شما مشتریان عزیز اراِیه میدهد</p>
            </div>
        </div>
    </div>
)
}
export default Technology