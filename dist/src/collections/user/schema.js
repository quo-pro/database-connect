"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const commons_1 = require("@quo-pro/commons");
const mongoose_1 = require("mongoose");
const Model = new mongoose_1.Schema({
    email: {
        type: mongoose_1.Schema.Types.String,
        required: false,
    },
    roles: {
        type: [mongoose_1.Schema.Types.String],
        required: true,
        enum: commons_1.USER_ROLE_LIST,
    },
    displayName: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    profilePhoto: {
        type: mongoose_1.Schema.Types.String,
    },
    emailVerified: {
        type: mongoose_1.Schema.Types.Boolean,
        default: false,
    },
    isActive: {
        type: mongoose_1.Schema.Types.Boolean,
        default: true,
    },
    eulaAccepted: {
        type: mongoose_1.Schema.Types.Boolean,
        default: false,
    },
    followCount: {
        type: mongoose_1.Schema.Types.Number,
        default: 0,
    },
}, { timestamps: true });
exports.UserModel = (0, mongoose_1.model)("User", Model);
