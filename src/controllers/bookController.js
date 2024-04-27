import asyncHandler from '../middlewares/asyncHandler.js'
import Book from '../models/bookModel.js'


// @desc get all books
// @route GET /api/books/
// @access public
const getBooks = asyncHandler(async(req, res)=>{
    const books = await Book.find()
    res.json(books)
})

// @desc get book with id
// @route GET /api/books/:id
// @access public
const getBookById = asyncHandler(async(req, res)=>{
    const book = await Book.findById(req.params.id)
    if (book) {
        res.json(book)
    } else {
        res.status(404)
        throw new Error('Resource not found.')
    }
})

const getBookByFilter = asyncHandler(async(req, res)=>{
    console.log("first")
    const {author, publicationYear} = req.query;
    let query = {}
    if (author) {
        query.author = author
    }
    if (publicationYear) {
        query.publicationYear = publicationYear
    }
    const books = await Book.find(query)
    if (books) {
        res.json(books)
    } else {
        res.status(404)
        throw new Error('Resource not found.')
    }
})

// @desc add book
// @route POST /api/books/
// @access private
const addBook = asyncHandler(async(req, res)=>{
    const {title} = req.body
    const exists = await Book.findOne({title})
    if (exists) {
        res.status(400)
        throw Error('Book with same name already exists.')
    }
    const book = await Book.create(req.body)
    if (book) {
        res.status(201).json(book)
    } else {
        res.status(500)
        throw new Error('Unable to save.')
    }
})

// @desc update book
// @route PUT /api/books/:id
// @access private
const updateBook = asyncHandler(async(req, res)=>{
    const _id = req.params.id
    const {title} = req.body
    const exists = await Book.findOne({_id})
    const sameTitleExist = await Book.findOne({title})
    if (!exists) {
        res.status(400)
        throw Error('Invalid book id.')
    }
    if (sameTitleExist) {
        res.status(400)
        throw Error('Book with same title already exist.')
    }
    const book = await Book.findByIdAndUpdate(_id, req.body, {new: true})

    if (book) {
        res.status(202).json(book)
    }
    else{
        res.status(400)
        throw Error('Invalid data.')
    }
})

// @desc delete book
// @route PUT /api/books/:id
// @access private
const deleteBook = asyncHandler(async(req, res)=>{
    const id = req.params.id

    const book = await Book.findByIdAndDelete(id)

    if (book) {
        res.status(202).json(book)
    }
    else{
        res.status(400)
        throw Error('Book not found.')
    }
})

export {getBooks, getBookById, getBookByFilter, addBook, updateBook, deleteBook}