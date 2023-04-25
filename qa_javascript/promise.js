let isNothingHappened = true // true || false

let willPassExam = new Promise (function (resolve, reject) {
    if(isNothingHappened) {
        let message = 'I got a diploma'
        resolve(message)
    }
    else {
        let reason = new Error ('Oops, something is wrong!')
        reject (reason)
    }
})

let checkEvents = function () {
    willPassExam
        .then (function (noEvents) {
            console.log(noEvents);
        })
        .catch (function (error) {
            console.log(error.message);
        })
    
}

checkEvents()