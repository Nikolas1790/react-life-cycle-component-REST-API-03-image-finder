import { Component } from "react"
import { ModalOverlay, ModalWindow } from "./Modal.styled"

export class Modal extends Component {

componentDidMount() { 
     window.addEventListener('keydown', this.handleKeydown)
 }

    componentWillUnmount() { 
       window.removeEventListener('keydown', this.handleKeydown);
    } 

    handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
    }}
    handleBackdropClick = e =>{
        if (e.currentTarget === e.target) {
            this.props.onClose();
          }
    }
    
    render() {
        const { largeImageURL, alt } = this.props;
    return (       
            
            <ModalOverlay className="overlay" onClick={this.handleBackdropClick}>
            <ModalWindow className="modal">
                <img src={largeImageURL} alt={alt} />
            </ModalWindow>
            </ModalOverlay>
        
    )}
}