import { IMessage } from '@quo-pro/commons';
import { Schema, model } from 'mongoose';

const Model = new Schema<IMessage>(
  {
    channel: {
      type: Schema.Types.ObjectId,
      ref: 'Channel',
      required: true,
    },
    from: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    attachments: {
      type: [String],
    },
    message: {
      type: String,
    },
    transitions: [
      {
        note: String,
        status: String,
        prompt: String,
        date: Date,
      },
    ],
  },
  { timestamps: true }
);

export const MessageModel = model<IMessage>('Message', Model);
