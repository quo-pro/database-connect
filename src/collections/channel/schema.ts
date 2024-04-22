import { IChannel } from '@quo-pro/commons';
import { Schema, Types, model } from 'mongoose';

const Model: Schema<IChannel> = new Schema<IChannel>(
  {
    members: {
      type: [Types.ObjectId],
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const ChannelModel = model<IChannel>('Channel', Model);
