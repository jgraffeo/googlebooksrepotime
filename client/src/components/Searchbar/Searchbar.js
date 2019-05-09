import React from "react";
import "./Searchbar.css";

const Searchbar = props => (

            <div className="searchbar">
                <div class="input-group md-form form-sm form-1 pl-0">
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Book Info" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search for Books</button>
                    </form>
                </nav>
                </div>  
            </div>
  );

export default Searchbar;
