"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_adjacent_at_1 = require("@writetome51/array-get-adjacent-at");
function getTail(numItemsToGet, array) {
    if (numItemsToGet < 1)
        throw new Error("The number of items to get cannot be less than 1");
    return array_get_adjacent_at_1.getAdjacentAt(-numItemsToGet, numItemsToGet, array);
}
exports.getTail = getTail;
