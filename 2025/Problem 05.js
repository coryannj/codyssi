const fs = require('fs');
require('../utils.js');
const input = fs.readFileSync('../inputs/codyssi/2025/part05.txt', {encoding: "utf8", flag: "r", });

const dist = ([x,y]) => Math.abs(x) + Math.abs(y)
const dist2 = ([x1,y1],[x2,y2]) => Math.abs(x2-x1)+Math.abs(y2-y1)

// Part 1
let lines = input.lines().map((x)=>x.match(/[\d-]+/g).map(Number)).map((y)=>dist(y)).sorta()

console.log(lines.at(-1)-lines[0])

// Part 2
let lines2 = input.lines().map((x)=>x.match(/[\d-]+/g).map(Number)).map((y)=>[y,dist(y)]).sort((a,b)=>a[1]-b[1])

let closest = [xc,yc] = lines2[0][0]

let nextClosest = lines2.slice(1).map((x)=>[x[0],dist2(closest,x[0])]).sort((a,b)=>a[1]-b[1])
console.log(nextClosest[0][1])

// Part 3
let allShortest = 0
let currIsland

while(lines2.length>0){
    currIsland = lines2.shift()
    allShortest+=currIsland[1]

    let findShortest = lines2.map((x)=>[x[0],dist2(currIsland[0],x[0])]).sort((a,b)=>{
        if(a[1]===b[1]){
            if(a[0][0]===b[0][0]){
                return a[0][1]-b[0][1]
            } else {
                return a[0][0]-b[0][0]
            }
        } else {
            return a[1]-b[1]
        }
    })

    lines2 = findShortest
}
console.log(allShortest)