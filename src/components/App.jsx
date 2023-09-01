import { Component } from "react"
import { ToastContainer, toast } from 'react-toastify';
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
        // if(this.state.page > 1){
        //   this.setState({ loader: true})

        //  return getImages(this.state.query, this.state.page).then(({hits}) => {this.setState(prev => ({images: [...prev.images, ...hits]}))}).finally(() => this.setState({loader: false}))
        // }

       
        if (prevState.query !== this.state.query || prevState.page !== this.state.page){
          this.setState({ loader: true})

          getImages(this.state.query, this.state.page)
          .then(({hits}) => this.setState({ images: hits}))
          .catch(error => this.setState({error}))
          .finally(() => this.setState({loader: false}))

          
      //     fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=38315175-abb8429954921ba34a6a526ed&image_type=photo&orientation=horizontal&per_page=12`)
      // .then(resp => resp.json()).then(({hits}) => this.setState({ images: hits}))     
        }
        // if(this.state.images.length === 0){
        //   return toast.error("Enter a valid request");
        //  }
      }
      
      // handleSearch = (query) => {
      //   this.setState({query})

      // }

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
      {this.state.images.length > 0 && <ImageGallery images={this.state.images}/>}      
      {this.state.images.length > 0 && <Button handleLoaderMore={this.handleLoaderMore}/>}
      {/* {this.state.images.length <= 0 && toast.error("Please, enter your query in the search bar :)")} */}
      <Modal/>
      <Modal/>
      <ToastContainer autoClose={3000}/>
      </AppStyled>
  )}
};

