import express from 'express'
import { getBooks, getBookById, addBook, updateBook, deleteBook, getBookByFilter } from '../controllers/bookController.js'
import { protect } from '../middlewares/authMiddleware.js'
import { validateBook } from '../middlewares/validateBookMiddleware.js'

const router = express.Router()
//getAllBooks, addBook
router.route('/').get(getBooks).post(validateBook, addBook)

//filteringbooks by Author and publishing year
router.route('/filter').get(getBookByFilter)

//getBookById, updateBook, deleteBook
router.route('/:id').get(getBookById).put(protect, updateBook).delete(protect, deleteBook)

export default router

