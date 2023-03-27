//Arithmetic Operators
//Operators
//  +      Addition(Сложение)        5+3 = 8
//  -      Subtraction(Вычитание)    5-3 = 3
//  *      Multiplication(Умножение) 5*3 = 15
//  /      Division(Деление)         5/3 = 2
//  %      Moduls (процент)          5%3 = 1
//  ++     Increment(увелеение на +1)A=10; A++ = 11
//  --     Decrement(уменьшение на -1)A=10; A-- = 9
//  

//Operator      Example     Same As     Result in x
//=             x = y       x = y       x = 5
//+=            x += y      x = x + y   x = 15
//-=            x -= y      x = x - y   x = 5
//*=            x *= y      x = x * y   x = 50
///=            x /= y      x = x / y   x = 2
//%=            x %= y      x = x % y   x = 0

// Некоторые особенные действия в JS
let a = 7;
let b = 2;
let c = a ** b // ** возведение в степень
console.log(c)

let d = a % b; // остаток при делении
console.log(d)

let f = b % a; // если при делении остатком первое чилсло меньше второго, остаток будет первое число
console.log(f)

// Addition(Сложение) +
{
    let a = 5;
    let b = 3;
    let mySum = a + b;
    console.log(mySum)}

// Subtraction(Вычитание) -
{
    let a = 5;
    let b = 3;
    let c = a - b;
    console.log(c)
}

// Multiplication(Умножение) * 
{
    let a = 5
    let b = 3
    let c = a * b
    console.log(c)
}

// Division(Деление) /
{
    let a = 5
    let b = 3
    let Division = a / b
    console.log(Division)
}

// Moduls (процент) %

{ 
    let a = 5
    let b = 3
    let c = a % b
    console.log(c)
}

// Increment(увелеение на +1) ++ Decrement(уменьшение на -1) --
let myVariable = 10;

console.log(myVariable++); //идет присвоение +1, следующая строка показывает результат
//console.log(++myVariable) сразу результат +1
console.log(myVariable)    //результат после присвоения ++

let myVariable2 = 10;
console.log(--myVariable2); // --в начале, получает сразу результат


// type number
//int, double -all
// --- NaN => Not a Nimber, still a number, NaN означает вычислительную ошибку. Это результат не правильной или не определенной математической операции
//Infinity is a number

// Another data type
//undifined, boolean(true/false), array, null(object)

let myNum
console.log(typeof myNum) // - undefined

let bool1 = true;
let bool2 = (5 > 9);
console.log(typeof bool2); // - boolean
console.log(bool1 + ' ' + bool2); // - true, false

// Comparison operators (Сравнение переменных)
// ==(не строгое сравнение),===(строгое значение),!= (не равно),!==,(строгое неравно),<(меньше),>(больше),<=(меньше или равно),>=(больше или равно)

let z = '5';//string
let x = -10;
let y = "y";
let Y = "Y";
let m = "0";

console.log(z);
console.log(z == 5); //true
console.log(z === 5);//false
console.log(x);
console.log(x != -10); //false
console.log(x !== -10);//true
console.log(y == Y); //false
console.log(y === y);
console.log();
console.log();

//Logical operators 
//  || (или), && (И), !(НЕ)
//Приоритет && выше чем ||, так что он выполняется первым 

let massaKg = 70;
console.log(massaKg > 50 || massaKg > 90);
console.log(!(massaKg < 50 || massaKg > 60));

console.log(true && true); //true
console.log(false && true);//false
console.log(true && false);//false
console.log(false && false)//false

console.log(massaKg > 50 && massaKg < 90);//true
console.log(!true); //false