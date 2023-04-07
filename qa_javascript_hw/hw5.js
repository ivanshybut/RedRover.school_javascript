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

function showCoffeeTypesWithIngridients (){
    let latte = 'Latte'
    let iceCoffee = 'Ice Coffee'
    let beansArabica = 'Arabica Grounds Beans'
    let beansEthiopian = 'Ethiopian Grounds Beans'
    let hotWater = 'Hot Water'
    let coldWater = 'Cold Water'

    let latteIngridients = `${latte}:\n 1 spoon of ${beansArabica} \n ${hotWater} \n milk \n`
    

}

    
