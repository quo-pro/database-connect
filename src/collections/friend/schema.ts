import { IFriend, } from "@quo-pro/commons";
import { Schema, model } from "mongoose";

const Model = new Schema<IFriend>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    friend: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
  },
  { timestamps: true }
);

export const FriendModel = model("Friend", Model);
