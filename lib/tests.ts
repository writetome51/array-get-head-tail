import { getHead, getTail } from './index';


let arr = ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];




// Test 1:
let head = getHead(2, arr);
if (head.length === 2 && head[0] === 'h' && head[1] === 'i') console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: Make sure source array was not changed:
if (arr.length === 8 && arr[0] === 'h') console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3:
let tail = getTail(2, arr);
if (tail.length === 2 && tail[0] === 'n' && tail[1] === 'o') console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: Make sure array was not changed:
if (arr.length === 8 && arr[7] === 'o') console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 4A:
tail = getTail(1, arr);
if (tail.length === 1 && tail[0] === 'o') console.log('test 4A passed');
else console.log('test 4A FAILED');



// Test 5
let errorTriggered = false;
try {
	getHead(-1, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6
errorTriggered = false;
try {
	getTail(-1, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7
errorTriggered = false;
try {
	getHead(1, {prop:1});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8
errorTriggered = false;
try {
	getTail(1, {prop:1});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9
errorTriggered = false;
try {
	getHead('a', arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');


// Test 10
errorTriggered = false;
try {
	getTail('0', arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 10 passed');
else console.log('test 10 FAILED');
