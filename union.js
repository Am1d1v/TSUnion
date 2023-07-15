"use strict";
// Union
const user = {
    login: 'a@a.com',
    //password: '123'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    else {
        return first * second;
    }
}
multiply(4);
function testPassword(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
}
