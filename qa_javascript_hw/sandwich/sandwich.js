//Sandwich
let bread = 'Black bread'
let cheese = 'Swiss cheese'
let turkey = 'Smoked turkey'
let salmon = 'Wild salmon'
let pepperoni = 'Pepperoni'
let topping 
let Sandwich

let turkeySandwich = 'Sandwich with turkey'
let pepperoniSandwich = 'Sandwich with pepperoni'
let salmonSandwich = 'Sandwich with salmon'

let ask = prompt('Would you like to order?')

while (ask != 'yes'){
    ask = prompt('Would you like to order?')   
}
let askTopping = prompt('Choose from bellow toppings: 1 - salmon, 2 - turkey, 3 - pepperoni ')

if (askTopping == 1) {
    topping = salmon
    Sandwich = salmonSandwich
}
else if (askTopping == 3) {
    topping = pepperoni
    Sandwich = pepperoniSandwich
}
else {
    topping = turkey
    Sandwich = turkeySandwich
}


let step1 =` 1. Take a piece of ${bread}`
let step2 =` 2. Take a slice of ${cheese}`
let step3 =` 3. Put cheese of bread`
let step4 =` 4. Take a slice of ${topping}`
let step5 =` 5. Put ${topping} on ${cheese}`
let result =`Your ${Sandwich} is ready!`


document.write(`Recipe for ${Sandwich} <br> ` + "<br>" + step1 + "<br>" + step2 + "<br>" + step3 + "<br>" + step4 + "<br>" + step5 + "<br>", "<br>", result, "<br>")

let price = 15

if (askTopping == salmon) {document.write('Order price is: $' + price * 1.5)}
else {document.write('Order price is: $' + price)}