import { getAdjacentAt } from '@writetome51/array-get-adjacent-at/getAdjacentAt';


export function getHead(numItemsToGet, array): any[] {
	return getAdjacentAt(0, numItemsToGet, array);
}
