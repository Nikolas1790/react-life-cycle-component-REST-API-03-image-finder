import { Component } from "react";

export class Searchbar extends Component {
    state = {
        query:'',
        }
    
      handleChange = ({target: {value}}) =>{
        this.setState({query: value})
      }

      handleSubmit = (e) =>{
        e.preventDefault()            
        this.props.onSubmit(this.state.query);
        // this.setState({query: ''})

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
                       value={this.state.query}
                       onChange={this.handleChange}
                    />                    
                    </form>
                </header>
                {/* {this.state.cards && <p>{console.log(this.state.cards.hits[0].largeImageURL)}</p>} */}
            </div>
        )
    }
}