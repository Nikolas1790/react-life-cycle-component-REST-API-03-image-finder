export const ImageGalleryItem = ({images}) => {
    return (
        <div>
            {images.map(({id, webformatURL, largeImageURL, tags }) =>(
      <li className="gallery-item" key={id} >
                <img src={webformatURL} alt={tags} width="300"/>
            </li>))}
        </div>
    )
}

// ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
//             <li className="gallery-item">
//                 <img src="" alt="" />
//             </li>