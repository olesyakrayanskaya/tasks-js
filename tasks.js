'use strict'

function consoleTriangle(size) {
    let str = '';
    for(let i=0; i < size; i++) {
        console.log(str+='#');       
    }
}

consoleTriangle(7);
