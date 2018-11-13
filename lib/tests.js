"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getHead_1 = require("./getHead");
var getTail_1 = require("./getTail");
var arr = ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];
// Test 1:
var head = getHead_1.getHead(2, arr);
if (head.length === 2 && head[0] === 'h' && head[1] === 'i')
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: Make sure source array was not changed:
if (arr.length === 8 && arr[0] === 'h')
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3:
var tail = getTail_1.getTail(2, arr);
if (tail.length === 2 && tail[0] === 'n' && tail[1] === 'o')
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4: Make sure array was not changed:
if (arr.length === 8 && arr[7] === 'o')
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5
var errorTriggered = false;
try {
    getHead_1.getHead(-1, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6
errorTriggered = false;
try {
    getTail_1.getTail(-1, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7
errorTriggered = false;
try {
    getHead_1.getHead(1, { prop: 1 });
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8
errorTriggered = false;
try {
    getTail_1.getTail(1, { prop: 1 });
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9
errorTriggered = false;
try {
    getHead_1.getHead('a', arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 failed');
// Test 10
errorTriggered = false;
try {
    getTail_1.getTail('0', arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 10 passed');
else
    console.log('test 10 failed');
