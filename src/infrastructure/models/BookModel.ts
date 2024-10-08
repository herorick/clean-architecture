import mongoose, { Schema, Document } from "mongoose";

interface IBook extends Document {
  id: string;
  title: string;
  author: string;
  publishedDate: Date;
}

const BookSchema: Schema<IBook> = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
});

const BookModel = mongoose.model<IBook>("Book", BookSchema);
export { BookModel, IBook };