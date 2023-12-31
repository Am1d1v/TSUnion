


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

/*

function logIn(id: string | number): void{
    console.log(id);
}

const a = logIn(1);


function mult(f: number, s?: number): number | void {
    if(!s){
        return f * f;
    }
}

type voidFunction = () => void;

const f1: voidFunction = () => {

}
const b = f1();


const arr = ['one', 'two', 'three'];

const user = {
    num: ['s']
}

arr.forEach((element) => user.num.push(element));
console.log(user.num);

*/


// Unknown

let input: unknown;

input = 3;

//let res: string = input;  // Error, type any || unknown

function run(i: unknown){
    if(typeof i === 'number'){
        i++;
    } else {
        console.log(i);
    }
}

run(input);


    async function getData(){
        try {
            await fetch('');
        } catch(error){
            if(error instanceof Error){
                console.error(error);
            }
            
        }
    }


    async function getDataForce(){
        try {
            await fetch('');
        } catch(error){
            const e = error as Error;
            
        }
    }


type U1 =  unknown | null; // Always unknown

type I1 = unknown & string; // string


// Never

function generateError(message: string): never{
    throw new Error(message);
}

function dumpError(): never{
    while(true){

    }
}

function rec(): never{
   return rec();
}

//const a: never = 1;   //Error


type paymentAction = 'refund' | 'checkout';

function processAction(action: paymentAction){
    switch(action){
        case 'refund':
            console.log('refund Completed');
            break;

        case 'checkout':
            console.log('checkout Completed');
            break;

        default:
            console.error('Wrong Action');    
        }
    }
           
processAction('refund');





function isString(par: string | number, ):boolean{
    if(typeof par === 'string'){
        return true;
    } else if (typeof par === 'number') {
        return false;
    }

    generateError('Error');
}