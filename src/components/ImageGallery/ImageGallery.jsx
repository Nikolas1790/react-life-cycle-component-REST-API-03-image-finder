import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({images}) =>{
    return (
        <div>
            <ul className="gallery">
                <ImageGalleryItem images={images}/>
  
            </ul>
            
        </div>
    )
}