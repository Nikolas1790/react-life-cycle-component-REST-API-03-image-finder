import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import {  ImageGalleryUl } from "./ImageGallery.styled"
export const ImageGallery = ({images}) =>{
    return (
        <div>
            <ImageGalleryUl className="gallery">
                <ImageGalleryItem images={images}/>
  
            </ImageGalleryUl>
            
        </div>
    )
}