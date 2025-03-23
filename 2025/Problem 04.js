const fs = require('fs');
require('../utils.js');
const input = fs.readFileSync('../inputs/codyssi/2025/part04.txt', {encoding: "utf8", flag: "r", });

let memory = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let lines = input.lines().map((x)=>x.split('').map((y)=>memory.indexOf(y)).sum())
console.log(lines.sum())

function compress(l){
    let len = l.length
    let kept = Math.floor(len/10)

    if(kept === 0){
        return x.split('').map((y)=>memory.indexOf(y)).sum()
    } else {
        let newlen = `${len-(2*kept)}`.split('').map(Number).sum()
        let ends = `${l.slice(0,kept)}${l.slice(-kept)}`.split('').map((y)=>memory.indexOf(y)).sum()

        return newlen+ends
    }
}

let lines2 = input.lines().map((x)=>compress(x))
console.log(lines2.sum())

function lossless(l){
    let newStr = ''
    l = l.split('')

    while(l.length>0){
        let thisLetter = l.shift()
        let count = 1
        while(l[0]===thisLetter){
            l.shift()
            count++
        }
        newStr+=`${count}${thisLetter}`
    }
    return newStr.split('').map((x)=>memory.indexOf(x)=== -1 ? parseInt(x): memory.indexOf(x)).sum()
}

let lines3 = input.lines().map((x)=>lossless(x))
console.log(lines3.sum())