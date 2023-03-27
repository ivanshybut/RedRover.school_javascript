//1. Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц "July" . или "August", то программа должна показать - "approved", если другие месяцы - то "denied".

let myMonth = 'July';

if (myMonth == 'July' || myMonth == 'August') {
    console.log("approved")
}
else console.log("denied")


//2. Напишите простой калькулятор (*, /, +, -). Проверить код на охват исключений для арифметических операций. У вас должно быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора должно происходить, то или иное арифметическое действие и выводить результат в консоль. 

let num1 = 5 //любое число
let num2 = 3 //любое число
let operator = "*"//оператор

if (operator == "+") {
    console.log(num1 + num2)
}
else if (operator == "-") {
    console.log(num1 - num2)
}
else if (operator == "*") {
    console.log(num1 * num2)
}
else if (operator == "/" && num2 != 0){
    console.log(nim1 / num2)
}
else console.log('Please, enter correct number!')


//3. Улитка ползет по стене вверх высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь она съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены. 

let dayDistance = 3
let nightDown = -2
let distance = 0
let days = 0
let wall = 5

if ((distance += dayDistance) <= wall) {
    days ++
    console.log(` - Current distance at the end of the day for day ${days} is ${distance} meter (s)`)

    distance += nightDown
}
if ((distance += dayDistance) <= wall) {
    days ++
    console.log(`  Current distance at the end of the day for day ${days} is ${distance} meter (s)`)

    distance += nightDown
}
if ((distance += dayDistance) <= wall) {
    days ++
    console.log(` - Current distance at the end of the day for day ${days} is ${distance} meter (s)`)

    distance += nightDown
}
if ((distance += dayDistance) <= wall) {
    days ++
    console.log(` - Current distance at the end of the day for day ${days} is ${distance} meter (s)`)

    distance += nightDown
}
if ((distance += dayDistance) <= wall) {
    days ++
    console.log(` - Current distance at the end of the day for day ${days} is ${distance} meter (s)`)

    distance += nightDown
}
else console.log('Finish')