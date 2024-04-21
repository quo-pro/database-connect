import { INotification, NOTIFICATION_LIST, NOTIFICATION_STATUS_LIST, } from "@quo-pro/commons";
import { Schema, model } from "mongoose";

const Model = new Schema<INotification>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    sentBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    type: {
      type: Schema.Types.String,
      required: true,
      enum: NOTIFICATION_LIST
    },
    status: {
      type: Schema.Types.String,
      required: true,
      enum: NOTIFICATION_STATUS_LIST
    },
    ref: {
      type: Schema.Types.String,
      required: true,
    },
    message: {
      type: Schema.Types.String,
      required: true,
    },
  },
  { timestamps: true }
);

export const NotificationModel = model("Notification", Model);
