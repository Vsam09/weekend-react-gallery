import { useState } from "react";


function GalleryItem({item, updateGalleryCount}){
    //Props and States is posted up here!!
    let [imgClick, setImgClick] = useState(false);
    let [descriptionClick, setDescriptionClick] = useState(false);

    //Create Img onClick to toggle between image and description
    const onImgClick = () => {
       if (!imgClick) {
           setImgClick(true)
           setTimeout(() => {
            setImgClick(false);
           }, 5000)    
    }};
    
    return(
        <>
        <div>
           {!imgClick ? 
           <> 
           <img onClick={onImgClick} 
            className="outPut" 
            key={item.id} 
            src={item.path} />
           </> : item.description}
                <p> {item.likes} People likes this photo</p>
            <button onClick={( ) => updateGalleryCount(item.id)}>Like</button>
        </div>

        </>
    )
}
export default GalleryItem;
