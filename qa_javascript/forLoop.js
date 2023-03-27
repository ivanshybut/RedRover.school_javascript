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


let str1 = ' + ';
let newStr = '';
for (let i = 0; i < 7; i ++ ){
    newStr = newStr + str1
    console.log(newStr);
}
    
//      find sum
let sum = 0;
for (let i = 1; i < 10; i ++) {
    sum += i;
    console.log(sum);
}
