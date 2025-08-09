// import styles from './AlbumList.module.css';
// import albumIcon from './albumIcon.png'
// import AlbumForm from '../AlbumForm/AlbumForm';
// import ImageList from '../../Image/ImageList/ImageList';
// import {  useState } from 'react';
// export default function AlbumList(props){

//     const [form,setForm]=useState(false);  // setForm to render album form component on the basis of true/false
//     const [imageList,setImageList]=useState(false) /// setImageList to render imageList component on the basis of selected album

//     const [selectedAlbum,setSelectedAlbum]=useState('')   // stores album name on which user click , it will be used to render all the 
//                                                           //   all the images inside it 

//     let {albumList ,setAlbumList}=props  // render all albums in albumList


//     if(form)     // passing form and setForm to render ALbum list
//         return <AlbumForm form={form} setForm={setForm} albumList={albumList} setAlbumList={setAlbumList}></AlbumForm>
//     if(imageList)
//         return <ImageList imageList={imageList} setImageList={setImageList}  selectedAlbum={selectedAlbum}></ImageList>
//     return (
//         <>
 
//         {/* <AlbumForm></AlbumForm> */}
//         <div className={styles.main}>
//             {/* {
//                 form?<AlbumForm></AlbumForm>:null
//             } */}

//             <h2 className={styles.h2}>Your albums</h2>
//             <button onClick={()=>setForm(!form)} className={styles.addAlbum}>Add album</button>

//             <div className={styles.albumsBox}>

//                 {/* <div className={styles.box} onClick={()=>setImageList(!imageList)} >
//                     <img className={styles.img} src={albumIcon} alt='Album Icon' />
//                     <h4 className={styles.h4}>Aniket</h4>
//                 </div> */}
               
//                {
//                 albumList.map((album)=>(
//                     <div className={styles.box}
//                          key={album.id}
//                          onClick={()=>{
//                             setImageList(!imageList);
//                             setSelectedAlbum(album.name)
//                             // console.log(album.name)
//                          }}
//                      >
//                         <img className={styles.img} src={albumIcon} alt='Album Icon' />
//                         <h4 className={styles.h4}>{album.name}</h4>
//                     </div>
//                 ))
//                } 
                

                

//              </div>
//         </div>
//         </>
//     )
// }










import styles from './AlbumList.module.css';
import albumIcon from './albumIcon.png'
import AlbumForm from '../AlbumForm/AlbumForm';
import ImageList from '../../Image/ImageList/ImageList';
import {  useState } from 'react';
export default function AlbumList(props){

    const [form,setForm]=useState(false);  // setForm to render album form component on the basis of true/false
    const [imageList,setImageList]=useState(false) /// setImageList to render imageList component on the basis of selected album

    const [selectedAlbum,setSelectedAlbum]=useState('')   // stores album name on which user click , it will be used to render all the 
                                                          //   all the images inside it 

    let {albumList ,setAlbumList}=props  // render all albums in albumList

    let [notify,setNotify]=useState(false);  // used to render notification component when user creartes album, add image or delete image


    // if(form)     // passing form and setForm to render ALbum list
        // return <AlbumForm form={form} setForm={setForm} albumList={albumList} setAlbumList={setAlbumList}></AlbumForm>
    if(imageList)
        return <ImageList imageList={imageList} setImageList={setImageList}  selectedAlbum={selectedAlbum}></ImageList>
    return (
        <>
 
        {/* <AlbumForm></AlbumForm> */}
        {form && <AlbumForm form={form} setForm={setForm} albumList={albumList} setAlbumList={setAlbumList} notify={notify} setNotify={setNotify}></AlbumForm>}
        <div className={styles.main}>
            {/* {
                form?<AlbumForm></AlbumForm>:null
            } */}

            <h2 className={styles.h2}>Your albums</h2>
            { !form && <button onClick={()=>setForm(!form)} className={styles.addAlbum}>Add album</button>}

            <div className={styles.albumsBox}>

                {/* <div className={styles.box} onClick={()=>setImageList(!imageList)} >
                    <img className={styles.img} src={albumIcon} alt='Album Icon' />
                    <h4 className={styles.h4}>Aniket</h4>
                </div> */}
               
               {
                albumList.map((album)=>(
                    <div className={styles.box}
                         key={album.id}
                         onClick={()=>{
                            setImageList(!imageList);
                            setSelectedAlbum(album.name)
                            // console.log(album.name)
                         }}
                     >
                        <img className={styles.img} src={albumIcon} alt='Album Icon' />
                        <h4 className={styles.h4}>{album.name}</h4>
                    </div>
                ))
               } 
                

                

             </div>
        </div>
        </>
    )
}