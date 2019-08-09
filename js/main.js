let choices = ['Paper', 'Rock', 'Scissors'];
let computerSelection;
let playerSelection;

// Define random pick for computer player

function computerPlay() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
};

// Main game function

function game() {
let playerVar;
let userScore = 0;
let compScore = 0;

  for (i = 0; i < 5; i++) {


    // Game Logic

    function playRound(playerSelection, computerSelection) {

        // Player Selection

        playerVar = prompt("Rock, Paper or Scissors?");
        if (playerVar === null) {
          return playerVar;
        };
        playerSelection = playerVar.toUpperCase();


        while (!playerSelection.match(/^\s*(?:rock|paper|scissors)\s*$/i)) {
          playerVar = prompt("Oh come on, not funny. Valid inputs: "
				+ "Rock, Paper or Scissors?");
          playerSelection = playerVar.toUpperCase();
         };
  

        // Capitalize first letter+lower remaining

        playerChoice = playerSelection.charAt(0).toUpperCase()
			+ playerSelection.slice(1).toLowerCase(); 
          console.log("Player pick is " + playerChoice);


        // Computer Selection

        computerVar = computerPlay();
        console.log("Computer pick is " + computerVar);
        computerChoice = computerVar.charAt(0).toUpperCase() + computerVar.slice(1);
        computerSelection = computerChoice.toUpperCase();

        // Score Commentary

        let commentLose = "You Lose! " + computerVar + " beats " + playerChoice;
        let commentWin = "You Win! " + playerChoice + " beats " + computerVar;


        // Compare Picks

        if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
          console.log(commentLose);
          compScore++;  
  
        } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
          console.log(commentWin);
          userScore++;
  
        } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
          console.log(commentWin);
          userScore++;
  
        } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
          console.log(commentLose);
          compScore++;

        } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
          console.log(commentLose);
          compScore++;

        } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
          console.log(commentWin);
          userScore++;

        } else {
          console.log("Draw");
        };

    };

    // Check if user quit prompt
    if (playerVar === null) {
      return console.log("* You quit the game *");
    };

    playRound();


  };


if (userScore > compScore) {
  console.log("** You win the game! **");
} else if (userScore < compScore) {
  console.log("** You lose the game! **");
  } else {
  console.log("** It's a Draw! **");
  }

};