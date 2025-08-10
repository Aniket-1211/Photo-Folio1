import Navbar from "./Components/Navbar/Navbar";
import AlbumList from "./Components/Album/AlbumList/AlbumList";
import { collection, getDocs ,onSnapshot} from "firebase/firestore";
import Notification from "./Components/Notification/Notification";


import { db } from "./firebase";

import { useState,useEffect } from "react";
function App() {
  const[albumList,setAlbumList]=useState([]);  // albumList is used to store name of all albums in db

  useEffect(()=>{
    let fetchData=async()=>{
      // const querySnapshot = await getDocs(collection(db,"albums"));
      // console.log(querySnapshot)
      // const data=[];
      // querySnapshot.forEach((doc)=>data.push({id:doc.id,...doc.data()}))
      // console.log(data)
      // setAlbumList(data);


      const subscribe =await onSnapshot(collection(db,"albums"), (querySnapshot) => {
        const data=[];
          querySnapshot.forEach((doc) => {
              data.push({id:doc.id,name:doc.data().name});
          });
          
          setAlbumList(data);
      });
      // console.log(data)

    }
    fetchData();
    // console.log(albumList)
  },[]);
  
  return (
    <>
    <Navbar></Navbar>
    {/* <Notification notify={{info:'dlete'}}></Notification> */}
    {/* <Carousel></Carousel> */}
    <AlbumList albumList={albumList}></AlbumList>

    </>
  );
}

export default App;
