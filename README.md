# getHead<T>(numItems, array: T[]): T[]

Returns `numItems` from beginning of `array`.

# getTail<T>(numItems, array: T[]): T[]  

Returns `numItems` from end of `array`.

Neither function modifies `array`.  

## Examples
```
let arr = ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

getHead(3, arr);  
// --> ['h', 'i', 'j']

getTail(3, arr);  
// --> ['m', n', 'o']

getHead(8, arr);
// --> ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']

getTail(8, arr);
// --> ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']
    
getHead(9, arr);
// Error: the array does not have enough items to fulfill your request

getTail(9, arr);
// Error: The entered index is not valid. Whether positive or negative, it exceeds 
// the index range of the array.
```

## Installation
`npm i  @writetome51/array-get-head-tail`


## Loading
```js
import {getHead, getTail} from '@writetome51/array-get-head-tail';
```
