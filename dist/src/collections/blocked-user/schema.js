"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockedUserModel = void 0;
const mongoose_1 = require("mongoose");
const Model = new mongoose_1.Schema({
    blockedUser: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    blockedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, { timestamps: true });
exports.BlockedUserModel = (0, mongoose_1.model)("BlockedUser", Model);
