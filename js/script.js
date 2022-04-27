const numbersArray = [];
const userGuessNumbers = [];
const displayNumbers = document.getElementById('numbers');
const displayScore = document.getElementById('final-score');

let score = 0;

while (numbersArray.length < 5) {
    const singleNumber = getRndInteger(1,100);
    if (!numbersArray.includes(singleNumber)) {
        numbersArray.push(singleNumber);
        displayNumbers.append(`${singleNumber} `);
    }
}

console.log(numbersArray);

setTimeout(() => {
    displayNumbers.classList.add('d-none');
}, 30000);

const timer = setTimeout(function() {
    for (let i = 0; i < numbersArray.length; i++) {
        const userInput = parseInt(prompt('Inserisci, uno alla volta, i numeri che hai visto prima'));
        console.log(userInput);
        if (numbersArray.includes(userInput) && !userGuessNumbers.includes(userInput)) {
            userGuessNumbers.push(userInput);
        }
    }

    console.log(userGuessNumbers);
    score = userGuessNumbers.length;
    let result = '';
    if (score > 0) {
        result = `Hai indovinato ${score} numeri: ${userGuessNumbers}`
    } else {
        result = `Hai indovinato ${score} numeri`
    }

    displayScore.innerHTML = result;
    
}, 30400)

//              FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}