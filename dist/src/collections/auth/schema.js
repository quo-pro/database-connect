"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = void 0;
const mongoose_1 = require("mongoose");
const Model = new mongoose_1.Schema({
    UUID: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });
exports.AuthModel = (0, mongoose_1.model)("Auth", Model);
