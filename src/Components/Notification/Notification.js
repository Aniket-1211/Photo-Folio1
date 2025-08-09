import styles from './Notification.module.css'

export default function Notification(props){
    return (
        <div className={styles.main}>
            <h2 className={styles.h2}>rgdnetnt{props.title}</h2>
        </div>
    )
}