module.exports = {
  entry: [
    './app/index.html'
  ],
    output: {
    path: __dirname,
    publicPath: url:'https://bookappil.herokuapp.com',
    filename: 'bundle.js'
   
  //url: 'http://localhost:9000',
  books: {
    url: 'https://www.googleapis.com/books/v1/volumes?q='
  }
}
