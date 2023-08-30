import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { Loader } from "./Loader/Loader"
import { Modal } from "./Modal/Modal"

export class App extends Component {
  
  render(){
  return (
    <div>
      <Searchbar/>
      <Loader/>
      <ImageGallery/>
      {/* <Modal/> */}
      <Button/>
    </div>
  )}
};

// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}
