// Function

// Function declaration
// function name (param1, param2){
//     statements
// return expression
// }

// // Function expression
// let name = function (param1, param2) {
//     statements
// return expression
// }

// Arrow Function
// let name = (arg1, arg2, ...) => expression;

//===============function declaration
//1. Слово function
//2. Имя функции 
//3. Список параметров в круглых скобках через запятую
//4. Код функции ("Тело функции"), внутри фигурных скобках


function sum (a, b) {
    let result = a + b
    console.log(result); 
}
sum (3, 6)

function sum2 (a1, b1) {
    let result = a1 + b1
    return result
}
console.log(sum(2,3))

//

// test 5
let arr = ['red', 43, 1, 66, 2, ' big', 4, 'car']


function createArreyOfNumbers (array){
    let arrNew = []
    for (let i = 0; i < array.length; i ++) {
        if (typeof array[i] == 'number'){
        arrNew.push(arr[i]);
        }
    }
    return arrNew
}
console.log(createArreyOfNumbers(arr));