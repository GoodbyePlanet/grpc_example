"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnumKey = void 0;
function getEnumKey(map, value) {
    return Object.keys(map).find(function (key) { return map[key] === value; });
}
exports.getEnumKey = getEnumKey;
