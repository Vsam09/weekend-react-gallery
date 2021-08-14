import { useState } from "react";


function GalleryItem({item}){
   console.log('Gallery item is', item)

   let [imgClick, setImgClick] = useState(false) 
   const onImgClick = (event) => {
       if (!imgClick) {
           setImgClick(true)
       }
       console.log('onImgClick', onImgClick)
   }
    return(
        <>
        {!imgClick ?
        <>
        < img onClick={onImgClick} key={item.id} src={item.path} text={item.description} width="150" height="150"/>
        </> :
        item.description}

        <button>Like</button>

        </>
    )
}
export default GalleryItem;
