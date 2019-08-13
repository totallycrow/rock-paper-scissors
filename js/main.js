let choices = ['PAPER', 'ROCK', 'SCISSORS'];
let roundNum = 1;

let computerSelection;
let playerSelection;

let initScore = 0;
let userScore = initScore;
let compScore = initScore;
let drawScore = initScore;


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

// Selection Icons
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


function rockSelectPlay() {
  playerSelection = choices[1];
  console.log(playerSelection);
  computerSelection = computerPlay();
  console.log(computerSelection);
  playerImg.innerHTML = '<i class="far fa-hand-rock"></i>';
  assingCompIcon();
  game();
}

rockPlay.addEventListener("click", rockSelectPlay);

function paperSelectPlay() {
  playerSelection = choices[0];
  
  
  console.log(playerSelection);
  computerSelection = computerPlay();


  console.log(computerSelection);
  playerImg.innerHTML = '<i class="far fa-hand-paper"></i>';
  assingCompIcon();
  game();
}




paperPlay.addEventListener("click", paperSelectPlay);

function scissorsSelectPlay() {
  playerSelection = choices[2];
  console.log(playerSelection);
  computerSelection = computerPlay();
  console.log(computerSelection);
  playerImg.innerHTML = '<i class="far fa-hand-scissors"></i>';
  assingCompIcon();
  game();
}

scissorsPlay.addEventListener("click", scissorsSelectPlay);


// Define random pick for computer player

function computerPlay() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
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

        if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
          whoWinsCom.textContent = commentLose;
          console.log(commentLose);
          compScore++;  
  
        } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
          whoWinsCom.textContent = commentWin;
          console.log(commentWin);
          userScore++;          
  
        } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
          whoWinsCom.textContent = commentWin;
          console.log(commentWin);
          userScore++;
  
        } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
          whoWinsCom.textContent = commentLose;
          console.log(commentLose);
          compScore++;

        } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
          whoWinsCom.textContent = commentLose;
          console.log(commentLose);
          compScore++;

        } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
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
  }
// if (userScore > compScore) {
//   console.log("** You win the game! **");
// } else if (userScore < compScore) {
//   console.log("** You lose the game! **");
//   } else {
//   console.log("** It's a Draw! **");
//   }



