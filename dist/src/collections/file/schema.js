"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModel = void 0;
const mongoose_1 = require("mongoose");
const commons_1 = require("@quo-pro/commons");
const Model = new mongoose_1.Schema({
    visibility: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        enum: commons_1.FILE_VISIBILITY_ENUMS,
    },
    mimeType: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        enum: commons_1.FILE_MIME_ENUMS,
    },
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    description: {
        type: mongoose_1.Schema.Types.String,
    },
    size: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
    },
    uploadedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    URI: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    isDeletable: {
        type: mongoose_1.Schema.Types.Boolean,
    },
}, { timestamps: true });
exports.FileModel = (0, mongoose_1.model)('File', Model);
