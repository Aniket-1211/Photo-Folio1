import { useEffect } from 'react'
import styles from './Notification.module.css'

export default function Notification(props){
    let {notify,setNotify}=props
    useEffect(()=>{
        setTimeout(()=>{
            setNotify({})
        },3000)
    },[])
    return (
        <div className={styles.main}>
            <h2 className={styles.h2}>{notify.info}</h2>
            <div className={styles.greenLine}></div>
        </div>
    )
}