import { FRIEND_REQUEST_STATUS_LIST, IFriendRequest, } from "@quo-pro/commons";
import { Schema, model } from "mongoose";

const Model = new Schema<IFriendRequest>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    receiver: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    status: {
      type: Schema.Types.String,
      required: true,
      enum: FRIEND_REQUEST_STATUS_LIST
    },
  },
  { timestamps: true }
);

export const FriendRequestModel = model("FriendRequest", Model);
