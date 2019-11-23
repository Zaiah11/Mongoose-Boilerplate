const router = require('express').Router();
const controller = require('./controller')

router.get('/books', controller.getAllBooks)
router.post('/books', controller.addBook)

module.exports = router;