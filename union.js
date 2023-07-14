"use strict";
// Union
function logId(id) {
    if (typeof id === 'string') {
        console.log('Some String');
    }
    else if (typeof id === 'number') {
        console.log(10);
    }
    else {
        console.log(false);
    }
}
logId(10);
//logId('Name');
//logId(false);
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(`Object has 'a' key`);
    }
}
function logMultIds(a, b) {
    if (a === b) {
    }
}
