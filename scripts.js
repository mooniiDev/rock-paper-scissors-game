let playerScore = 0;
let computerScore = 0;
let round = 0;
const weaponsButtons = document.querySelectorAll('.weapon-btn');

function startGame() {
  weaponsButtons.forEach((weapon) => {
    weapon.addEventListener('click', function() {
      round++;
      round =+ round;
      console.log(`ROUND: ${round}`);
      let playerSelection;
      if (weapon.classList.contains('wand-btn')) {
        playerSelection = 'wand';
      } else if (weapon.classList.contains('bow-btn')) {
        playerSelection = 'bow';
      } else {
        playerSelection = 'mace';
      }
      console.log(`Your choice is ${playerSelection}.`);
      const computerSelection = computerPlay();
      getScores(playerSelection, computerSelection);
      endGame(playerScore, computerScore);
      return;
    });
  });
};

function computerPlay() {
  const weapons = ['wand', 'bow', 'mace'];
  const computerChoice = weapons[Math.floor(Math.random() * weapons.length)];
  console.log(`Computer's choice is ${computerChoice}.`);
  return computerChoice;
};

function getScores(playerSelection, computerSelection) {
  switch (true) {
    case (playerSelection == 'wand' && computerSelection == 'mace'):
    case (playerSelection == 'bow' && computerSelection == 'wand'):
    case (playerSelection == 'mace' && computerSelection == 'bow'):
      playerScore++;
      playerScore =+ playerScore;
      console.log(`You won, because ${playerSelection} beats ${computerSelection} (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧`);
      break;
    case (playerSelection == 'wand' && computerSelection == 'bow'):
    case (playerSelection == 'bow' && computerSelection == 'mace'):
    case (playerSelection == 'mace' && computerSelection == 'wand'):
      computerScore++;
      computerScore =+ computerScore;
      console.log(`You lost, because ${computerSelection} beats ${playerSelection} ｡ﾟ･(>﹏<)･ﾟ｡`);
      break;
    case (playerSelection == computerSelection):
      console.log(`Tie, because both chose ${playerSelection} (-_-;)・・・`);
      break;
  }
  console.log(`Your score → ${playerScore} | Computer's score → ${computerScore}`);
  return [playerScore, computerScore];
};

function endGame(playerScore, computerScore) {
  if (playerScore === 3 || computerScore == 3) {
    console.log(`END OF THE GAME! Final result → ${playerScore} | ${computerScore}`);
    if (playerScore > computerScore) {
      console.log('%cYOU WON!', 'color: #29c979');
    } else {
      console.log('%cYOU LOST!', 'color: #ee2a2a');
    };
    for(let i = 0; i < weaponsButtons.length; i++) {
      weaponsButtons[i].disabled = true;
    };
  };
  return;
};

startGame();
