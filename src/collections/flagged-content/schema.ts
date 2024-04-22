import { FLAG_REASONS, FLAG_STATUSES, IFlaggedContent } from '@quo-pro/commons';
import { Schema, model } from "mongoose";

const Model = new Schema<IFlaggedContent>({
  flaggedBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  post: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Post'
  },
  reason: {
    type: Schema.Types.String,
    required: true,
    enum: FLAG_REASONS
  },
  details: {
    type: Schema.Types.String,
  },
  status: {
    type: Schema.Types.String,
    required: true,
    enum: FLAG_STATUSES,
    default: 'PENDING'
  }
}, { timestamps: true });

export const FlaggedContentModel = model("FlaggedContent", Model);
