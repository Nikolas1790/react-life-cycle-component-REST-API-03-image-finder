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

        // if(this.state.query === ''){
        //   return this.setState({ images: []});
        // }       
        // const parts = this.state.query.split('/'); 
        // const dataPart = parts[1];
        // console.log(parts[1])
        // console.log(prevState.query)
        // if(prevState.query === parts[1]){
        //   this.setState({ loader: true, images: [] })
        //   console.log('gggggggggggggggggggggggggggggggggggg')

        //   getImages(this.state.query, this.state.page)
        //  .then(({hits}) => this.setState({ images: hits}))
        //  .catch(error => this.setState({error}))
        //  .finally(() => this.setState({loader: false}));
        //  return;
        // }
        if(this.state.query !== prevState.query ){
          this.setState({ loader: true})
          
          getImages(this.state.query, this.state.page)
         .then(({hits, totalHits}) => {
          
          if(hits.length === 0){
            return toast.error('Not a valid request');
          }
          this.setState({ images: hits, totalImg: totalHits})})
         .catch(error => this.setState({error}))
         .finally(() => this.setState({loader: false}));
         return;
        }


        if (prevState.query !== this.state.query || prevState.page !== this.state.page){
          this.setState({ loader: true})

          getImages(this.state.query, this.state.page)
          .then(({hits}) => {
            
            this.setState({ images: [...prevState.images, ...hits]})})
          .catch(error => this.setState({error}))
          .finally(() => this.setState({loader: false}))
                   
        }
       
       
        // if (prevState.query !== this.state.query || prevState.page !== this.state.page){
        //   this.setState({ loader: true})

        //   getImages(this.state.query, this.state.page)
        //   .then(({hits}) => this.setState({ images: hits}))
        //   .catch(error => this.setState({error}))
        //   .finally(() => this.setState({loader: false}))
        //   return;
         
        // }
        // if(this.state.query !== prevState.query ){
        //   this.setState({ loader: true})

        //   getImages(this.state.query, this.state.page)
        //  .then(({hits}) => this.setState({ images: hits}))
        //  .catch(error => this.setState({error}))
        //  .finally(() => this.setState({loader: false}));
        //  return;
        // }
        // if(this.state.query && this.state.images.length === 0 ){
        //   console.log('fffffffffffffffffffffffffffffffffffffff')
        // }
        }     
      

    handleLoaderMore = () => {
      this.setState(prevState => ({page: prevState.page + 1})) 
      //  this.setState(prevState => ({page: prevState.page + 1, images:[...prevState.images, ...this.state.images]}))     
    }

    formSubmitHendle = data =>{      
      this.setState(() => ({query: data, page: 1, images: [] }))
      // this.setState(() => ({query: `${Date.now()}/${data}` }))
    }
  
  render(){
  return (
    <AppStyled>
      
      <Searchbar onSubmit={this.formSubmitHendle}/>        
      {this.state.error && <p><b>Error. Try again later</b></p>}
      {this.state.loader && <Loader/>}            
      {this.state.images.length > 0 && <ImageGallery images={this.state.images}/>}      
      {this.state.images.length > 0 && this.state.page < Math.ceil(this.state.totalImg/12) && <Button handleLoaderMore={this.handleLoaderMore}/>}    
      
      <ToastContainer autoClose={3000}/>
      </AppStyled>
  )}
};

