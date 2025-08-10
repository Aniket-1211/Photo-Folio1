import { useEffect, useRef } from 'react';
import styles from './ImageForm.module.css'
import { collection, addDoc , doc, setDoc } from "firebase/firestore"; 
import { db } from '../../../firebase';


export default function ImageForm(props){

    let {selectedAlbum}=props // selected album name
    let {editImageId,setEditImageId}=props  // if user clicks on edit button of image then show values already present in form

    let {notify,setNotify}=props;  // used to render notification component if image is added , edited or deleted 

    let titleRef=useRef();  
    let urlRef=useRef();

    async function handleSumbitForm(e){
        e.preventDefault();
         
            // if user is editing already present image
        if(editImageId.id){
                await setDoc(doc(db, "images", editImageId.id), {
                    albumName:editImageId.albumName,
                    title: titleRef.current.value,
                    url: urlRef.current.value,
                });
                setEditImageId({});
                setImageForm(!imageForm);

                setNotify({info:'Imaged edited successfully !'}) // pass this info to notification component
                return 
        }

        const docRef = await addDoc(collection(db, "images"), {
            title: titleRef.current.value,
            url: urlRef.current.value,
            albumName:selectedAlbum

        });
        titleRef.current.value='';
        urlRef.current.value=''; 

        // close imageform tag after adding image
        setImageForm(!imageForm);

        setNotify({info:'Imaged added successfully !'})  // pass this info to notification component

    }

            //  useEffect used to show edit image title nd url already present in d     b ,
    useEffect(()=>{
        if(editImageId.id){
            // console.log(editImageId.id)
            titleRef.current.value=editImageId.title;
            urlRef.current.value=editImageId.url;

            // let updateImageData=async ()=>{
            //     await setDoc(doc(db, "images", editImageId.id), {
            //         albumName:editImageId.albumName,
            //         title: titleRef.current.value,
            //         url: urlRef.current.value,

            //     });
                // setEditImageId({});
                // setImageForm(!imageForm);
            // }
            // updateImageData();
        }
    })

     let handleCancel=()=>{
        setEditImageId({});
        console.log(titleRef.current.value)
        titleRef.current.value='';
        urlRef.current.value=''; 
        // console.log(editImageId)
        // console.log(titleRef.current.value)
        setImageForm(!imageForm)
    }


    let {imageForm,setImageForm}=props;
    return (
        <div className={styles.main}>
            <h2 className={styles.h2}>Add Image to {selectedAlbum}</h2>
            <form className={styles.form} onSubmit={handleSumbitForm} >

                <input  className={styles.input}
                        placeholder='Title'
                        ref={titleRef}
                        required
                />
                <input  className={styles.input}
                        placeholder='Image URL'
                        ref={urlRef}
                        required
                />

                <button className={styles.clear} type='reset'>Clear</button>
                <button className={styles.add} type='submit'>{editImageId.id?'UPDATE':'ADD'}</button>
                {/* <button className={styles.cancel} onClick={()=>setImageForm(!imageForm)}>Cancel</button> */}
                <button className={styles.cancel} onClick={()=>handleCancel()}>Cancel</button>
            </form>
        </div>
    )
}