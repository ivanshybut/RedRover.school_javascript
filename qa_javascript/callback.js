// Колбек это функция, которая выполняется после другой функции, завершившей свое выполнение. В JavaScript, функции это объекты. Поэтому, функции, могут брать другие функции в виде аргументов и также могут быть возвращены другими функциями. Функции которые так делают, называются функциями высшего порядка. Любая функция, которая передается как аргумент - именуется callback функцией.

function multiply(a , b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

function showResult (a, b , callback) {
    if (typeof callback === 'function'){
        console.log(callback (a, b));
    }
    else return console.log('Your numbers are ' + a + ' and ' + b);
}

showResult (3, 4, (a , b) => a * b )
showResult (21, 3, divide)
showResult (5, 8, multiply)
showResult (21, 3)