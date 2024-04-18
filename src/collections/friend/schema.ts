import { FRIEND_STATUS_LIST, IFriend, } from "@quo-pro/commons";
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
    status: {
      type: Schema.Types.String,
      required: true,
      enum: FRIEND_STATUS_LIST
    },
  },
  { timestamps: true }
);

export const FriendModel = model("Friend", Model);
