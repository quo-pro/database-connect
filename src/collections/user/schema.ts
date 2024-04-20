import { IUser, USER_ROLE_LIST, } from "@quo-pro/commons";
import { Schema, model } from "mongoose";

const Model = new Schema<IUser>(
  {
    email: {
      type: Schema.Types.String,
      required: false,
    },
    roles: {
      type: [Schema.Types.String],
      required: true,
      enum: USER_ROLE_LIST,
    },
    displayName: {
      type: Schema.Types.String,
      required: true,
    },
    profilePhoto: {
      type: Schema.Types.String,
    },
    emailVerified: {
      type: Schema.Types.Boolean,
      default: false,
    },
    isActive: {
      type: Schema.Types.Boolean,
      default: true,
    },
    eulaAccepted: {
      type: Schema.Types.Boolean,
      default: false,
    },
    followCount: {
      type: Schema.Types.Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const UserModel = model("User", Model);
