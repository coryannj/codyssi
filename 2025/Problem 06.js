const fs = require('fs');
require('../utils.js');
const input = fs.readFileSync('../inputs/codyssi/2025/part06.txt', {encoding: "utf8", flag: "r", });

let charVal = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let charRegex = /[a-zA-Z]/g

const chars = input.match(charRegex)
console.log(chars.join('').length)

console.log(chars.join('').split('').map((x)=>charVal.indexOf(x)).sum())

const amend = (val) => {
    let found = (val*2)-5

    if(1<=found && found<=52){
        return found
    } else if (found<1){
        while(found<1){
            found+=52
        }
        return found
    } else {
        while(found>52){
            found-=52
        }
        return found
    }
}

let score = charVal.indexOf(input[0])
let last = amend(score)
let rest = input.slice(1).split('')
let next

while(rest.length>0){
    next = rest.shift()

    if(/[a-zA-Z]/.test(next)){
        score+=charVal.indexOf(next)
        last = amend(charVal.indexOf(next))
    } else {
        score+=last
        last = amend(last)
    }

}

console.log(score)