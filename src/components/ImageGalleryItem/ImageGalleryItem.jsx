import { Component } from "react"
import { ImageGalleryOne, ImageGalleryOneImg } from "./ImageGalleryItem.styled"
import { Modal } from "components/Modal/Modal";

export class ImageGalleryItem extends Component {
    state = {
        showModal: false
    };
      
    toggleModal = () => {        
      this.setState(({showModal}) => ({showModal: !showModal}))
    }

    render(){
      
      const { webformatURL, largeImageURL, tags } = this.props.img;
      return (
        <>            
          <ImageGalleryOne className="gallery-item" onClick={this.toggleModal} >
            <ImageGalleryOneImg src={webformatURL} alt={tags}/>
          </ImageGalleryOne>
          {this.state.showModal && <Modal onClose={this.toggleModal} alt={tags} largeImageURL={largeImageURL}/>}
        </>
      )
    }
}

