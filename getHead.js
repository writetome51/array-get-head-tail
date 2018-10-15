"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAdjacentAt_1 = require("@writetome51/array-get-adjacent-at/getAdjacentAt");
function getHead(numItemsToGet, array) {
    return getAdjacentAt_1.getAdjacentAt(0, numItemsToGet, array);
}
exports.getHead = getHead;
