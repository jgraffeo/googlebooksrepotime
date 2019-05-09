var express = require('express')
var app = express()

//backend - when client calls this route, ORM needs to access Mongo
//pulls books from Google, push to Mongo

// Should return all saved books as JSON
app.get('/api/books', function (req, res) {
  //
})
  
// Used to save a new book to database
app.post('/api/books', function (req, res) {
  //var title = "";
  var author = "";
  var img = "";
  var url = "";

  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchedBook}&key=` + APIkey)
  .then(res => {
    for (i = 0; i < response.items.length; i++)
    {
      //get title of book
      title = $("<h3>" + response.items[i].volumeInfo.title + "</h3>");

      author = $("<h3>" + response.items[i].volumeInfo.authors + "</h3>");

      img = $("<img>" + response.items[i].volumeInfo.infoLinks + "/>");

      url = response.items[i].volumeInfo.imageLinks.thumbnail;

      img.attr("src", url);

      title.appendTo("#someclass");

      author.appendTo("#someclass");

      img.appendTo("#someclass");
    }
    console.log(res.data);
  });
})

// Used to delete a book from database by Mongo '_id'
app.delete('/api/books/:id', function (req, res) {

})
  
/* Load single HTML page in 'client/build/index.html'. 
Make sure you have this AFTER all other routes are defined.*/
app.get('*', function (req, res) {
  //
})