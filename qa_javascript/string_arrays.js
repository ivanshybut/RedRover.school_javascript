//String длина строки. Счет от 1-12

let phrase = 'Hello World!'; //12
let space = '.';//1

//phrase.lenght

console.log(phrase.length);
console.log(space.length);

//Index. Счет от 0-11
// let phrase = 'Hello World!'; //12
// let space = '.';//1

//phrase.lenght

console.log(phrase[11]);
console.log(space[0]);
console.log(phrase[7]);
console.log(phrase[3]);

// string.toLowerCase();
console.log(phrase.toLowerCase());
// string.toUpperCase();
console.log(phrase.toLocaleUpperCase());



// Arrays - массиы, упорядочкнная коллекция данных

let arr = [];
console.log(typeof arr); //-объект
console.log(arr);

let arr2 = ['ok', 'hello', "sun"]; 
console.log(arr2);

const arr3 = [1, 2, 3, 4, 5];
console.log(arr3);

//
let five = 5;
let six = 6;
let seven = 7;
let diffTypes = [null, "one", five, 2 , seven, true, undefined];
console.log(diffTypes);

//

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; // 7 элемент
//                0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 

console.log(letters.length); // кол-во всего эллементов
console.log(letters[0]);     //
console.log(letters[5]);
console.log(letters[letters.length -1]);// 6 - 1 = 5
console.log(letters.at(-2));



