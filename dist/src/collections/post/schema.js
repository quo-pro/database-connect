"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const commons_1 = require("@quo-pro/commons");
const mongoose_1 = require("mongoose");
const Model = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    visibility: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        enum: commons_1.POST_VISIBILITY
    },
    media: [
        {
            type: mongoose_1.Schema.Types.String,
        }
    ],
}, { timestamps: true });
exports.PostModel = (0, mongoose_1.model)("Post", Model);
