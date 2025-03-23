const fs = require('fs');
require('../utils.js');
const input = fs.readFileSync('../inputs/codyssi/2025/part03.txt', {encoding: "utf8", flag: "r", });

let lines = input.split(/[\n\s\r]/).map((x)=>x.split('-').map(Number).sortd().reduce((a,c)=>a-c)+1)
console.log(lines.sum())

let lines2 = input.lines().map((x)=>x.split(' ').map((y)=>y.split('-').map(Number).sorta()))

function intervals([r1,r2]){
    let x1,x2,y1,y2
    if(r1[0]<=r2[0]){
        x1 = r1[0]
        x2 = r1[1]
        y1 = r2[0]
        y2 = r2[1]
    } else {
        x1 = r2[0]
        x2 = r2[1]
        y1 = r1[0]
        y2 = r1[1]
    }

    if(x2>=y2){ // y inside x
        return x2-x1+1
    } else if(x1<=y2 && y1<=x2) { // overlap
        return y2-x1+1
    } else {
        return (x2-x1+1)+(y2-y1+1)
    }
}

console.log(lines2.map((x)=>intervals(x)).sum())

function expandRange(start,end){
    let range = new Set()
    for(i=start;i<=end;i++){
        range.add(i)
    }

    return range
}

function ranges([r1,r2]){
    let x1,x2,y1,y2
    if(r1[0]<=r2[0]){
        x1 = r1[0]
        x2 = r1[1]
        y1 = r2[0]
        y2 = r2[1]
    } else {
        x1 = r2[0]
        x2 = r2[1]
        y1 = r1[0]
        y2 = r1[1]
    }

    if(x2>=y2){ // y inside x
        return expandRange(x1,x2)
    } else if(x1<=y2 && y1<=x2) { // overlap
        return expandRange(x1,y2)
    } else {
        let s1 = expandRange(x1,x2)
        let s2 = expandRange(y1,y2)

        return s1.union(s2)
    }
}

let boxes = lines2.map((x)=>ranges(x))
let currMax = 0


for(j=0;j<boxes.length-1;j++){
    let uniques = boxes[j].union(boxes[j+1])

    if(uniques.size>currMax){
        currMax = uniques.size
    }
}

console.log(currMax)