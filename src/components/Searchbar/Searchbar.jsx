import { Component } from "react";

export class Searchbar extends Component {
    state = {
      query:'',
      cards: null,
      page:1
      }
      componentDidMount () {
        fetch('https://pixabay.com/api/?q=cat&page=1&key=38315175-abb8429954921ba34a6a526ed&image_type=photo&orientation=horizontal&per_page=12')
        .then(resp => resp.json()).then(cards => this.setState({ cards}))
      }
      // handleChange = ({target: {value}}) =>{
      //   this.setState({value})
      // }

      // HandleSubmit = (e) =>{
      //   e.preventDefault()
      //   console.log(this.state)
      // }

    render() {
        return(
            <div>
                <header className="searchbar">
                    <form
                     className="form" 
                    //  onSubmit={this.HandleSubmit}
                     >
                    <button type="submit" className="button">
                    <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        // autocomplete="off"
                        // autofocus
                       placeholder="Search images and photos"
                      //  value={this.state.value}
                      //  onChange={this.handleChange}
                    />
                    </form>
                </header>
                {/* {this.state.cards && <p>{console.log(this.state.cards.hits[0].largeImageURL)}</p>} */}
            </div>
        )
    }
}