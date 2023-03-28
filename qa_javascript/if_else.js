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