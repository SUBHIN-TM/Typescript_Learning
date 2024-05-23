"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var name = _a.name;
    console.log(name);
    return { output: "returned" };
}
createUser({ name: 'subhin' });
