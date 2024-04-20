import { IBlockedUser, } from "@quo-pro/commons";
import { Schema, model } from "mongoose";

const Model = new Schema<IBlockedUser>(
  {
    blockedUser: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    blockedBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  { timestamps: true }
);

export const BlockedUserModel = model("BlockedUser", Model);
