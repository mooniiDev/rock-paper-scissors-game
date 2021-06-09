const weaponsButtons = document.querySelectorAll('.weapon-button');
const rounds = document.querySelector('.round');
const combatText = document.querySelector('.combat-text');
const buttonPlayAgain = document.querySelector('.play-again');

let playerLives = 5;
let computerLives = 5;
let round = 0;

function countRounds() {
  round += 1;
  rounds.innerText = `Round: ${round}`;
  return round;
}

function computerPlay() {
  const weapons = ['wand', 'bow', 'mace'];
  const computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
  const computerIcon = document.querySelector('.computer-icon');

  computerIcon.classList.remove('fa-skull', 'fa-wand-magic', 'fa-bow-arrow', 'fa-mace');
  if (computerSelection === 'wand') {
    computerIcon.classList.add('fa-wand-magic');
    computerIcon.style.color = '#8070ac';
  } else if (computerSelection === 'bow') {
    computerIcon.classList.add('fa-bow-arrow');
    computerIcon.style.color = '#62b49c';
  } else if (computerSelection === 'mace') {
    computerIcon.classList.add('fa-mace');
    computerIcon.style.color = '#b96b78';
  }
  return computerSelection;
}

function countLives(playerSelection, computerSelection) {
  const gameOutput = document.querySelector('.game-output');
  const computerPlayDiv = document.querySelector('.computer-play-div');

  switch (true) {
    case (playerSelection === computerSelection):
      combatText.innerText = `Hmm.. Two ${playerSelection}s means a draw, so no lives were lost. Let's try again.`;
      gameOutput.style.border = '4px solid #8070ac';
      computerPlayDiv.classList.remove('grey-border', 'green-border', 'red-border');
      computerPlayDiv.classList.add('purple-border');
      break;
    case (playerSelection === 'wand' && computerSelection === 'mace'):
    case (playerSelection === 'bow' && computerSelection === 'wand'):
    case (playerSelection === 'mace' && computerSelection === 'bow'):
      combatText.textContent = `Impressive attack! The enemy lost one life, because the great power of your ${playerSelection} crushed his ${computerSelection}!`;
      gameOutput.style.border = '4px solid #62b49c';
      computerPlayDiv.classList.remove('grey-border', 'red-border', 'purple-border');
      computerPlayDiv.classList.add('green-border');
      computerLives -= 1;
      break;
    default:
      combatText.innerText = `Unfortunate defeat.. You lost one life, because your ${playerSelection} lacks of power against enemy's ${computerSelection}!`;
      gameOutput.style.border = '4px solid #b96b78';
      computerPlayDiv.classList.remove('grey-border', 'green-border', 'purple-border');
      computerPlayDiv.classList.add('red-border');
      playerLives -= 1;
      break;
  }

  const lives = document.querySelector('.lives');
  lives.innerText = `Your Lives: ${playerLives} ︱ Enemy's Lives: ${computerLives}`;
  return [playerLives, computerLives];
}

function endGame(playerHealth, computerHealth) {
  if (playerHealth === 0 || computerHealth === 0) {
    weaponsButtons.forEach((button) => {
      button.setAttribute('disabled', '');
      button.classList.add('disabled-button', 'opacity');
    });

    const computerIcon = document.querySelector('.computer-icon');
    computerIcon.style.opacity = '0.5';

    const gameEndText = document.querySelector('.game-end-text');
    if (playerLives > computerLives) {
      combatText.innerText = 'Hehe, poor enemy has no lives left.. He barely holds himself in one piece.';
      gameEndText.textContent = 'You Won This Battle!';
      gameEndText.style.color = '#62b49c';
    } else {
      combatText.innerText = 'Ouch.. No lives left for you. Enjoy the mocking laughter of the enemy.';
      gameEndText.textContent = 'You Lost This Battle!';
      gameEndText.style.color = '#b96b78';
    }
    buttonPlayAgain.style.visibility = 'visible';
  }
}

function resetGame() {
  buttonPlayAgain.addEventListener('click', () => {
    window.location.reload();
  });
}

function playGame() {
  let playerSelection;
  weaponsButtons.forEach((weapon) => {
    weapon.addEventListener('click', () => {
      const weaponIcons = document.querySelectorAll('.weapon-icon');
      if (weapon.classList.contains('wand-button')) {
        weaponIcons[0].style.color = '#8070ac';
        weaponIcons[1].style.color = '#5e5e5e';
        weaponIcons[2].style.color = '#5e5e5e';
        playerSelection = 'wand';
      } else if (weapon.classList.contains('bow-button')) {
        weaponIcons[1].style.color = '#62b49c';
        weaponIcons[0].style.color = '#5e5e5e';
        weaponIcons[2].style.color = '#5e5e5e';
        playerSelection = 'bow';
      } else {
        weaponIcons[2].style.color = '#b96b78';
        weaponIcons[0].style.color = '#5e5e5e';
        weaponIcons[1].style.color = '#5e5e5e';
        playerSelection = 'mace';
      }
      countRounds();
      countLives(playerSelection, computerPlay());
      endGame(playerLives, computerLives);
      resetGame();
    });
  });
}

playGame();
