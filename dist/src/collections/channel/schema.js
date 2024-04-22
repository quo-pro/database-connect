"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelModel = void 0;
const mongoose_1 = require("mongoose");
const Model = new mongoose_1.Schema({
    members: {
        type: [mongoose_1.Types.ObjectId],
        ref: 'User',
    },
}, { timestamps: true });
exports.ChannelModel = (0, mongoose_1.model)('Channel', Model);
