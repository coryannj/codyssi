const fs = require('fs');
require('../utils.js');
const input = fs.readFileSync('../inputs/codyssi/2025/part02.txt', {encoding: "utf8", flag: "r", });

let lines = input.split(/\n\n/)

let pricing = lines[0].lines().map((x)=>Number(x.match(/\d+/)[0])).reverse()
console.log(pricing)

let qualities = lines[1].lines().map(Number).sorta()
let median = qualities[Math.floor(qualities.length/2)]

console.log(((median**pricing[0])*pricing[1])+pricing[2])

let evens = qualities.filter((x)=>x%2===0).sum()

console.log(((BigInt(evens)**BigInt(pricing[0]))*BigInt(pricing[1]))+BigInt(pricing[2]))

let max = 15000000000000

console.log(qualities.filter((x)=>((x**pricing[0])*pricing[1])+pricing[2]<max).at(-1))