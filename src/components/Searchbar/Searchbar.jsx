import { Component } from "react";

export class Searchbar extends Component {
    state = {
        query:'',
        images: [],
        page:1
        }

    //   componentDidMount () {
    //     fetch('https://pixabay.com/api/?q=cat&page=1&key=38315175-abb8429954921ba34a6a526ed&image_type=photo&orientation=horizontal&per_page=12')
    //     .then(resp => resp.json()).then(cards => this.setState({ cards}))
    //   }
      // handleChange = ({target: {value}}) =>{
      //   this.setState({value})
      // }

      // HandleSubmit = (e) =>{
      //   e.preventDefault()
      //   console.log(this.state)
      // }
      componentDidUpdate(prevProps, prevState) { 
        if (prevState.query !== this.state.query || prevState.page !== this.state.page){
          
          fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=38315175-abb8429954921ba34a6a526ed&image_type=photo&orientation=horizontal&per_page=12`)
      .then(resp => resp.json()).then(({hits}) => this.setState({ images: hits}))     
        }
      } 

      handleSubmit = (e) =>{
        e.preventDefault()
        
        this.setState({
          query: e.target.elements.query.value,
          images: [],
          page:1
        })
        this.props.onSubmit({...this.state});
        console.log(this.state)
      }

    render() {
        return(
            <div>
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
                {/* {this.state.cards && <p>{console.log(this.state.cards.hits[0].largeImageURL)}</p>} */}
            </div>
        )
    }
}