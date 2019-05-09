import React from "react";
import Results from "../components/Results";
import API from "../utils/API";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }

    componentWillMount() {
      //
    }

    render() {
        console.log(this.state.savedBooks);
        return(
            <main>
                <ResultsContainer savedBooks={this.state.savedBooks} path={this.props.match.path}/>
            </main>
        );
    }
}

export default Saved;