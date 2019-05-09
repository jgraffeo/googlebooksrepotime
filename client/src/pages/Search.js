import React from "react";
import Searchbar from "../components/Searchbar";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //
    }

    handleSearchClick(event) {
        event.preventDefault();
        //
        API.searchBooks("Catcher in the Rye")

    }

    render() {
        return(
            <main>
              <button onClick={this.handleSearchClick}>Search</button>
            </main>
        );
    }
}

export default Search;