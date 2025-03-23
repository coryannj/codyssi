const fs = require('fs');
require('../utils.js');
const input = fs.readFileSync('../inputs/codyssi/2025/part01.txt', {encoding: "utf8", flag: "r", });

let numbers = input.lines()
let symbols = numbers.pop().split('')
let first = numbers.shift()

//Part 1
console.log(eval(numbers.reduce((a,c,i)=>a+symbols[i]+c,first)))

//Part 2
let symbolsReverse = symbols.toReversed()

console.log(eval(numbers.reduce((a,c,i)=>a+symbolsReverse[i]+c,first)))

// Part 3
let newNumbers = [first].concat(numbers).chunks(2).map((x)=>x.join(''))
let newFirst = newNumbers.shift()

console.log(eval(newNumbers.reduce((a,c,i)=>a+symbolsReverse[i]+c,newFirst)))