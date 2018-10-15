2 functions that return a number of items from either the beginning or end of the array:

getHead(numberOfItems, array)

getTail(numberOfItems, array)

Neither of them modify the source array.

Examples:

let arr = ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

let head = getHead(2, arr);

head now contains ['h', 'i']

let tail = getTail(2, arr);

tail now contains ['n', 'o']
