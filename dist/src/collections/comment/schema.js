"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const mongoose_1 = require("mongoose");
const Model = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    post: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },
    content: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
}, { timestamps: true });
exports.CommentModel = (0, mongoose_1.model)("Comment", Model);
