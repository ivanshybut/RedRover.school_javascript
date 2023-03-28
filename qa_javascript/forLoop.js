// For Loop

// for (initialization, condition, step(increment/discrement)) {
//     ...loop body...
// }

// for (начало, условие, шаг) {
//     ...тело цикла...
// }

for (let i = 0; i < 3; i ++) {
    console.log(i)
}

for (let i = 0; i <= 3; i ++) {
    console.log(i)
}


//    Начало let i = 0     Выполняется один раз при входе в цикл
//    условие i < 3        Проверяется перед каждей итерацие цикла. 
//                         Если оно вычислится в false, цикл остановится. 
//                         Тело console.log(i) выполняется снова и снова пока
//                         условие вычисляется в true.
//     шаг i ++            Выполняется после тела цикла на каждой итерации
//                         перед проверкой условия.

//      ----- repeat string
let str1 = ' + ';
let newStr = '';
for (let i = 0; i < 7; i ++ ){
    newStr = newStr + str1
    console.log(newStr);
}
    
//     ----- find sum
let sum = 0;
for (let i = 1; i <= 10; i ++) {
    sum +=1     // sum = sum + i;
    console.log(sum);
}
//0 + 1 = sum 1             1
//sum 1 + (i 2) = sum 3     2
//sum 2 + (i 3) = sum 6     3
//6 + 4 = 10                4


//      ------exponentiate
let num = 5;
let result = 1;                    // i = 1 result = 1 * 5 = 5
for (let i = 1; i <= 3; i ++) {    // i = 2 result = 5 * 5 = 25
    result = result * num          // i = 3 result = 25 * 5 = 125
}
console.log(result);


