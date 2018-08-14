destination = document.getElementById('div1')
function displayTextOnPage (text,what,where){
    text = document.createTextNode(text);
    let element = document.createElement(what);
    element.appendChild(text);
    where.appendChild(element)
}
let i = 1;
let humanScore = 0;
let computerScore = 0;
let numberOfDraws = 0;
function clearPage(where){
    where.innerHTML = 'Round: ' + i;
    i++
}

let score = 'Score:  You: ' + humanScore + ' Computer: ' + computerScore
function refreshScoreAndDisplayIt(){
    score = 'Score:  You: ' + humanScore + ' Computer: ' + computerScore + ' Draws: ' + numberOfDraws
    displayTextOnPage(score, 'p', destination)
}
// displayTextOnPage('testing','p',destination)
function computerSelects() {
    let result = '';
    let randInt0to2 = Math.floor((Math.random() * 3))
    if (randInt0to2 == 0){result = 'rock'}
    if (randInt0to2 == 1){result = 'paper'}
    if (randInt0to2 == 2){result = 'scissors'}
    return result
}



document.getElementById('rockButton').onclick = function (){
    clearPage(destination);
    displayTextOnPage('You selected rock', 'p', destination)
    let computerSelection = computerSelects();
    displayTextOnPage('The computer selected ' + computerSelection, 'p', destination)
    if (computerSelection == 'paper'){
        displayTextOnPage('You lose this round','p', destination)
        computerScore++
    }
    if (computerSelection == 'rock'){
        displayTextOnPage("It's a draw! It's like everybody is a winner this round!",'p', destination)
        numberOfDraws++
    }
    if (computerSelection == 'scissors'){
        displayTextOnPage('You won! Did you cheat?','p', destination)
        humanScore++
    }
    refreshScoreAndDisplayIt();
}
document.getElementById('paperButton').onclick = function (){
    clearPage(destination);
    displayTextOnPage('You selected paper', 'p', destination)
    let computerSelection = computerSelects();
    displayTextOnPage('The computer selected ' + computerSelection, 'p', destination)
    if (computerSelection == 'paper'){
        displayTextOnPage('It is a tie','p', destination)
        numberOfDraws++
    }
    if (computerSelection == 'rock'){
        displayTextOnPage("You won! Good job.",'p', destination)
        humanScore++
    }
    if (computerSelection == 'scissors'){
        displayTextOnPage("You lost. Sorry. You're not very good at this, are you?",'p', destination)
        computerScore++
    }
    refreshScoreAndDisplayIt();
}
document.getElementById('scissorsButton').onclick = function (){
    clearPage(destination);
    displayTextOnPage('You selected scissors', 'p', destination)
    let computerSelection = computerSelects();
    displayTextOnPage('The computer selected ' + computerSelection, 'p', destination)
    if (computerSelection == 'paper'){
        displayTextOnPage('Scissors cut paper everytime. You win!','p', destination)
        humanScore++
    }
    if (computerSelection == 'rock'){
        displayTextOnPage('The computer won! That means you lost. :(','p', destination)
        computerScore++
    }
    if (computerSelection == 'scissors'){
        displayTextOnPage("Scissors can't cut, nor be cut by, scissors.  It's a draw.",'p', destination)
        numberOfDraws++
    }
    refreshScoreAndDisplayIt();
}
