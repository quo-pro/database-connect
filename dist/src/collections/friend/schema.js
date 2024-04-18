"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendModel = void 0;
const commons_1 = require("@quo-pro/commons");
const mongoose_1 = require("mongoose");
const Model = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    friend: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    status: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        enum: commons_1.FRIEND_STATUS_LIST
    },
}, { timestamps: true });
exports.FriendModel = (0, mongoose_1.model)("Friend", Model);
