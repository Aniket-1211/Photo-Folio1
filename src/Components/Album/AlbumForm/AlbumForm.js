import styles from './AlbumForm.module.css';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../firebase';
import { useRef } from 'react';

import Notification from '../../Notification/Notification';

export default function AlbumForm(props){
    let {form,setForm}=props;
    let inputRef=useRef();
    // let {setAlbumList}=props // use setAlbumList to add new ablums

    let {notify,setNotify}=props;

    async function handleSubmit(e){
        e.preventDefault();

            // adding album to db
        const docRef = await addDoc(collection(db, "albums"), {
            name:inputRef.current.value ,
        });
        inputRef.current.value='';

            // rendering notification component as user creates album
        setNotify(!notify);
        console.log(notify);
        <Notification title={'Albumm created successfully'}></Notification>
        setForm(!form); // changing  form state 
        

    }
    return(
        // <div style={{width:'80vw' , height:'30vh' , backgroundColor:'green'}} >
        <div className={styles.main} >
            <h2 className={styles.h2}>Create an album</h2>
            <form className={styles.form} onSubmit={handleSubmit} >
                <input className={styles.input}
                    placeholder="Album Name" 
                    required
                    ref={inputRef}
                />
                <button className={styles.clear} type='reset' >Clear</button>
                <button className={styles.create} type='submit'>Create</button>
                
            </form>
            <button onClick={()=>setForm(!form)} className={styles.cancel}>Cancel</button>
        </div>
    )
}