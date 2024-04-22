"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = void 0;
const mongoose_1 = require("mongoose");
const Model = new mongoose_1.Schema({
    channel: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Channel',
        required: true,
    },
    from: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.MessageModel = (0, mongoose_1.model)('Message', Model);
