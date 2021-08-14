import { useState } from "react";


function GalleryItem({item}){
   console.log('Gallery item is', item)

    let [imgClick, setImgClick] = useState(false);
    let [likeClick, setLikeClick] = useState(0);

    const onImgClick = () => {
       if (!imgClick) {
           setImgClick(true)
    }};
    const onLikeClick = () => {
        setLikeClick(likeClick + 1)
       };
    
    return(
        <>
        {!imgClick ?
        <>
        < img onClick={onImgClick} key={item.id} src={item.path} text={item.description} width="150" height="150"/>
        </> :
        item.description}
        <div>
            <p>{likeClick} People likes this photo</p>
        <button onClick={onLikeClick}>Like</button>
        </div>
        </>
    )
}
export default GalleryItem;
