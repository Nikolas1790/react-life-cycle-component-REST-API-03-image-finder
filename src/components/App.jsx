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
        console.log(this.state.images)
      }

      componentDidUpdate(prevProps, prevState) { 
        if (prevState.query !== this.state.query || prevState.page !== this.state.page){
          // HTTP
          
          fetch('https://pixabay.com/api/?q=cat&page=1&key=38315175-abb8429954921ba34a6a526ed&image_type=photo&orientation=horizontal&per_page=12')
      .then(resp => resp.json()).then(cards => this.setState({ images: cards}))
     
        }
      } 

    handleLoaderMore = () => {
      console.log(this.state.images)
      this.setState(prevState => ({ page: prevState.page + 1}))
      console.log(this.state.page)
    }
  
  render(){
  return (
    <div>
      {/* <Searchbar/> */}
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
                {this.state.images.length > 0 && <div>GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</div>}
      {/* <Loader/> */}
      {/* <ImageGallery/> */}

      {this.state.images.length > 0 && <div>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>}



      {/* <Modal/> */}


      <div>
        <button type="button" className="button" onClick={this.handleLoaderMore}>Load more</button>
    </div>
      {/* <Button/> */}
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
