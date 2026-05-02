import mongoose, { Schema, Document } from "mongoose";

// Interface que define los tipos de los campos para mongosose
export interface IBook extends Document {
  title: string;
  imageBook: string;
  bookGenres: string;
  review: string;
  score: string;
  author: string;
}

const BookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  imageBook: {
    type: String,
    required: true,
  },
  bookGenres: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true, // 🐛 tenías "requiered" (typo)
  },
  score: {
    type: String,
    required: true, // 🐛 tenías "requiered" (typo)
  },
  author: {
    type: String,
    required: true, // 🐛 tenías "requiered" (typo)
  },
});

const Book = mongoose.model<IBook>("books", BookSchema);

export default Book;
