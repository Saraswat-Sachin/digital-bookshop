import mongoose from "mongoose";
import dotenv from 'dotenv';

import users from './data/users.js';
import books from "./data/books.js";

import User from './models/userModel.js'
import Book from './models/bookModel.js'
import connectDB from "./config/db.js"

dotenv.config()
connectDB()

const importData = async()=>{
    try {
        await User.deleteMany() 
        await Book.deleteMany() 

        await User.insertMany(users)
        await Book.insertMany(books)
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const destroyData = async()=>{
    try {
        await User.deleteMany() 
        await Book.deleteMany() 

        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}