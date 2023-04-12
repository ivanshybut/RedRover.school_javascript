// Методы pop/push, shift/unshift
//push - добавляет элемент(ы) в конец.
//pop - удаляет последний элемент (и возвращает этот элемент!)

let leters = ['a', 'b', 'c', 'd', 'e']
console.log(leters);
leters.push('f','s')
leters.push(1, 55)
leters.push(88)
let c = leters.push('g')
console.log(leters);
console.log('g');

//


let a = leters.pop
let t = []
console.log(leters);


// String methods: split(), join()

//split - делит строку по указанному разделению, возвращает массив
//split('') =>  возвращает массив всех символов

let string = 'Hello- World'
console.log(string);

console.log(string.split(' '));
let stringNew = string.split('/ ')
console.log(stringNew);

let newArrayFromString = string.split('')
console.log(newArrayFromString);



//join => конвертирует массив в строку, по умолчанию
//разделяет символы запятой 

let array = ['a', 'b', 'c', 'd', 1, 2, 3]
console.log(array);

console.log(array.join());
console.log(array);

let newStringFromArray = array.join(' ')
console.log(newArrayFromString);


// объединение массивов
// concat()

leters = ['a', 'b', 'c', 'd']
const bigLeters = ['A', 'B', 'C', 'D']
let v = leters + ' ' + bigLeters
console.log(leters + ' ' + bigLeters);
console.log(typeof v); // => получается строка, так массив не складывать

let girls = ['Samanta', 'Anna', 'Kate']
let boys = ['John', 'Sam', 'Lukas']

const children = girls.concat(boys) // => правильное сложение массива
console.log(children);
console.log(typeof children);    


