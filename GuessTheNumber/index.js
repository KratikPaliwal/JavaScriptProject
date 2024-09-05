let randomNumber = parseInt(Math.random()*100+1);
const inputbox = document.querySelector('#number');
const submitButton = document.querySelector('#sumit-btn');
const previousGuessNumber = document.querySelector('#previous-guess-number');
const remainingCount = document.querySelector('#remaining-count');
const lowHigh = document.querySelector('#low-high');
const remaining = document.querySelector('#remaining');
const resultDiv = document.querySelector('.result-div')
const p = document.createElement('li');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame)
{
    submitButton.addEventListener('click',  (e)=>{
        e.preventDefault();
        const guess = parseInt(inputbox.value);
        console.log(guess)
        validGuess(guess);


    })
}

function validGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1){
        alert('Please give a number greater than 1 ');
    }
    else if(guess>100){
        alert('Please give a number less than or equal to 100')
    }
    else
    {
        prevGuess.push(guess);
        if(numGuess===11)
        {
            displayGuess(guess);
            displayMessage(`Game Over. The correct Number was ${randomNumber}`);
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess)
{
    if(guess===randomNumber)
    {
        displayMessage('You Guessed it. You Won 🤩');
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage('Your Guess is Low.');
    
    }
    else if (guess>randomNumber)
    {
        displayMessage('Your Guess is High.');
    }

}

function displayGuess(guess)
{
    inputbox.value = '';
    previousGuessNumber.innerHTML+=`${guess},`
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;

}

function displayMessage(message)
{
    lowHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame()
{
    inputbox.value='';
    inputbox.setAttribute('disable','');
    p.classList.add('button');
    p.innerHTML=`<h2 id = 'newGame'>Start New Game</h2>`
    resultDiv.appendChild(p);
    playGame=false;
    newGame();    
}

function newGame()
{
    const newButton = document.querySelector('#newGame');
    newButton.addEventListener('click', (e)=>{
        let randomNumber = parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        remaining.innerHTML=`${11-numGuess}`;
        inputbox.removeAttribute('disable');
        resultDiv.removeChild(p);
        playGame=true;
    })
}

