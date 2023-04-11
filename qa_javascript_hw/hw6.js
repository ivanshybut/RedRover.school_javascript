//Напишите функцию калькулятор, в которую, в качестве параметров, передаются три переменные. Две числовые и третья арифметическая операция.


function sum (a, b) {
    return a + b
}
function substract (a , b) {
    return a - b
}
function multiply (a, b){
    return a * b
}
function divide (a, b) {
    if (b == 0){
        return 'Division by 0 is not allowed! Please enter another number.'
    }
    else return a / b
}


function calc (a, b, sign) {
    let result = 0
    if (isNaN(a) || isNaN(b)) result = 'Please, enter a number!'
    else {
        if (sign == "+") result = sum (a, b)
        else if (sign == "-") result = substract (a, b)
        else if (sign == "*") result = multiply (a, b)
        else if (sign = "/") result = divide (a, b)
        else result = 'Please, enter the right sign!'
    }
    return result
}
console.log(calc(8, 4, "+"));

