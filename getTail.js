"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAdjacentAt_1 = require("@writetome51/array-get-adjacent-at/getAdjacentAt");
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
function getTail(numItemsToGet, array) {
    errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(numItemsToGet);
    return getAdjacentAt_1.getAdjacentAt(-numItemsToGet, numItemsToGet, array);
}
exports.getTail = getTail;
