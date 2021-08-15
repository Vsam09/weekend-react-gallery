import GalleryItem from '../GalleryItem/GalleryItem'
function GalleryList({galleryList, updateGalleryCount}) {

    return(
        <>
        <div>
        {galleryList.map(item => 
        < GalleryItem 
            key={item.id} 
            item={item} 
            updateGalleryCount={updateGalleryCount} />)}
        </div>
        </>
    );
}
export default GalleryList;