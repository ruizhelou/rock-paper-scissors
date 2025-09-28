let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = Math.random();
    if(choice < 1/3) {
        return "rock"
    } else if(choice < 2/3) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    const result = document.createElement("div")

    if(humanChoice == 'rock') {
        if(computerChoice == 'rock') {
            result.textContent = "Draw! You: rock, computer: rock"
        } else if(computerChoice == 'paper') {
            result.textContent = 'Computer wins! You: rock, computer: paper'
            computerScore++
        } else {
            result.textContent = 'You win! You: rock, computer: scissors'
            humanScore++
        }
    } else if(humanChoice == 'paper') {
        if(computerChoice == 'rock') {
            result.textContent = 'You win! You: paper, computer: rock'
            humanScore++
        } else if(computerChoice == 'paper') {
            result.textContent = 'Draw! You: paper, computer: paper'
        } else {
            result.textContent = 'Computer wins! You: paper, computer: rock'
            computerScore++
        }
    } else if (humanChoice == 'scissors') {
        if(computerChoice == 'rock') {
            result.textContent = 'Computer wins! You: scissors, computer: rock'
            computerScore++
        } else if(computerChoice == 'paper') {
            result.textContent = 'You win! You: scissors, computer: paper'
            humanScore++
        } else {
            result.textContent = 'Draw! You: scissors, computer: scissors'
        }
    } else {
        result.textContent = "Your choice " + humanChoice + " is not rock, paper, or scissors!"
    }
    
    const body = document.querySelector("body")
    body.appendChild(result)

    const humanScoreDiv = document.querySelector("#human-score")
    const computerScoreDiv = document.querySelector("#computer-score")

    humanScoreDiv.textContent = `Human score: ${humanScore}`
    computerScoreDiv.textContent = `Computer score: ${computerScore}`

    if(humanScore === 5) {
        alert(`You win! Your score: ${humanScore}, computer score: ${computerScore}`)
    } else if(computerScore === 5) {
        alert(`You lose! Your score: ${humanScore}, computer score: ${computerScore}`)
    }
}

const rockButton = document.querySelector("#rock-button")
rockButton.addEventListener("click", (event) => playRound("rock", getComputerChoice()))

const paperButton = document.querySelector("#paper-button")
paperButton.addEventListener("click", (event) => playRound("paper", getComputerChoice()))

const scissorsButton = document.querySelector("#scissors-button")
scissorsButton.addEventListener("click", (event) => playRound("scissors", getComputerChoice()))
