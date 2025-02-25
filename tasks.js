'use strict'

function consoleTriangle(size) {
    let str = '';
    for(let i; i < size; i++) {
        console.log(str+='#');
    }
}

consoleTriangle(7);