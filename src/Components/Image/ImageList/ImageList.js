import styles from './ImageList.module.css'
import imgIcon3 from './imgIcon3.png'
import ImageForm from '../ImageForm/ImageForm'
import  goBack from './goBack.png'
import deleteIcon from './deleteIcon.png'
import editIcon from './editIcon.png'
import Carousel from '../../Carousel/Carousel'

import { useState ,useEffect} from 'react'
import { collection, getDocs ,onSnapshot ,doc , deleteDoc ,setDoc } from "firebase/firestore";
import { db } from '../../../firebase'

export default function ImageList(props){
    const [imageForm,setImageForm]=useState(false);  // render ImageForm component on the basis of true/false
    let {imageList,setImageList}=props  // go back to albumList component on the basis of imageList state variable

    let[allImages,setAllImages]=useState([]);  // contains all images present in selected album

    let {selectedAlbum}=props // selected album

    let[editImageId,setEditImageId]=useState({})  // if user clicks on edit button on image , then this variable is used to pass id of selected image

    let [carousel,setCarousel]=useState(false);  // display all images present in current album in carousel component
    useEffect(()=>{
        let fetchData=async()=>{
          const subscribe =await onSnapshot(collection(db,"images"), (querySnapshot) => {
                let data=[];
                querySnapshot.forEach((doc) => {
                  data.push(
                    {
                        id:doc.id,
                        albumName:doc.data().albumName,
                        title:doc.data().title,
                        url:doc.data().url
                    }
                );
              });
              
                    //  filtering imagres in data based on selected album
              data=data.filter((d)=>d.albumName===selectedAlbum);
              setAllImages(data)
            //   console.log(data)  
          });
        }
        fetchData();
      },[]);
 

         // function to delete image from album
    let handleDelete=async (id)=>{
        // console.log(id);
        await deleteDoc(doc(db, "images", id));
    }
   
        // function to edit image already present in album
    let handleEdit=async (object)=>{
        // console.log(object)
        
        setEditImageId(object)
        if(imageForm===false)
        setImageForm(!imageForm);  // render image form to show already present value
        
        // console.log(imageForm)
        // console.log(editImageId)
    }

        // function to handle Carousel 
        let [clickedImage,setClickedImage]=useState({})
        let handleCarousel=(image)=>{
            setClickedImage(image)
            setCarousel(true)
        }

    if(carousel)
        return <Carousel allImages={allImages} carousel={carousel} setCarousel={setCarousel} clickedImage={clickedImage} ></Carousel>

    return(
        <>
        {
            imageForm &&    <ImageForm imageForm={imageForm}
                                       setImageForm={setImageForm}
                                       selectedAlbum={selectedAlbum}
                                       setEditImageId={setEditImageId}
                                       editImageId={editImageId}
                            >
                            </ImageForm>
        }
        <div className={styles.main}>
            <div className={styles.goBack}>
                <img className={styles.goBackImg}
                 src={goBack}
                 alt='go-back-icon'
                 onClick={()=>setImageList(!imageList)}
                 />
            </div>
           <h2 className={styles.h2}>{allImages.length?`Images in ${selectedAlbum}`:`No images found in the  album`}</h2>

           { !imageForm && <button className={styles.addImageFormBtn} onClick={()=>setImageForm(!imageForm)} >Add Image</button>}
           <div className={styles.box}>

                {/* <div className={styles.imageBox}>
                    <img className={styles.img} src={imageIcon} alt='image'></img>
                    <p className={styles.p}>image</p>
                </div> */}

                {
                    allImages.map((image)=>(
                        <div className={styles.imageBox} key={image.id}>
                            <img className={styles.img}
                                 src={imgIcon3}
                                 alt='image'
                                 onClick={()=>handleCarousel(image)} // onclicking image show images in carousel component
                            />
                            
                            <p className={styles.p}> {image.title} </p>

                            <div className={styles.editBtn}>
                                <img src={editIcon}
                                     className={styles.edit_delete_img}
                                     alt='edit'
                                     onClick={()=>handleEdit(image)}
                                    />
                            </div>
 
                            <div className={styles.deleteBtn}>
                                <img src={deleteIcon}
                                     className={styles.edit_delete_img}
                                     alt='delete'
                                     onClick={()=>handleDelete(image.id)}
                                 />
                            </div>
                        </div>
                    ))
                }


                {/* <div className={styles.imageBox}>box</div>
                <div className={styles.imageBox}>box</div>
                <div className={styles.imageBox}>box</div>
                <div className={styles.imageBox}>box</div>
                <div className={styles.imageBox}>box</div>
                <div className={styles.imageBox}>box</div> */}
           </div>
        </div>
        </>
    )
}