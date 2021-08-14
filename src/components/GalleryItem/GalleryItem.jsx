// import { useState } from "react";


function GalleryItem({item}){
   console.log('Gallery item is', item)
    return(
        <>
        < img key={item.id} src={item.path} width="150" height="150"/>
        </>
    )
}
export default GalleryItem;
