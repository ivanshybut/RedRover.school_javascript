// Async - это специальный синтаксис , который предназначен для более прстого и удобного написания асинхронного кода. Появился в с ES8. Синтаксис async/await упрощает работу с промисами. Асинхронные функции - это функции которые объявенны с использованием ключеваго слова async.


/* Синтаксис:
async function name (param0) {
    statements
}
async function name (param0, param1){
    statements
} 
async function name (param0, param1, ...., paramN){
    statements
}
*/

// Example 1
const hello = async () => {
    return 'Hello'
}
const result = hello ()
console.log(result);

// Example 2
async function asyncHi () {
    console.log('Hi');
}
asyncHi()

let result2 = asyncHi ()
console.log(result2);

//-
const hello2 =() => {
    return Promise.resolve('Hello!')

}
let pr2 = hello2 ()
console.log(pr2);

/* Await - ключевое слово , которое используется в асинхронных функциях для того, чтобы указать, что здесь необходимо дождаться завершения промиса. Таким образом, await указанный перед промисом запрещает интерпритатору перейти к следующей строчке кода , пока он не выполнится.
*/

// Example 1
/*function resolveAfter2Seconds(){
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('resolved2Seconds');
        }, 2000)
    })
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Sec()
    console.log(result);
}
asyncCall()
*/
/* result - переменная, содержащая результат выполнения промиса
let result = await promise;
 - на эту строчку не перейдем пока не закончится промис
*/
