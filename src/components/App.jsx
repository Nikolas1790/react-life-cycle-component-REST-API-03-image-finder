import { Component } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { Loader } from "./Loader/Loader"
import { Modal } from "./Modal/Modal"
import { getImages } from "services/getImages"
import { AppStyled } from "components/App.styled"
// import { ContentInfo } from "./ContentInfo/ContentInfo"

export class App extends Component {
  state = {
    query:'',
    images: [],
    page:1,

    loader: false,
    error: null
    }
      componentDidUpdate(prevProps, prevState) {         
       
        if (prevState.query !== this.state.query || prevState.page !== this.state.page){
          this.setState({ loader: true})

          getImages(this.state.query, this.state.page)
          .then(({hits}) => this.setState({ images: [...prevState.images, ...hits]}))
          .catch(error => this.setState({error}))
          .finally(() => this.setState({loader: false}))
         
        }
        if(this.state.query !== prevState.query ){
          this.setState({ loader: true})

          getImages(this.state.query, this.state.page)
         .then(({hits}) => this.setState({ images: hits}))
         .catch(error => this.setState({error}))
         .finally(() => this.setState({loader: false}));
         return;
        }
        // if(this.state.query && this.state.images.length === 0 ){
        //   console.log('fffffffffffffffffffffffffffffffffffffff')
        // }
        }     
      

    handleLoaderMore = () => {
       this.setState(prevState => ({page: prevState.page + 1}))     
    }

    formSubmitHendle = data =>{      
      this.setState(() => ({query: data }))
    }
  
  render(){
  return (
    <AppStyled>
      <Searchbar onSubmit={this.formSubmitHendle}/>  
      {/* <ContentInfo query={this.state.query}/>                     */}
      {this.state.error && <p>fdsffffffffffffff</p>}
      {this.state.loader && <Loader/>}      
      {/* {this.state.loader && this.state.images.length === 0 && toast.error("Please, enter your query in the search bar :)")}    */}
      {this.state.images.length > 0 && <ImageGallery images={this.state.images}/>}      
      {this.state.images.length > 0 && <Button handleLoaderMore={this.handleLoaderMore}/>}
      {/* {this.state.query && this.state.images.length <= 0 && toast.error("Please, enter your query in the search bar :)")} */}
      <Modal/>
      <Modal/>
      <ToastContainer autoClose={3000}/>
      </AppStyled>
  )}
};

