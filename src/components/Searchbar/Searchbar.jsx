import { SearchBarStyled, SearchFormBtn, SearchFormBtnLable, SearchFormInput, SearchFormStyled } from "components/App.styled";
import { Component } from "react";
import { toast } from "react-toastify"; 


export class Searchbar extends Component {
    state = {
        query:'',
        }
    
      handleChange = ({target: {value}}) =>{
        this.setState({query: value})
      }

      handleSubmit = (e) =>{
        e.preventDefault()    
        if(!this.state.query.trim()){
           return toast.error("Please, enter your query in the search bar :)");
        }
        this.props.onSubmit(this.state.query);
        this.setState({
          query: ''
        })

      }

    render() {
        return(
            <SearchBarStyled>
                <header className="searchbar">
                    <SearchFormStyled
                     className="form" 
                    onSubmit={this.handleSubmit}
                     >
                    <SearchFormBtn type="submit" className="button">
                    <SearchFormBtnLable className="button-label">Search</SearchFormBtnLable>
                    </SearchFormBtn>

                    <SearchFormInput
                        className="input"
                        type="text"
                        name="query"
                        // autocomplete="off"
                        // autofocus
                       placeholder="Search images and photos"
                       value={this.state.query}
                       onChange={this.handleChange}
                    />                    
                    </SearchFormStyled>
                </header>
                {/* {this.state.cards && <p>{console.log(this.state.cards.hits[0].largeImageURL)}</p>} */}
            </SearchBarStyled>
        )
    }
}