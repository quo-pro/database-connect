"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationModel = void 0;
const commons_1 = require("@quo-pro/commons");
const mongoose_1 = require("mongoose");
const Model = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    sentBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    type: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        enum: commons_1.NOTIFICATION_LIST
    },
    status: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        enum: commons_1.NOTIFICATION_STATUS_LIST
    },
    ref: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    message: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
}, { timestamps: true });
exports.NotificationModel = (0, mongoose_1.model)("Notification", Model);
