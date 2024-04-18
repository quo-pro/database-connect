import { Schema, model } from 'mongoose';
import {
  IFile,
  FILE_VISIBILITY_ENUMS,
  FILE_MIME_ENUMS,
} from '@quo-pro/commons';

const Model = new Schema<IFile>(
  {
    visibility: {
      type: Schema.Types.String,
      required: true,
      enum: FILE_VISIBILITY_ENUMS,
    },
    mimeType: {
      type: Schema.Types.String,
      required: true,
      enum: FILE_MIME_ENUMS,
    },
    name: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
    },
    size: {
      type: Schema.Types.Number,
      required: true,
    },
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    URI: {
      type: Schema.Types.String,
      required: true,
    },
    isDeletable: {
      type: Schema.Types.Boolean,
    },
  },
  { timestamps: true }
);

export const FileModel = model<IFile>('File', Model);
