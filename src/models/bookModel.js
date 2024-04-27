import mongoose from "mongoose";

const book = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      default: '-'
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    publicationYear: {
      type: Number,
      required: true,
      default: 1900,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", book);
export default Book;
