import styles from './Navbar.module.css'
import galleryIcon from './galleryIcon.png'
export default function Navbar(){
    return (
        <>
            <div className={styles.main}>
                <img className={styles.img} src={galleryIcon} alt='gallery-icon'/>
                <h2 className={styles.h2} >PhotoFolio</h2>
            </div>
        </>
    )
}