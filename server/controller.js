const { addBook, getAllBooks } = require('./models')

exports.getAllBooks = (req, res) => {
  getAllBooks((err, data) => {
    if (err) return res.status(500).send('error storing book in db')
    res.status(200).send(data)
  })
}

exports.addBook = (req, res) => {
  addBook(req.body, (err, data) => {
    if (err) return res.status(500).send('error storing book in db')
    res.status(200).send(data)
  })
}