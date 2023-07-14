


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

function fetchWithAuth(url: string, method: 'post' | 'get'){

}
fetchWithAuth('someUrl', 'post');

function fetchWithAuthNumbers(url: string, method: 1 | 2){
    console.log(url);
}
fetchWithAuthNumbers('someUrl', 1);