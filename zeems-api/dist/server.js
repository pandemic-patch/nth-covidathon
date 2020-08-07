"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = process.env.PORT || 8080;
//initializing the server//
const server = express_1.default();
// listening to the server //
server.listen(port, () => { console.log('Zeems API is online!!!!'); });
