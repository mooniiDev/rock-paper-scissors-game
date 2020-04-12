
function playerPlay() {
  let playerSelection = prompt('∘• rock | paper | scissors •∘').toLowerCase();
  if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
    console.log(`Your choice is ${playerSelection}.`)
    return playerSelection;
  }
  console.log(`YOU CAN'T TYPE ${playerSelection}.VALID WORDS ARE  ROCK | PAPER | SCISSORS`);
  console.log('%cTHIS ROUND OF THE GAME WAS DESTROYED (╯°益°)╯彡┻━┻', 'color: #ef8513');
}

function computerPlay() {
  const signs = ['rock', 'paper', 'scissors'];
  computerSelection = signs[Math.floor(Math.random() * signs.length)];
  return computerSelection;
}

function oneRound(playerSelection, computerSelection) {
  switch (true) {
    case (playerSelection == 'rock' && computerSelection == 'scissors'):
    case (playerSelection == 'paper' && computerSelection == 'rock'):
    case (playerSelection == 'scissors' && computerSelection == 'paper'):
      playerScore++;
      playerScore =+ playerScore;
    console.log(`Computer's choice is ${computerSelection}.`)
    console.log(`You won, because ${playerSelection} beats ${computerSelection} (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧`);
    console.log(`Your score is → ${playerScore} | Computer's score is → ${computerScore}`);
    return playerScore;
    case (playerSelection == 'rock' && computerSelection == 'paper'):
    case (playerSelection == 'paper' && computerSelection == 'scissors'):
    case (playerSelection == 'scissors' && computerSelection == 'rock'):
      computerScore++;
      computerScore =+ computerScore;
    console.log(`Computer's choice is ${computerSelection}.`)
    console.log(`You lost, because ${computerSelection} beats ${playerSelection} ｡ﾟ･(>﹏<)･ﾟ｡`);
    console.log(`Your score is → ${playerScore} | Computer's score is → ${computerScore}`);
    return computerScore;
    case (playerSelection == computerSelection):
      playerScore = playerScore;
      console.log(`Computer's choice is ${computerSelection}.`)
      console.log(`Tie, because both chose ${playerSelection} (-_-;)・・・`);
      console.log(`Scores remain the same: ${playerScore} | ${computerScore}`);
      break;
  }
  return [playerScore, computerScore];
}

let playerScore = 0;
let computerScore = 0;

oneRound(playerPlay(), computerPlay());
