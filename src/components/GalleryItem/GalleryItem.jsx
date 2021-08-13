import { useState } from "react";


function itemInGallery(){
    const [likesCount, setLikesCount] = useState(0);
    // const countBtn = () => {
    //     setLikesCount(likesCount + 1)
    //     console.log('Photo Like is on', likesCount)

    return(
        <>
        <img src ="images/lake.jpg" width="150" height="150"/>
            
            <div>
                <button>Like</button>
            </div>
            <p> {likesCount} People like this</p>
                <img src="images/sunset.jpg" width="150" height="150"/>
            <div>
                <button onClick={() => setLikesCount(likesCount + 1)}>Like</button>               
            </div>
            <p> {likesCount} People like this</p>

        </>
    )
}
export default itemInGallery;
