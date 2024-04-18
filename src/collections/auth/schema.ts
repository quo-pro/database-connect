import { Schema, model } from "mongoose";
import { IAuth, } from "@quo-pro/commons";

const Model = new Schema<IAuth>(
  {
    UUID: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const AuthModel = model("Auth", Model);
