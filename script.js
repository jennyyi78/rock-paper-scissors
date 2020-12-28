
// 0 = Rock, 1 = Paper, 2 = Scissors
// -1 = Lose, 0 = Tie, 1 = Win

let rounds = 0;
let wins = 0;
let losses = 0;
let ties = 0;

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    const text = document.querySelector(".result-container");
    let result;
    if (playerSelection === computerSelection) {
        text.textContent = "It's a tie!";
        result = 0;
    }

    if (playerSelection === 0) {
        if (computerSelection === 1) {
            text.textContent = "You Win! Rock beats Paper";
            result = 1;
        } else if (computerSelection == 2) {
            text.textContent = "You Lose! Scissors beats Rock";
            result = -1;
        }
    }

    if (playerSelection === 1) {
        if (computerSelection === 0) {
            text.textContent = "You Win! Paper beats Rock";
            result = 1;
        } else if (computerSelection == 2) {
            text.textContent = "You Lose! Scissors beats Paper";
            result = -1;
        }
    }

    if (playerSelection === 2) {
        if (computerSelection === 0) {
            text.textContent = "You Lose! Rock beats Scissors";
            result = -1;
        } else if (computerSelection == 1) {
            text.textContent = "You Win! Scissors beats Paper";
            result = 1;
        }
    }

    game(result);
}

function game(result) {
    const text = document.querySelector(".result-container");
    const score = document.querySelector(".score-container");
    if (rounds === 0) {
        text.classList.remove("gameover");
        score.classList.remove("gameover");
    }

    if (result > 0) {
        wins++;
    } else if (result < 0) {
        losses++;
    } else {
        ties++;
    }

    score.textContent = "Wins: " + wins + " Losses: " + losses + " Ties: " + ties;

    rounds++;

    if (rounds === 5) {
        text.classList.toggle("gameover");
        score.classList.toggle("gameover");
        if (wins > losses) {
            text.textContent = "You won the game!";
        } else if (wins < losses) {
            text.textContent = "You lost the game!";
        } else {
            text.textContent = "The game is a tie!";
        }
        
        const div = document.createElement("div");
        const again = document.createTextNode("Choose an Option to Play Again");
        div.style.cssText = "font-size: 15px; margin-top: 20px;";
        div.appendChild(again);
        text.appendChild(div);
        rounds = 0;
        wins = 0;
        losses = 0;
        ties = 0;
    }
}

const rock = document.querySelector(".rock");
rock.addEventListener('click', () => {
    playRound(0, computerPlay());
});

const paper = document.querySelector(".paper");
paper.addEventListener('click', () => {
    playRound(1, computerPlay());
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener('click', () => {
    playRound(2, computerPlay());
});