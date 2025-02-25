'use strict'

function consoleTriangle(size) {
    let str = '';
    for (let i = 0; i < size; i++) {
        console.log(str += '#');
    }
}

function consoleNum(size) {
    for (let i = 1; i <= size; i++) {
        if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

function consoleNum2(size) {
    for (let i = 1; i <= size; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

function consoleChessboard(size) {
    const white = ' ';
    const black = '#';
    let result = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                result += white;
            } else {
                result += black;
            }
        }
        result += '\n';
    }

    console.log(result);
}

function min(a, b) {
    return a < b ? a : b;
}

function isEven(n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        return isEven(Math.abs(n - 2));
    }
}

function countBs(s) {

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'B') {
            result++;
        }
    }
    return result;
}

function countChar(s, c) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            result++;
        }
    }
    return result;    
}

function countBs2(s) {
    return countChar(s,'B');
}
