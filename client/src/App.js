import React, { Component } from "react";
import Results from "./components/Results";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Search from "./pages/Search"
import "./App.css";

class App extends Component {
  state = {

  };

  // Map over this.state.instruments and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Navbar className="my-class" theme="dark">
        </Navbar>
        <Searchbar></Searchbar>         
        <Results></Results>
        <Search/>
      </Wrapper>
    );
  }
}

export default App;