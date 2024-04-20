"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendModel = void 0;
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
}, { timestamps: true });
exports.FriendModel = (0, mongoose_1.model)("Friend", Model);
