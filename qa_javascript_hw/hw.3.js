//1. Напишите программу калькулятор со switch, обработайте возможные ошибки ввода.

let num1 = 11;
let num2 = 4;
let operator = '/';

switch (operator) {
    case '+':
        result = num1 + num2;
        console.log('The result is ' + result);
        break;
    case '-':
        result = num1 - num2;
        console.log('The result is ' + result);
        break;
    case '*':
        result = num1 * num2;
        console.log('The result is ' + result);
        break;
    case '/':
        if (num2 != 0) result = num1 / num2;
        else result = 'you can`t divide by 0';
        console.log('The result is ' + result);
        break;
    default:
        console.log('Unknown operation, please enter correct operator!');

}


//2. При помощи цикла for выведите четные числа от 2 до 10

for (let i = 2; i <= 10; i += 2){
    console.log(i);
}

//3.
