"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromHex = exports.toHex = void 0;
function toHex(n) {
    return "0x" + n.toString(16);
}
exports.toHex = toHex;
function fromHex(hexString) {
    return Number.parseInt(hexString, 16);
}
exports.fromHex = fromHex;
