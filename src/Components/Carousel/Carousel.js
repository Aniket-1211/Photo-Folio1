import styles from './Carousel.module.css';
import moveLeftImage from './moveLeft.png'
import moveRightImage from './moveRight.png'
import cancelImage from './cancelImage.png'
import { useEffect, useState } from 'react';
export default function Carousel(props){
    let {allImages}=props;  // data of all images present in current album
    let {carousel,setCarousel}=props // use carousel to go back in imageList

    let [index,setIndex]=useState(0) // use to iterate over allImages array

    let {clickedImage}=props // object containing info of clicked Image
    useEffect(()=>{
            // setting index of clickedImage for initial view
            let newIndex=allImages.findIndex((obj)=>obj===clickedImage)
            setIndex(newIndex)
    },[])

    console.log(clickedImage)
       // function to view next image in album
    let moveRight=()=>{
        let newIndex=(index+1)%allImages.length;
        setIndex(newIndex);
        console.log(newIndex)
    }

       // function to view previous image in album
    let moveLeft=()=>{
        let newIndex=(index-1+allImages.length)%allImages.length;
        setIndex(newIndex);
        console.log(newIndex)
    }


    return(
        <div className={styles.main}>
            <img className={styles.cancelImage}  src={cancelImage} onClick={()=>setCarousel(!carousel)} alt='cancel'/>

            <img className={styles.moveLeft} src={moveLeftImage} onClick={()=>moveLeft()} alt='moveLeft'/>

            <img className={styles.img} src={allImages[index].url} alt='img'/>

            <img className={styles.moveRight} src={moveRightImage} onClick={()=>moveRight()} alt='moveRight'/>
            <p className={styles.name}>{allImages[index].title}</p>
        </div>
    )
}