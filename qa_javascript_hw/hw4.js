//1. Нарисуйте ромб

//===1
let newStr = ''
for (let i = 1; i <= 5; i ++) {
    for (let j = 1; j <=i; j ++) {
        newStr += j
    }
    newStr += '\n'
}
console.log(newStr);
//===1

//===2
let newStr2 = ''
let x = 5
let space = ' '
for (let i =1; i <= x; i ++){
    newStr2 += space.repeat(x - i)
    for (let j = 1; j <=i; j ++){
        newStr2 += j
    }
    newStr2 += '\n'
}
console.log(newStr2);
//===2

//===3
let row = ''
for (let i = 1; i <= 5; i ++){
    row += i
    // row += '\n'
}
console.log(row);
//===3

//===4
let newStr3 = ''
for (let i = 1; i <= 5; i ++){
    newStr3 += space.repeat (i - 1)
    for (let j = 1; j <= x + 1 - i; j ++){
        newStr3 += j
    }
    newStr3 += '\n'

}
console.log(newStr3);
//===4

//===5
let newStr4 = ''
for (let i = 1; i <= 5; i ++){
    for (let j = x + 1 - i; j >= 1; j --){
        newStr4 += j
    }
    newStr4 += '\n'

}
console.log(newStr4);
//===5

//===6

let pyramid = ''
for (let i = 1; i <= x; i ++){
    pyramid += space.repeat(x - 1)
    for (let j = 1; j <= i; j ++){
        pyramid += j
    }
    for (let j = i - 1; j >= 1; j --){
        pyramid += j
    }
    pyramid += '\n'

}
console.log(pyramid);
//===6

//===7
let romb = ''
x = 10 
for (let i = 1; i <= x; i ++) {
    romb += space.repeat (x - i)
    for (let j = 1; j <= x; j ++) {
        romb += j

    }
    for (let j = i - 1; j >= 1; j --) {
        romb += j
    }
    romb += '\n'
}
x = 9

for (let i = 1; i <= x; i ++) {
    romb += space.repeat(i)
    for(let j = 1; j <= x + 1 -i; j ++) {
        romb += j
    }
    for (let j = x - i; j >= 1; j --){
        romb +=j
        
    }
    romb += '\n'
}
console.log(romb);
//===7