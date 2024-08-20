#Project 1
```Javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click' , function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id ==='grey') {
            body.style.backgroundColor = e.target.id;
                }
        if (e.target.id ==='white') {
            body.style.backgroundColor = e.target.id;
                }
        if (e.target.id ==='blue') {
            body.style.backgroundColor = e.target.id;
                }
        if (e.target.id ==='yellow') {
            body.style.backgroundColor = e.target.id;
                }
        if (e.target.id ==='purple') {
            body.style.backgroundColor = e.target.id;
                }
        
    })
    
})

#Project 2 - BMI Calculator

const form = document.querySelector('form')
const body = document.querySelector('body')
const container = document.querySelector('.container')
body.style.backgroundColor = 'grey'
body.style.paddingLeft = '400px '
body.style.paddingRight = '400px '
body.style.alignItems = 'center'

container.style.backgroundColor = 'white'
container.style.border = '15px solid lightgreen'
// this usecase will give you empty value because it takes value at start.
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit' , function(s){
    s.preventDefault()
    //parseInt converts any string argument to an integer.
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid Height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid Weight ${weight}`
    } else {
        const BMI = (weight / ((height*height) / 10000)).toFixed(2)
        //show the results
        result.textContent = `${BMI}`;
    }
   

})

#Project 3  Digital Clock
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')



setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

#Project 4 - Guess The Number Game

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const p = document.querySelector('p')

let previousGuess = []
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);

    })

}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a valid Number')

    } else if (guess < 1) {
        alert('Please enter Number more than 1')
    } else if (guess > 100) {
        alert('Please enter a Number less than 100')
    } else {
        previousGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over . Random Number Was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guesses it right`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is tooo Low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is tooo high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()

}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousGuess = []
        newGuess = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - newGame}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })

}