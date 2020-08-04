import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
export function getHead(numItemsToGet, array) {
    return getAdjacentAt(0, numItemsToGet, array);
}
export function getTail(numItemsToGet, array) {
    let startingIndex = (array.length - numItemsToGet);
    return getAdjacentAt(startingIndex, numItemsToGet, array);
}
