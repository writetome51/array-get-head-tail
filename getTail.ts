import { getAdjacentAt } from '@writetome51/array-get-adjacent-at/getAdjacentAt';
import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';


export function getTail(numItemsToGet, array): any[] {
	errorIfNotIntegerZeroOrGreater(numItemsToGet);
	return getAdjacentAt(-numItemsToGet, numItemsToGet, array);
}