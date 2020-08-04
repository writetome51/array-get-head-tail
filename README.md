# getHead(numItems, array): any[]

Returns `numItems` from beginning of `array`.

# getTail(numItems, array): any[]  

Returns `numItems` from end of `array`.

Neither function modifies `array`.  

## Examples
```
let arr = ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

getHead(3, arr);  
    // --> ['h', 'i', 'j']

getTail(2, arr);  
    // --> ['n', 'o']
```

## Installation
`npm i  @writetome51/array-get-head-tail`


## Loading
```js
import {getHead, getTail} from '@writetome51/array-get-head-tail';
```