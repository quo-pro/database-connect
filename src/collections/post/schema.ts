import { IPost, POST_VISIBILITY, } from "@quo-pro/commons";
import { Schema, model } from "mongoose";

const Model = new Schema<IPost>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    content: {
      type: Schema.Types.String,
      required: true,
    },
    visibility: {
      type: Schema.Types.String,
      required: true,
      enum: POST_VISIBILITY
    },
    media: [
      {
        type: Schema.Types.String,
      }
    ],
    editorContent: [],
  },
  { timestamps: true }
);

export const PostModel = model("Post", Model);
