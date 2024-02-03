import { Component } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { Loader } from "./Loader/Loader"
import { getImages } from "services/getImages"
import { AppStyled } from "components/App.styled"

export class App extends Component {
  state = {
    query:'',
    images: [],
    page:1,

    loader: false,
    error: null,
    totalImg: null,    
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
      
    const fetchData = () => {
      this.setState({ loader: true });
      
      getImages(query, page)
      .then(({ hits, totalHits }) => {
        if (hits.length === 0) {
          toast.error('Not a valid request');
        } else {
          if (prevState.page !== page) {
            this.setState((prevState) => ({
            images: [...prevState.images, ...hits],
            totalImg: totalHits,
          }));
          } else {
            this.setState({
              images: hits,
              totalImg: totalHits,
            });
          }
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
      };
      
        if (query !== prevState.query || page !== prevState.page) {
          fetchData();
        }
      }
      
    handleLoaderMore = () => {
      this.setState(prevState => ({page: prevState.page + 1}))       
    }
    formSubmitHendle = data =>{      
      this.setState(() => ({query: data, page: 1, images: [] }))     
    }
  
  render(){
    const {images, loader, totalImg, error, page } = this.state
    return (
      <AppStyled>      
        <Searchbar onSubmit={this.formSubmitHendle}/>        
        {error && <p><b>Error. Try again later</b></p>}
        {loader && <Loader/>}            
        {images.length > 0 && <ImageGallery images={images}/>}      
        {images.length > 0 && page < Math.ceil(totalImg/12) && <Button handleLoaderMore={this.handleLoaderMore}/>}    
      
        <ToastContainer autoClose={3000}/>
      </AppStyled>
  )}
};

