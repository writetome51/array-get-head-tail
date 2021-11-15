import {getAdjacentAt} from '@writetome51/array-get-adjacent-at';


export const getHead = (numItemsToGet, array) => getAdjacentAt(0, numItemsToGet, array);

export const getTail =
	(numItemsToGet, array) => getAdjacentAt(-numItemsToGet, numItemsToGet, array);
