import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';


export function getHead(numItemsToGet, array): any[] {
	return getAdjacentAt(0, numItemsToGet, array);
}


export function getTail(numItemsToGet, array): any[] {
	return getAdjacentAt(-numItemsToGet, numItemsToGet, array);
}
