"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlaggedContentModel = void 0;
const commons_1 = require("@quo-pro/commons");
const mongoose_1 = require("mongoose");
const Model = new mongoose_1.Schema({
    flaggedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    post: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },
    reason: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        enum: commons_1.FLAG_REASONS
    },
    details: {
        type: mongoose_1.Schema.Types.String,
    },
    status: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        enum: commons_1.FLAG_STATUSES,
        default: 'PENDING'
    }
}, { timestamps: true });
exports.FlaggedContentModel = (0, mongoose_1.model)("FlaggedContent", Model);
