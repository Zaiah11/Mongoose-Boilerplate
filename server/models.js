const { Books } = require('./db')

exports.addBook = (book, cb) => {
  Books.create(book, (err, data) => {
    if (err) return cb(err)
    cb(null, data)
  })
}

exports.getAllBooks = (cb) => {
  Books.find({}, (err, data) => {
    if (err) return cb(err)
    cb(null, data)
  })
}