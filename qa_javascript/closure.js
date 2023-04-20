// Замыкание  - это комбинация функций и лексического окружения, в котором эта функция была определена. Другими словами, замыкание дает вам доступ с Scope внешней функции из внутренеей функции. В JS замыкание создаются каждый раз при созании функции. во время ее создания.

// Example 1
function ourer (x, y){
    let tmp =3;

    function inner (y) {
        console.log(x + y + (++tmp)); // выведет 10
    }
    inner(y);
}
ourer(2, 4);

// Examle 2
let Person = function (pName) {
    let name = pName;

    this.getName = function (){
        return name;
    }
}

let person = new Person('Stan');
console.log(person.getName()); 