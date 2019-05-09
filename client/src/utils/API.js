import axios from "axios";

//client making calls to  backend
//needs editing

const APIkey = "AIzaSyB4gMszDeJVDd58TPxOkX5EoAWfzvwPcZE";

export default { 
  // Gets all search results

  searchBooks: function(searchedBook) {
    // return axios.post("/search", {title : title});
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchedBook}&key=` + APIkey)
    .then(res => {
      console.log(res);
    })
  },

  //return saved books 
  getBooks: function() {
    return axios.get("/api/books");
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
