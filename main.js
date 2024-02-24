const choices = ["камень", "бумага", "ножницы"];
const playerDisplay = document.getElementById("player-display");
const computerDisplay = document.getElementById("computer-display");
const resultDisplay = document.getElementById("result-display");
const playerScoreDisplay = document.getElementById("player-score-display");
const computerScoreDisplay = document.getElementById("computer-score-display");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "НИЧЬЯ!";
    }
    else{
        switch(playerChoice){
            case "камень":
                result = (computerChoice === "ножницы") ? "ТЫ ВЫИГРАЛ!" : "ТЫ ПРОИГРАЛ!";
                break;
            case "бумага":
                result = (computerChoice === "камень") ? "ТЫ ВЫИГРАЛ!" : "ТЫ ПРОИГРАЛ!";
                break;
            case "ножницы":
                result = (computerChoice === "бумага") ? "ТЫ ВЫИГРАЛ!" : "ТЫ ПРОИГРАЛ!";
                break;
        }
    }

    playerDisplay.textContent = `ИГРОК: ${playerChoice}`;
    computerDisplay.textContent = `КОМПЬЮТЕР: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "ТЫ ВЫИГРАЛ!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "ТЫ ПРОИГРАЛ!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}