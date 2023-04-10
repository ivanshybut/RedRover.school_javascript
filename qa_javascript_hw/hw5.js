//coffee + function

function showMeWelcomeMassage (){
    console.log('Welcome to our self-service cafe!');
    console.log('We have different cup sizes. Please, choose one:\n');
}

function showCupOptions (){
   let smallCup = 'small cup'
   let mediumCup = 'medium cup'
   let largeCup = 'large cup'
   let price = 5
   
   let cupsOptions = [[smallCup, price], [mediumCup, (price * 1.5), [largeCup, price * 2]]]

   for (let i = 0; i < cupsOptions.length; i ++){
    console.log(cupsOptions[i][0] + ' - ' + cupsOptions[i][1] + '$');

    if (i == cupsOptions.length -1){
        console.log('\n');
    }
   }
}
// git add .
// git commit -m
// git pull
// git push

function showCoffeeTypesAndIngridients (){
    let latte = 'Latte'
    let iceCoffee = 'Ice Coffee'
    let beansArabica = 'Arabica Grounds Beans'
    let beansEthiopian = 'Ethiopian Grounds Beans'
    let hotWater = 'Hot Water'
    let coldWater = 'Cold Water'

    let latteIngridients = `${latte}:\n 1 spoon of ${beansArabica} \n ${hotWater} \n milk \n`
    let iceCoffeeIngridients = `${iceCoffee}: \n 1 spoon of ${beansEthiopian} \n ${coldWater} \n milk \n`

    console.log('We have following coffee types. Please choose one!: \n');
    let menu = [latteIngridients, iceCoffeeIngridients]

    for (let i = 0; i < menu.length; i ++){ 
        console.log(menu[i]);
    }


}

    
function setWaterForCoffee (coffeeType){
    if (coffeeType.toLowerCase() = 'ice coffee'){
        return water = 'cold water'
    } else {
        return water = 'hot water'
    }
} 

function getCupPrice(cupSize){
    let price = 5
    if (cupSize == 'small'){
        return price
    }
    else if (cupSize == 'medium'){
        return price *= 1.5
    }
    else if( cupSize == 'large'){
        return price *=2
    }
}

function showRecipeToClient (cupSize, coffeeType, isLactoseFree, milk = 'half&half'){
    let water = setWaterForCoffee(coffeeType)
    price = getCupPrice(cupSize)

}



