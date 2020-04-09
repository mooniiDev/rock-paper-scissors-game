// Function for computer selection
function computerPlay() {
  const signs = ['rock', 'paper', 'scissors'];
  return signs[Math.floor(Math.random() * signs.length)];
}

// Function for one round of the game
function playRound(playerSign, computerSelection) {

  // Validation for player selection
  let playerSelection = playerSign.toString().toLowerCase();

  if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
    console.log(`Your choice is ${playerSelection}.`)
    console.log(`Computer's choice is ${computerSelection}.`)
  } else {
    console.log(`You can't type ${playerSelection}.`)
    console.log('Valid words are: rock paper scissors ლ(ಠ_ಠლ)')
  }

  // Selections comparison
  switch(true) {
    case (playerSelection == 'rock' && computerSelection == 'scissors'):
    case (playerSelection == 'paper' && computerSelection == 'rock'):
    case (playerSelection == 'scissors' && computerSelection == 'paper'):
      console.log(`You won, because ${playerSelection} beats ${computerSelection} (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧`);
      break;
    case (playerSelection == 'rock' && computerSelection == 'paper'):
    case (playerSelection == 'paper' && computerSelection == 'scissors'):
    case (playerSelection == 'scissors' && computerSelection == 'rock'):
      console.log(`You lost, because ${computerSelection} beats ${playerSelection} ｡ﾟ･(>﹏<)･ﾟ｡`);
      break;
    case (playerSelection == computerSelection):
      console.log(`Tie, because both chose ${playerSelection} (-_-;)・・・`);
      break;
  }
}

playRound('Rock', computerPlay());
