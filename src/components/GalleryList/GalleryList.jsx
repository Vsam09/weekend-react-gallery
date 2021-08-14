import GalleryItem from '../GalleryItem/GalleryItem'
function GalleryList({galleryList}) {

    return(
        <>
        <div>
        {galleryList.map(item => < GalleryItem key={item.id} item={item} />)}
        </div>
        <div>
            <button>Like</button>
            <button>Like</button>
            
        </div>

        </>
    );
}
export default GalleryList;