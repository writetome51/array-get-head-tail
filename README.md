To include:

import {getHead, getTail} from '@writetome51/array-get-head-tail';

2 functions that return a number of items from either the beginning (getHead)  
or end (getTail) of an array:

getHead(numberOfItems, array): any[]  

getTail(numberOfItems, array): any[]  

Neither of them modify the source array.  
Examples:

let arr = ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

let head = getHead(3, arr);  
// head now contains ['h', 'i', 'j']

let tail = getTail(2, arr);  
// tail now contains ['n', 'o']
