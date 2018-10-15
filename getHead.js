"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAdjacentAt_1 = require("@writetome51/array-get-adjacent-at/getAdjacentAt");
function getHead(numItemsToGet, array) {
    if (numItemsToGet < 1)
        throw new Error("The number of items to get cannot be less than 1");
    return getAdjacentAt_1.getAdjacentAt(0, numItemsToGet, array);
}
exports.getHead = getHead;
