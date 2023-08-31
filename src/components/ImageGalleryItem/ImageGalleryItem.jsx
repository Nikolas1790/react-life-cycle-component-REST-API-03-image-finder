import { ImageGalleryOne, ImageGalleryOneImg } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({images}) => {
    return (
        <>
            {images.map(({id, webformatURL, largeImageURL, tags }) =>(
      <ImageGalleryOne className="gallery-item" key={id} >
                <ImageGalleryOneImg src={webformatURL} alt={tags}/>
            </ImageGalleryOne>))}
        </>
    )
}

