let num1 = 5;
let num2 = 8;
if (num1 < num2) {
    console.log(`${num1} < ${num2}`);
} else {
    console.log(`${num1} >= ${num2}`);
}


// ======= SWITCH

let num3 = 5; // от 1 до 5 сработает. Все что больше или меньше 'Something else'

switch (num3) {
    case 1:
        console.log('One');
        break;
    case 2:
        console.log['Two'];
        break;
    case 3:
        console.log('Three');
        break;
    case 4:
        console.log('Four');
        break;
    case 5:
        console.log('Five');
        break;
    default:
        console.log('Something else');
}
console.log('=========================');
// 


let age = 31;
let price = 10;
let passengerCategory1 = 'Infants';
let passengerCategory2 = 'Kids';
let passengerCategory3 = 'Adults';
let passengerCategory4 = 'Pensioners';

if (age < 2) {
    console.log('Ticket price for' + ' ' + passengerCategory1 + ' ' + 'is' + ' USD ' + price * 0.1);
}
else if (age >= 2 && age < 18) {
    console.log('Ticket for price' + ' ' + passengerCategory2 + ' ' + 'is' + ' USD ' + price*0.5);

}
else if (age >= 18 && age < 65) {
    console.log('Ticket for price' + ' ' + passengerCategory3 + ' ' + 'is' + ' USD ' + price);

}
else {
    console.log('Ticket for price' + ' ' + passengerCategory4 + ' ' + 'is' + ' USD ' + price*0.6);
}