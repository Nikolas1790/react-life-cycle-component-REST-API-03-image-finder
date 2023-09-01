import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import {  ImageGalleryUl } from "./ImageGallery.styled"

export const ImageGallery = ({images}) =>{
    return (
        <div>
            <ImageGalleryUl className="gallery">
                {images.map(img => {
                    return(                        
                        <ImageGalleryItem img={img} key={img.id}/> 
                    )
                })}               
  
            </ImageGalleryUl>
            
        </div>
    )
}