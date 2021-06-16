function computerPlay() {
    choice = ["ROCK", "PAPER", "SCISSORS"];
    return choice[Math.floor(Math.random() * 3)];
}

const playerWin = "player wins";
const compWin = "computer wins";
let computerScore = 0;
let playerScore = 0;

function playGame(computerChoice, playerSelection) {
    if (
      computerChoice === "rock".toUpperCase() &&
      playerSelection === "SCISSORS"
    ) {
      return compWin;
    } else if (
      computerChoice === "scissors".toUpperCase() &&
      playerSelection === "ROCK"
    ) {
      return playerWin;
    } else if (
      computerChoice === "rock".toUpperCase() &&
      playerSelection === "PAPER"
    ) {
      return playerWin;
    } else if (
      computerChoice === "paper".toUpperCase() &&
      playerSelection === "ROCK"
    ) {
      return compWin;
    } else if (
      computerChoice === "scissors".toUpperCase() &&
      playerSelection === "PAPER"
    ) {
      return compWin;
    } else if (
      computerChoice === "paper".toUpperCase() &&
      playerSelection === "SCISSORS"
    ) {
      return playerWin;
    } else {
      return "play again";
    }
  }  


function game(){
    const playerChoice = prompt("Please enter a choice between Rock, Paper and Scissors").toUpperCase()
    var computerChoice = computerPlay()


   var result = playGame(computerChoice, playerChoice)
   console.log(result, computerChoice, playerChoice)
   if(result === compWin){
       computerScore++
   }else if (result === playerWin){
       playerScore++
   }else{
       return result
   }
   return {computerScore, playerScore}
   
}
  

function iteration () {
    for (let i = 0; i < 5; i++) {
        console.log(game())
    }
    if(computerScore > playerScore){
        return "Computer Wins"
    }else if (playerScore > computerScore){
        return "Player wins"
    }else{
        return "IT'S A TIE"
    }
}
console.log(iteration())
  