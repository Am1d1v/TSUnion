


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

interface User {
    name: string,
    age: number,
    skills: string[] 
};

interface UserWithRole extends User {
    id: number
} 

let user: UserWithRole = {
    name: 'someName',
    age: 20,
    skills: ['skillOne', 'skillTwo'],
    id: 10
};