"use strict";
// Union
/*

function logId(id: string | number | boolean){
    if(typeof id === 'string'){
        console.log('Some String');
    } else if(typeof id === 'number'){
        console.log(10)
    } else {
        console.log(false);
    }
}

logId(10);
//logId('Name');
//logId(false);

function logError(err: string | string[]){
    if(Array.isArray(err)){
        console.log(err);
    } else {
        console.log(err);
    }
}

function logObject(obj: {a: number} | {b: number}){
    if('a' in obj){
        console.log(`Object has 'a' key`);
    }
}


function logMultIds(a: string | number, b: string | number){
    if (a === b) {

    }
}

*/
// Literal Types
/*

function fetchWithAuth(url: string, method: 'post' | 'get'){

}
fetchWithAuth('someUrl', 'post');

function fetchWithAuthNumbers(url: string, method: 1 | 2){
    console.log(url);
}
fetchWithAuthNumbers('someUrl', 1);

*/
// Type Aliases
/*

type httpMethod = 'post' | 'get';

function fetchWithAuth(url: string, method: httpMethod){

}
fetchWithAuth('someUrl', 'post');



type User = {
    name: string,
    age: number,
    skills: string[]
};

type Role = {
    id: number
}

type UserWithRole = User & Role;

let user: UserWithRole = {
    name: 'someName',
    age: 20,
    skills: ['skillOne', 'skillTwo'],
    id: 10
};

*/
// Interfaces
/*

interface User {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string;
};

interface UserWithRole extends User {
    id: number
}

let user: UserWithRole = {
    name: 'someName',
    age: 20,
    skills: ['skillOne', 'skillTwo'],
    id: 10,

    log(id){
        return '';
    }
};

interface UserDictionary {
    [index: number]: User
}

*/
// Optinal
/*

interface User {
    login: string,
    password?: string
}

const user: User = {
    login: 'a@a.com',
    //password: '123'
}



function multiply(first: number, second?: number):number{
    if(!second){
        return first * first;
    } else {
        return first * second;
    }
    
}

multiply(4);



interface UserPro {
    login: string,
    password?:{
        type: 'primary' | 'secondary'
    };
}

function testPassword(user: UserPro){
    const t = user.password?.type;
}

function test(param?: string){
    const t = param ?? multiply(5);
}

*/
// Void 
function logIn(id) {
    console.log(id);
}
const a = logIn(1);
function mult(f, s) {
    if (!s) {
        return f * f;
    }
}
const f1 = () => {
};
const b = f1();
const arr = ['one', 'two', 'three'];
const user = {
    num: ['s']
};
arr.forEach((element) => user.num.push(element));
console.log(user.num);
