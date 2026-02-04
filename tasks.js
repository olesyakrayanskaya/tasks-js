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
    return countChar(s, 'B');
}

function range(start, end) {
    let res = [];
    for (let i = start; i <= end; i++) {
        res.push(i);
    }
    return res;
}

function sum(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}

function rangeStep(start, end, step = start < end ? 1 : -1) {
    let res = [];
    if (step >= 0) {
        for (let i = start; i <= end; i += step) {
            res.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            res.push(i);
        }
    }
    return res;
}

function reverseArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[arr.length - i - 1]);
    }
    return res;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let current = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = current;
    }
    return arr;
}

function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(el, list) {
    return newList = { el, rest: list };
}

function nth(list, n) {
    while (list) {
        if (n === 0) {
            return list.value;
        }
        list = list.rest;
        n--;
    }
    return undefined;
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n === 0) {
        return list.value;
    } else {
        return nth(list.rest, n - 1);
    }
}

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 === null || obj2 === null) {
        return false;
    }

    if (typeof (obj1) !== 'object' || typeof (obj2) !== 'object') {
        return false;
    }

    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);

    if (keysObj1.length !== keysObj2.length) {
        return false;
    }

    for (let key of keysObj1) {
        if (!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
}

function customFlat(arr) {
    return arr.reduce((flat, current) => flat.concat(current), []);
}

function customEvery(arr, func) {
    for (let el of arr) {
        if (!func(el)) {
            return false;
        }
    }
    return true;
}

function customEvery2(arr, func) {
    return !arr.some(element => !func(element));
}

var missingNumber = function (nums) {
    let n = nums.length;
    let sumAll = (1 + n) / 2 * n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = sum + nums[i];
    }
    return sumAll - sum;
};

var isValid = function (s) {

    const c = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])

    const res = [];

    for (let i = 0; i < s.length; i++) {
        if (c.has(s[i])) {
            res.push(c.get(s[i]));
        } else if (!res.length || res.pop() !== s[i]) {
            return false;
        }
    }
    return res.length === 0;
};

console.log(isValid('([])'))