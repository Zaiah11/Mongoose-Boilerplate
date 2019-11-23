var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to mongoDB!')
});

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number
});

exports.Books = mongoose.model('Books', bookSchema);