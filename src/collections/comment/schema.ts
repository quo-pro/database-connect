import { IComment, } from "@quo-pro/commons";
import { Schema, model } from "mongoose";

const Model = new Schema<IComment>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    post: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Post'
    },
    content: {
      type: Schema.Types.String,
      required: true,
    },
  },
  { timestamps: true }
);

export const CommentModel = model("Comment", Model);
