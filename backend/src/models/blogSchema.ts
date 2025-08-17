import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  blog: string;
}

// Mongoose schema
const blogSchema: Schema<IBlog> = new Schema(
  {
    title: { type: String, required: true },
    blog: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IBlog>("Blog", blogSchema);
