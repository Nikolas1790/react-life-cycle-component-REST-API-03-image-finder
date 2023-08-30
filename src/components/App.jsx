import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { Loader } from "./Loader/Loader"
import { Modal } from "./Modal/Modal"

export class App extends Component {
  state = {
    query:'',
    images: [],
    page:1
    }

      handleSubmit = (e) =>{
        e.preventDefault()
        
        this.setState({
          query: e.target.elements.query.value,
          images: [],
          page:1
        })
        }

      componentDidUpdate(prevProps, prevState) { 
        if (prevState.query !== this.state.query || prevState.page !== this.state.page){
          
          fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=38315175-abb8429954921ba34a6a526ed&image_type=photo&orientation=horizontal&per_page=12`)
      .then(resp => resp.json()).then(({hits}) => this.setState({ images: hits}))     
        }
      } 

    handleLoaderMore = () => {
      console.log( this.state.images)
      this.setState(prevState => ({ page: prevState.page + 1}))
      console.log(this.state.page)
    }

    formSubmitHendle = data =>{
      console.log(data)
      this.setState(prev => ({images: [...prev.images, data] }))
    }
  
  render(){
  return (
    <div>
      <Searchbar onSubmit={this.formSubmitHendle}/>
      <header className="searchbar">
                    <form
                     className="form" 
                    onSubmit={this.handleSubmit}
                     >
                    <button type="submit" className="button">
                    <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        name="query"
                        // autocomplete="off"
                        // autofocus
                       placeholder="Search images and photos"
                      //  value={this.state.query}
                      //  onChange={this.handleChange}
                    />
                    
                    </form>
                </header>
                
      {/* <Loader/> */}
      <ImageGallery images={this.state.images}/>
       
      {/* <Modal/> */}
      {this.state.images.length > 0 && <div>GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</div>}

      <Button handleLoaderMore={this.handleLoaderMore}/>
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
