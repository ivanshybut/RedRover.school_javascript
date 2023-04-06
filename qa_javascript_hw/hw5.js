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


    
