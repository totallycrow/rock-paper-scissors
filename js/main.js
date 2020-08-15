// Main Variables

let choices = [
  {
    id:'PAPER',
    strength: 'ROCK',
    weakness: 'SCISSORS'
  },
  {
    id:'ROCK',
    strength: 'SCISSORS',
    weakness: 'PAPER'
  },
  {
    id:'SCISSORS',
    strength: 'PAPER',
    weakness: 'ROCK'
  } 

];
let roundNum = 1;

let computerSelection, playerSelection;

let initScore = 0;

let userScore = compScore = drawScore = initScore;



// ******* PRE-GAME ************

// Reset Game
let resetButton = document.getElementById("reset");
function gameReset() {

  whoWinsCom.textContent = initialBotCom;
  gameRound.textContent = 1;
  gameRoundBottom.textContent = 1; 
  
  playerResult.textContent = initScore;
  tieResult.textContent = initScore;
  compResult.textContent = initScore;

  roundNum = 1;
  userScore = initScore;
  compScore = initScore;
  drawScore = initScore;
  
  playerImg.innerHTML = '';
  compImg.innerHTML = '';
}

resetButton.addEventListener("click", gameReset);

// Select Icons
let playerImg = document.getElementById("player-img");
let compImg = document.getElementById("comp-img");

// Round Numbers
let gameRound = document.querySelector(".round-num");
let gameRoundBottom = document.getElementById("round-num-bot");

// Scores
let playerResult = document.querySelector(".win");
let tieResult = document.querySelector(".tie");
let compResult = document.querySelector(".comp-win");


// Bottom Commentary
let initialBotCom = "Choose Paper, Rock or Scissor to start the game!";
let whoWinsCom = document.querySelector(".who-wins");
whoWinsCom.textContent = initialBotCom;


// Start Game on Button Click

let rockPlay = document.getElementById("btn-rock");
let paperPlay = document.getElementById("btn-paper");
let scissorsPlay = document.getElementById("btn-scissors");

// **** Button Clicks ****

// Computer playing part
function compSelectionStartGame() {
  computerSelection = computerPlay();
  assingCompIcon();
  game();
}

// **** Player Selection Button Click ****

document.querySelector('.controls').addEventListener('click', function(event){
    
  if (event.target.id === "btn-rock") {
    console.log(event.target);

    // Player selects rock
    playerSelection = choices[1].id;   
    playerImg.innerHTML = '<i class="far fa-hand-rock"></i>'; 
    
  }
  else if (event.target.id === "btn-paper") {

    // Player selects rock
    playerSelection = choices[0].id;
    playerImg.innerHTML = '<i class="far fa-hand-paper"></i>';
    
  }

  else if (event.target.id === "btn-scissors") {

    // Player selects rock
    playerSelection = choices[2].id;
    playerImg.innerHTML = '<i class="far fa-hand-scissors"></i>';
    
  } else return;
  compSelectionStartGame();
});




// Define random pick for computer player
var computerNumber;

function computerPlay() {
  computerNumber = [Math.floor(Math.random() * choices.length)];
  let computerChoice = choices[computerNumber].id;
  return computerChoice;
};

// Define computer icon

function assingCompIcon() {
  if(computerSelection === "SCISSORS") {
    compImg.innerHTML = '<i class="far fa-hand-scissors"></i>';
  } else if (computerSelection === "PAPER") {
    compImg.innerHTML = '<i class="far fa-hand-paper"></i>';
  } else {
    compImg.innerHTML = '<i class="far fa-hand-rock"></i>';
  }
}

// ***************** MAIN GAME ************************

function game() {

        // Score Commentary

        let commentLose = "You Lose! " + computerSelection + " beats " + playerSelection;
        let commentWin = "You Win! " + playerSelection + " beats " + computerSelection;


        // Compare Picks

        if (playerSelection === choices[computerNumber].strength) {
          whoWinsCom.textContent = commentLose;
          console.log(commentLose);
          compScore++;  
  
        } else if (playerSelection === choices[computerNumber].weakness) {
          whoWinsCom.textContent = commentWin;
          console.log(commentWin);
          userScore++;          
  
        } else {
          whoWinsCom.textContent = "Draw!";
          console.log("Draw");
          drawScore++;
        };
        
        roundNum++
        playerResult.textContent = userScore;
        tieResult.textContent = drawScore;
        compResult.textContent = compScore;


        // Update round number
        gameRound.textContent = roundNum;
        gameRoundBottom.textContent = (roundNum-1);
  };



