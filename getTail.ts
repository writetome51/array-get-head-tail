import { getAdjacentAt } from '@writetome51/array-get-adjacent-at/getAdjacentAt';


export function getTail(numItemsToGet, array): any[] {
	if (numItemsToGet < 1) throw new Error(`The number of items to get cannot be less than 1`);
	return getAdjacentAt(-numItemsToGet, numItemsToGet, array);
}